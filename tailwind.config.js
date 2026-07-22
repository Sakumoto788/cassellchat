/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wechat-green': '#07c160',
        'wechat-gray': '#ededed',
        'wechat-bg': '#e5ddd5',
        'wechat-chat-left': '#ffffff',
        'wechat-chat-right': '#95ec69',
      }
    },
  },
  plugins: [],
}