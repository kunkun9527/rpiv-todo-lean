# rpiv-todo-lean

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

## Versions

Upstream dependencies are pinned to `@juicesharp/rpiv-todo@2.7.1` and `@juicesharp/rpiv-i18n@2.7.1`.

## Development

```bash
npm ci
npm run check
```

## License and upstream

MIT. This project wraps the MIT-licensed [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo).