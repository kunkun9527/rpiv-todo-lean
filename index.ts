import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import todo from "@juicesharp/rpiv-todo";
const COLLAPSED_DISPLAY_SERVICE = Symbol.for(
	"@local/pi-collapsed-tools.display-service.v1",
);

type CollapsedDisplayTool = { name: string };
type CollapsedDisplayService = {
	readonly version: 1;
	decorate<T extends CollapsedDisplayTool>(tool: T): T;
};

function decorateWithCollapsedDisplay<T extends CollapsedDisplayTool>(tool: T): T {
	const services = globalThis as unknown as Record<PropertyKey, unknown>;
	const candidate = services[COLLAPSED_DISPLAY_SERVICE];
	if (!candidate || typeof candidate !== "object") return tool;
	const service = candidate as Partial<CollapsedDisplayService>;
	return service.version === 1 && typeof service.decorate === "function"
		? service.decorate(tool)
		: tool;
}

const TOOL_DESCRIPTION = "Track tasks for multi-step work.";
const PROMPT_SNIPPET = "";
const PROMPT_GUIDELINES = [
	"Use for 3+ steps. create needs subject; update/get/delete need id; update also needs changed fields; list may filter by status/includeDeleted; clear resets all. Status: pending|in_progress|completed|deleted. Use blockedBy on create and addBlockedBy/removeBlockedBy on update. Keep exactly one in_progress and complete tasks as soon as they are done.",
];

function removeSchemaDescriptions(value: unknown, seen = new Set<object>(), isPropertiesMap = false): void {
	if (value === null || typeof value !== "object" || seen.has(value)) return;
	seen.add(value);
	if (!isPropertiesMap) delete (value as Record<string, unknown>).description;
	for (const [key, child] of Object.entries(value)) {
		removeSchemaDescriptions(child, seen, key === "properties");
	}
}

export default function (pi: ExtensionAPI): void {
	const leanPi = new Proxy(pi, {
		get(target, property) {
			if (property === "registerTool") {
				return (tool: Parameters<ExtensionAPI["registerTool"]>[0]) => {
					if (tool.name === "todo") {
						removeSchemaDescriptions(tool.parameters);
						return target.registerTool(decorateWithCollapsedDisplay({
							...tool,
							description: TOOL_DESCRIPTION,
							promptSnippet: PROMPT_SNIPPET,
							promptGuidelines: PROMPT_GUIDELINES,
						}));
					}
					return target.registerTool(decorateWithCollapsedDisplay(tool));
				};
			}

			const member = Reflect.get(target, property, target);
			return typeof member === "function" ? member.bind(target) : member;
		},
	});

	todo(leanPi);
}
