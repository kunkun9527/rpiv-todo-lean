# rpiv-todo-lean

> **Only ~256 initialization tokens (reduced from ~904 tokens).**
> [See my full setup for Pi](https://github.com/kunkun9527/my-lean-pi-setup)

[简体中文](README.zh-CN.md)

A token-lean Pi wrapper around [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo). It preserves the complete upstream task lifecycle while reducing model-facing metadata.

## What it keeps

- Task creation, listing, retrieval, updates, deletion, and clearing.
- Status transitions, dependencies, metadata, replay envelopes, commands, and lifecycle behavior.
- The short safety rules needed to keep one task in progress and complete work promptly.

## Why it is lean

The wrapper exposes the same `todo` tool and native flat schema, but removes verbose schema-field descriptions and replaces the provider-facing prose with concise guidance. Runtime behavior remains in the pinned upstream package.

## Install

```bash
pi install git:github.com/kunkun9527/rpiv-todo-lean
```

Do not load it together with another `rpiv-todo` wrapper, or `todo` may be registered twice.

## Use

The model sees one tool:

```text
todo
```

Supported actions are `create`, `list`, `get`, `update`, `delete`, and `clear`. For multi-step work, create tasks, keep exactly one task `in_progress`, and mark it `completed` when finished.

## Measured initialization footprint

With only this extension enabled, the lean `todo` tool contributes an estimated **256 tokens** of recurring model-facing initialization context. The pinned upstream `@juicesharp/rpiv-todo@2.7.1` tool contributes **904 tokens** under the same conditions. That is **648 fewer tokens (71.7%)**.

The measurement used Pi 0.84.4 and `pi-context-view@0.4.3` in a fresh isolated session, excluding Pi built-in tools, skills, context files, messages, and unrelated extensions. Context View estimates text as `ceil(characters / 4)`, so these are reproducible context-footprint estimates rather than exact GPT tokenizer counts. Runtime-only UI and slash commands are not included because they are not sent to the model.

## Versions

Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.7.1` and `@juicesharp/rpiv-i18n@2.7.1`.

## Development

```bash
npm ci
npm run check
```

## License and upstream

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).