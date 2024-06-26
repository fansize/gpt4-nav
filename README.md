# Tap4 AI Web UI

Tap4 AI Web UI is the open source AI tools directory build by [Tap4 AI Tools Directory](https://gpt4oo.com). The project
aims to help everyone build their own AI Tools Directory easily. You can fork the project and deploy to vercel by one
click and update your own ai tools by the dataList in the project.

English | [简体中文](https://github.com/6677-ai/tap4-ai-webui/blob/main/README.zh-CN.md)

## Features

- Internationalization
- SEO friendly (with i18n)
- sitemap.xml (dynamic with i18n)
- Ship fast
- NEXT 14 with app route (react server component)
- Supabase serverless database

![tai4-ai](./public/images/tap4-ai.png)

## Quick Start

### Deploy on Vercel **(Don't forget to setup env)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F6677-ai%2Ftap4-ai-webui.git&env=NEXT_PUBLIC_SITE_URL,GOOGLE_TRACKING_ID,GOOGLE_ADSENSE_URL,CONTACT_US_EMAIL,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&project-name=tap4-ai)

## Runs on local

### install

- node
- nvm
- pnpm

### setup

#### (1) clone this project

```sh
git clone https://github.com/6677-ai/tap4-ai-webui.git
```

#### (2) signup a account on supabase then create a project

[https://supabase.com](https://supabase.com)

#### (3) setup env

- run this first and then fill in the values on `.env.local`
- setup your supabase URL and KEY here

```sh
cp .env.example .env.local
```

#### (4) runs on dev mode

switch to the particular node version

```sh
nvm use
```

install packages

```sh
pnpm i
```

run on dev mode

```sh
pnpm dev
```

## How to upate your content?

### update "home" or "explore" page (`/` or `/explore`)

```sh
lib/data.ts -> dataList
```

### update detail page (`/ai/website-name`)

- PS: `detail` supports markdown

```sh
lib/data.ts -> detailList
```

### submit website and read it from database

1. runs the website and then go to `/submit` page
2. input the values and then submit the form
3. open and check your supabase project

## Wanna submit your website on Tap4.ai?

### Wanna add you website to our `/startup` page?

- open an issue here: [TAP4-AI-Directory](https://github.com/6677-ai/TAP4-AI-Directory/issues)
- email us: contact@tap4.ai

## Links to our products

### TAP4-AI-Directory

The Collection for the AI tools all over the world. | Collect free ChatGPT mirrors, alternatives,prompt, other AI tools,
etc. For more, please visit: [Tap4 AI](https://gpt4oo.com)

### Anime Girl Studio -- AI Anime Girl Generator and Chat

Anime Girl Studio is the ai anime girl generator and chat product. You can generate what you like and chat with the AI
anime girl, please visit [Anime Girl Studio](https://animegirl.studio)

## Other open source

### Website content crawler code

visit: [6677-ai/tap4-ai-scraper](https://github.com/6677-ai/tap4-ai-scraper)

## LICENSE

MIT
