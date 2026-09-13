# @ssk_dev/rpiv-todo-lean

<!-- token-benchmark:summary:start -->
> **Token 基准：Lean 246，上游 `@juicesharp/rpiv-todo@2.10.1` 904，减少 72.8%。**
<!-- token-benchmark:summary:end -->
> **完整配置参考：** [查看 Pi Lean Setup](https://github.com/kunkun9527/my-lean-pi-setup)

[English](README.md)

基于 [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo) 的精简封装。在完整保留任务生命周期管理功能的同时，去除冗余的字段说明，显著降低上下文占用。

## 核心特性

* 完整任务管理：支持任务的创建、查询、详情查看、状态更新、删除和清空。
* 状态与依赖追踪：完整保留状态流转、任务依赖、元数据、命令回放等所有上游能力。
* 精简 Prompt 结构：保留原生扁平 Schema，剔除冗长啰嗦的字段描述，保留核心工作流约束。

## 安装

```bash
pi install npm:@ssk_dev/rpiv-todo-lean
```

请勿与其它 `rpiv-todo` 包装扩展同时加载，以防重复注册工具。

## 使用方法

模型仅会看到一个工具：

```text
todo
```

支持的操作包括 `create`、`list`、`get`、`update`、`delete` 和 `clear`。处理多步骤工作时，先创建任务列表，确保始终只有一个 `in_progress` 任务，并在处理完毕后标记为 `completed`。

## 初始化上下文占用对比

<!-- token-benchmark:benchmark:start -->
单独启用本扩展时，模型可见的常驻初始化上下文如下：

| 版本 | 工具与 Prompt 构成 | 合计 |
| --- | --- | ---: |
| Lean `@ssk_dev/rpiv-todo-lean@2.10.1` | `todo` (246) | **246** |
| 上游 `@juicesharp/rpiv-todo@2.10.1` | `todo` (904) | **904** |

节省 **658 tokens（72.8%）**。
测量环境为 Pi 0.85.1 的独立临时进程与空白配置。排除内置工具、Skills、上下文文件、消息、无关扩展、运行时 UI 与 Slash Commands；Token 按 `ceil(字符数 / 4)` 估算。
<!-- token-benchmark:benchmark:end -->

## 版本说明

- Lean 包装层：`2.10.1`
上游依赖锁定为 `@juicesharp/rpiv-todo@2.10.1` 和 `@juicesharp/rpiv-i18n@2.10.1`。

## 本地开发

```bash
npm ci
npm run check
```

## 开源协议与致谢

MIT 协议。本项目封装自采用 MIT 协议的 [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo)。