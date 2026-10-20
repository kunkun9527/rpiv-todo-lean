# @ssk_dev/rpiv-todo-lean

<!-- token-benchmark:summary:start -->
> **Token benchmark: Lean 250, upstream `@juicesharp/rpiv-todo@2.13.8` 904 — 72.3% fewer.**
<!-- token-benchmark:summary:end -->
> [See my full setup for Pi](https://github.com/kunkun9527/my-lean-pi-setup)

[简体中文](https://github.com/kunkun9527/rpiv-todo-lean/blob/main/README_zh-CN.md)

A lightweight Pi wrapper for [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo). It preserves the complete task management engine while drastically reducing tool description overhead in the system prompt.

## Context Footprint Benchmark

<!-- token-benchmark:benchmark:start -->
With only this extension enabled, its recurring model-facing initialization contribution is:

| Variant | Tool and prompt contribution | Total |
| --- | --- | ---: |
| Lean `@ssk_dev/rpiv-todo-lean@2.13.10` | `todo` (250) | **250** |
| Upstream `@juicesharp/rpiv-todo@2.13.8` | `todo` (904) | **904** |

This saves **654 tokens (72.3%)**.
Measured with Pi 1.3.0 in separate temporary processes with empty working directories and configuration. Built-in tools, skills, context files, session history, user messages, unrelated extensions, runtime UI, and slash commands are excluded; `before_agent_start` additions are included. Tokens are a fixed character-proxy estimate using `ceil(characters / 4)`, not provider tokenizer billing.
<!-- token-benchmark:benchmark:end -->

## Core Features

* Full task lifecycle: Supports creating, listing, viewing, updating, deleting, and clearing tasks.
* Dependencies and tracking: Manages status transitions, dependencies, metadata, commands, and replay logs.
* Concise schema: Keeps the native flat schema while removing repetitive field documentation and wordy prompt guidelines.
* RPC host plans: In RPC mode, create/update/delete results append a `- [x] step` checklist, so hosts such as codexhost (Codex Desktop) show the native plan panel. Interactive mode output is unchanged.

## Installation

```bash
pi install npm:@ssk_dev/rpiv-todo-lean
```

Do not load this alongside another `rpiv-todo` wrapper to avoid registering duplicate tools.

## Usage

The model interacts with a single tool:

```text
todo
```

Supported actions include `create`, `list`, `get`, `update`, `delete`, and `clear`. For multi-step tasks, create the items, set each step `in_progress` before starting it, and mark it `completed` as soon as it finishes — one at a time, never batched at the end.

## Versions

- Lean wrapper: `2.13.10`
- Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.13.8` and `@juicesharp/rpiv-i18n@2.13.8`.

## Development

```bash
npm ci
npm run check
```

## License

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).