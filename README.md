# 微信 - 路明非

一个基于 Vue 3 + Express 构建的类微信聊天界面，以《龙族》中的路明非为视角，可与楚子航、诺诺、凯撒、芬格尔等角色进行 AI 对话。

## ✨ 功能特性

- 💬 **聊天功能** - 与 AI 驱动的角色进行对话，支持流式输出
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
- **后端**: Express + Node.js
- **AI 服务**: DeepSeek API

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 配置 API 密钥

在项目根目录创建 `.env` 文件，并填入你的 DeepSeek API Key：

```env
DEEPSEEK_API_KEY=your_api_key_here
```

### 启动服务

**启动后端服务**:

```bash
node api/server.js
```

**启动前端服务**（另开一个终端）:

```bash
npm run dev
```

访问 `http://localhost:5173` 即可使用。

## 📁 项目结构

```
.
├── api/                    # 后端代码
│   └── server.js           # Express 服务器
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
├── .env                    # 环境变量
├── .gitignore              # Git 忽略配置
├── package.json            # 项目依赖
├── vite.config.js          # Vite 配置
└── tailwind.config.js      # Tailwind CSS 配置
```

## 📝 API 接口

| 接口 | 方法 | 描述 |
|------|------|------|
| `/api/chat` | POST | 发送聊天消息（支持流式） |
| `/api/contacts` | GET | 获取联系人列表 |
| `/api/profile` | GET | 获取个人信息 |
| `/api/moments` | GET | 获取朋友圈动态 |

## 📄 许可证

MIT License