# @ssk_dev/rpiv-todo-lean

> **Pi 任务管理插件精简版，保留全部功能，仅需 256 初始化 Token，相比原版减少 72%。**
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

请勿与其它 `rpiv-todo` 包装插件同时加载，以防重复注册工具。

## 使用方法

模型仅会看到一个工具：

```text
todo
```

支持的操作包括 `create`、`list`、`get`、`update`、`delete` 和 `clear`。处理多步骤工作时，先创建任务列表，确保始终只有一个 `in_progress` 任务，并在处理完毕后标记为 `completed`。

## 初始化上下文占用对比

单独启用本插件时，注入到模型初始上下文中的 Token 占用实测如下：

| 模型可见工具 | Lean 精简版 | 原版 `@juicesharp/rpiv-todo@2.7.1` |
| --- | ---: | ---: |
| `todo` | **256** | **904** |

相比固定版本的上游扩展，初始开销减少了 **648 tokens（71.7%）**。

测试环境为 Pi 0.84.4 与 `pi-context-view@0.4.3` 独立会话，排除了 Pi 内置工具、Skills、上下文文件与无关扩展。Context View 按 `ceil(字符数 / 4)` 估算。未计入不会发送给模型的纯运行时 UI 与 Slash 命令。

## 版本说明

上游依赖锁定为 `@juicesharp/rpiv-todo@2.7.1` 和 `@juicesharp/rpiv-i18n@2.7.1`。

## 本地开发

```bash
npm ci
npm run check
```

## 开源协议与致谢

MIT 协议。本项目封装自采用 MIT 协议的 [`@juicesharp/rpiv-todo`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-todo)。