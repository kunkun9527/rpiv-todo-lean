# @ssk_dev/rpiv-todo-lean

<!-- token-benchmark:summary:start -->
> **Token benchmark: Lean 246, upstream `@juicesharp/rpiv-todo@2.10.1` 904 — 72.8% fewer.**
<!-- token-benchmark:summary:end -->
> [See my full setup for Pi](https://github.com/kunkun9527/my-lean-pi-setup)

[简体中文](README.zh-CN.md)

A lightweight Pi wrapper for [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo). It preserves the complete task management engine while drastically reducing tool description overhead in the system prompt.

## Core Features

* Full task lifecycle: Supports creating, listing, viewing, updating, deleting, and clearing tasks.
* Dependencies and tracking: Manages status transitions, dependencies, metadata, commands, and replay logs.
* Concise schema: Keeps the native flat schema while removing repetitive field documentation and wordy prompt guidelines.

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

Supported actions include `create`, `list`, `get`, `update`, `delete`, and `clear`. For multi-step tasks, create the items, keep exactly one task `in_progress`, and mark it `completed` when finished.

## Context Footprint Benchmark

<!-- token-benchmark:benchmark:start -->
With only this extension enabled, its recurring model-facing initialization contribution is:

| Variant | Tool and prompt contribution | Total |
| --- | --- | ---: |
| Lean `@ssk_dev/rpiv-todo-lean@2.10.1` | `todo` (246) | **246** |
| Upstream `@juicesharp/rpiv-todo@2.10.1` | `todo` (904) | **904** |

This saves **658 tokens (72.8%)**.
Measured with Pi 0.85.1 in separate temporary processes with empty working directories and configuration. Built-in tools, skills, context files, session history, user messages, unrelated extensions, runtime UI, and slash commands are excluded; `before_agent_start` additions are included. Tokens are a fixed character-proxy estimate using `ceil(characters / 4)`, not provider tokenizer billing.
<!-- token-benchmark:benchmark:end -->

## Versions

- Lean wrapper: `2.10.1`
Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.10.1` and `@juicesharp/rpiv-i18n@2.10.1`.

## Development

```bash
npm ci
npm run check
```

## License

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).