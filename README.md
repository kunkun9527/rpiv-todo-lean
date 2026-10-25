# @ssk_dev/rpiv-todo-lean

<!-- token-benchmark:summary:start -->
> **Token benchmark: Lean 354, upstream `@juicesharp/rpiv-todo@2.15.0` 1,244 — 71.5% fewer.**
<!-- token-benchmark:summary:end -->
> [See my full setup for Pi](https://github.com/kunkun9527/my-lean-pi-setup)

[简体中文](https://github.com/kunkun9527/rpiv-todo-lean/blob/main/README_zh-CN.md)

A lightweight Pi wrapper for [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo). It preserves the complete task management engine while drastically reducing tool description overhead in the system prompt.

## Context Footprint Benchmark

<!-- token-benchmark:benchmark:start -->
With only this extension enabled, its recurring model-facing initialization contribution is:

| Variant | Tool and prompt contribution | Total |
| --- | --- | ---: |
| Lean `@ssk_dev/rpiv-todo-lean@2.15.0` | `todo` (354) | **354** |
| Upstream `@juicesharp/rpiv-todo@2.15.0` | `todo` (1,244) | **1,244** |

This saves **890 tokens (71.5%)**.
Measured with Pi 1.4.0 in separate temporary processes with empty working directories and configuration. Built-in tools, skills, context files, session history, user messages, unrelated extensions, runtime UI, and slash commands are excluded; `before_agent_start` additions are included. Tokens are a fixed character-proxy estimate using `ceil(characters / 4)`, not provider tokenizer billing.
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

Supported actions include `create`, `list`, `get`, `update`, `delete`, and `clear`. For multi-step tasks, create the items, set each step `in_progress` before starting it, and mark it `completed` as soon as it finishes — one at a time, never batched at the end. A missing `action` is inferred only when unambiguous: `subject` → `create`, `id` plus fields to change → `update`, a bare `id` → `get`; `delete`, `clear` and `list` are never guessed.

## Versions

- Lean wrapper: `2.13.12`
- Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.15.0` and `@juicesharp/rpiv-i18n@2.15.0`.

## Development

```bash
npm ci
npm run check
```

## License

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).