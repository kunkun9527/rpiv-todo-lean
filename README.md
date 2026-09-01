# @ssk_dev/rpiv-todo-lean

> **Lean Pi todo plugin with identical features: 256 initialization tokens, 72% lighter than original.**
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

With only this extension enabled, its recurring initialization overhead in the model context is:

| Model-facing tool | Lean | Upstream `@juicesharp/rpiv-todo@2.7.1` |
| --- | ---: | ---: |
| `todo` | **256** | **904** |

This saves **648 tokens (71.7%)** compared to the pinned upstream package.

The benchmark was measured on Pi 0.84.4 with `pi-context-view@0.4.3` in a fresh isolated session, excluding built-in tools, skills, context files, and unrelated extensions. Context View estimates tokens as `ceil(characters / 4)`. Pure runtime UI elements and slash commands are excluded as they are not sent to the model.

## Versions

Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.7.1` and `@juicesharp/rpiv-i18n@2.7.1`.

## Development

```bash
npm ci
npm run check
```

## License

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).