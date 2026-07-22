# 微信 - 路明非

一个基于 Vue 3 构建的类微信聊天界面，以《龙族》中的路明非为视角，展示与楚子航、诺诺、凯撒、芬格尔等角色的聊天记录。

## ✨ 功能特性

- 💬 **聊天功能** - 展示预设的聊天记录
- 👥 **联系人列表** - 展示最近聊天记录
- 📇 **通讯录** - 按字母排序的联系人列表
- 📷 **朋友圈** - 好友动态展示
- 👤 **个人中心** - 个人信息管理

## 🎭 角色设定

| 角色 | 身份 | 性格特点 |
|------|------|----------|
| 楚子航 | 狮心会前任会长 | 冷酷、沉默、冷静 |
| 诺诺 | 学生会副会长 | 火爆、直率、傲娇 |
| 凯撒 | 学生会会长 | 骄傲、自信、霸气 |
| 芬格尔 | 万年留级生 | 猥琐、搞笑、深藏不露 |

## 🛠 技术栈

- **前端**: Vue 3 + Vite + Tailwind CSS + Vue Router

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 即可使用。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

## 🌐 部署到 GitHub Pages

### 方法一：手动部署

1. 构建项目：
   ```bash
   npm run build
   ```

2. 创建 `gh-pages` 分支并推送 `dist/` 目录：
   ```bash
   git checkout -b gh-pages
   git add -f dist
   git commit -m "deploy: build for gh-pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. 在 GitHub 仓库设置中开启 Pages：
   - 进入仓库 → Settings → Pages
   - Source 选择 `gh-pages` 分支 → 保存

### 方法二：GitHub Actions（推荐）

在 `.github/workflows/deploy.yml` 创建以下配置：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📁 项目结构

```
.
├── character/              # 角色头像图片
├── src/                    # 前端代码
│   ├── views/              # 页面组件
│   │   ├── Contacts.vue    # 联系人页面
│   │   ├── AddressBook.vue # 通讯录页面
│   │   ├── Moments.vue     # 朋友圈页面
│   │   ├── Profile.vue     # 个人中心页面
│   │   └── Chat.vue        # 聊天页面
│   ├── router/             # 路由配置
│   ├── App.vue             # 主应用组件
│   ├── main.js             # 入口文件
│   └── style.css           # 全局样式
├── .gitignore              # Git 忽略配置
├── package.json            # 项目依赖
├── vite.config.js          # Vite 配置
└── tailwind.config.js      # Tailwind CSS 配置
```

## 📄 许可证

MIT License