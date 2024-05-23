# Tap4 AI Web UI

这是一个由[Tap4 AI工具导航站](https://gpt4oo.com)开源的AI导航站项目。我们的目标是让大家很容易就拥有一个属于自己的AI导航
站，收录自己喜欢的AI工具产品。这个项目非常轻量级，维护简单，适合对AI导航站感兴趣的个人开发者，也适合对NextJs有兴趣的学习
者，欢迎大家fork和star。

[English](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.md) | 简体中文

## 功能

- 国际化
- SEO友好（支持i18n）
- 动态 sitemap.xml（支持i18n）
- 快速发布
- 使用 NEXT 14 和 app 路由（react服务器组件）
- Supabase serverless 数据库

![tai4-ai](./public/images/tap4ai.zh-CN.png)

## 快速开始

### 在Vercel上部署 **（别忘了设置环境变量）**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F6677-ai%2Ftap4-ai-webui.git&env=NEXT_PUBLIC_SITE_URL,GOOGLE_TRACKING_ID,GOOGLE_ADSENSE_URL,CONTACT_US_EMAIL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&project-name=tap4-ai)

## 本地运行

### 安装

- node
- nvm
- pnpm

### 设置

#### （1）克隆此项目

```sh
git clone https://github.com/6677-ai/tap4-ai-webui.git
```

#### （2）在supabase上注册一个账户，然后创建一个项目

[https://supabase.com](https://supabase.com)

#### （3）设置环境变量

- 先运行这个，然后在 `.env.local` 填入数值。
- 这里设置你的 supabase URL 和 KEY

```sh
cp .env.example .env.local
```

#### （4）在开发模式下运行

切换到特定的node版本

```sh
nvm use
```

安装依赖包

```sh
pnpm i
```

在开发模式下运行

```sh
pnpm dev
```

## 如何更新您的内容？

### 更新“主页”或“探索”页面（`/` 或 `/explore`）

```sh
lib/data.ts -> dataList
```

### 更新详情页面（`/ai/website-name`）

- PS: `detail` 支持 Markdown

```sh
lib/data.ts -> detailList
```

### 提交网站并从数据库中读取

1. 运行网站后，打开 `/submit` 页面
2. 输入数值并提交表单
3. 打开并检查您的 Supabase 项目

## 打算在 Tap4.ai 上提交您的网站？

### 打算将您的网站添加到我们的 `/startup` 页面？

- 在这里打开一个问题：[TAP4-AI-Directory](https://github.com/6677-ai/TAP4-AI-Directory/issues)
- 给我们发邮件：[contact@tap4.ai](mailto:contact@tap4.ai)

## 其他开源项目

### 网站内容爬虫代码

访问：[6677-ai/tap4-ai-scraper](https://github.com/6677-ai/tap4-ai-scraper)

## 许可证

MIT
