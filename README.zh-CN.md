# rpiv-todo-lean

[English](README.md)

[`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo) 的 token 精简版 Pi 包装层。它保留完整的上游任务生命周期，同时减少模型可见元数据。

## 保留的能力

- 创建、列出、获取、更新、删除和清空任务。
- 状态转换、依赖关系、metadata、回放 envelope、命令和生命周期行为。
- 保持一个任务进行中并及时完成工作的简短安全规则。

## 为什么更精简

包装层暴露同一个 `todo` 工具和原生扁平 schema，但删除冗长的 schema 字段描述，并用精简指引替换面向供应商的长文本。运行时行为仍由固定版本的上游包提供。

## 安装

```bash
pi install git:github.com/kunkun9527/rpiv-todo-lean
```

不要同时加载另一个 `rpiv-todo` 包装层，否则 `todo` 可能被重复注册。

## 使用

模型只看到一个工具：

```text
todo
```

支持的 action 为 `create`、`list`、`get`、`update`、`delete` 和 `clear`。处理多步骤工作时，先创建任务，只保留一个 `in_progress` 任务，并在完成后将其标记为 `completed`。

## 版本

上游依赖固定为 `@juicesharp/rpiv-todo@2.7.1` 和 `@juicesharp/rpiv-i18n@2.7.1`。

## 开发

```bash
npm ci
npm run check
```

## 许可证与上游

MIT。本项目包装了采用 MIT 许可证的 [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo)。