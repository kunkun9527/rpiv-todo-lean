# rpiv-todo-lean

[中文](#中文) · [English](#english)

## 中文

`rpiv-todo-lean` 是 [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo) 的轻量 Pi 包装层。它保留完整任务状态、回放 envelope、命令和生命周期行为，只移除模型不需要的 schema 字段描述，并保留关键任务管理规则。

### 模型可见工具

- `todo`

### 安装

```bash
pi install git:github.com/kunkun9527/rpiv-todo-lean
```

不要和原版 `rpiv-todo` wrapper 同时加载，以免重复注册 `todo`。

### 开发

```bash
npm ci
npm run check
```

上游依赖固定为 `@juicesharp/rpiv-todo@2.7.1` 和 `@juicesharp/rpiv-i18n@2.7.1`。

## English

`rpiv-todo-lean` is a small Pi wrapper around [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo). It preserves the complete task state, replay envelope, commands, and lifecycle behavior while removing schema field descriptions that are not needed by the model and keeping the important task-management guidance.

It exposes one model-facing tool, `todo`.

Install:

```bash
pi install git:github.com/kunkun9527/rpiv-todo-lean
```

Do not load it together with another `rpiv-todo` wrapper, or `todo` may be registered twice.

Validate locally with `npm ci && npm run check`.

## License

MIT. This project is a wrapper around the MIT-licensed `@juicesharp/rpiv-todo` project.
