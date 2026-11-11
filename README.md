# Argon Blog CMS v2（GitHub Pages）

## 快速部署（不需要命令行）

1. 解压 ZIP，把里面 `argon-blog-cms` 文件夹中的**全部内容**上传到 GitHub 仓库根目录，保留 `.github/workflows/deploy.yml` 等隐藏目录。
2. 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
3. 确认仓库默认分支为 `main`。如果不是 `main`，编辑 `.github/workflows/deploy.yml` 中 `branches: [main]` 为你的分支名。
4. 打开 Actions，首次可以手动运行 `Build and Deploy Blog`。之后每次提交内容都会自动部署。
5. 访问 `https://你的用户名.github.io/admin/`。

## 后台登录与 Token

- 首次后台密码：`12345678`。登录后建议立即在“设置 → 安全设置”修改为至少 8 位的独立密码。
- 管理密码只保存在当前浏览器；不同设备需要分别初始化/设置。
- Fine-grained Token 使用 AES-GCM 加密后保存在当前浏览器本地；加密密钥由管理密码经 PBKDF2 派生。后台不提供明文查看或复制入口。Token 失效/权限错误时会弹出重新授权框。
- 创建 Token 时选择 Only select repositories，仅选博客仓库；Repository permissions → Contents 设为 Read and write。
- Token 仅在浏览器端使用。浏览器开发者工具、恶意扩展或被入侵的设备仍可能接触运行时数据；这不是服务端保险箱。请使用专用、最小权限 Token。

## 功能

- 密码登录、锁定后台、修改密码
- Token 本机加密保存、重新授权
- 文章新建/编辑/删除、搜索、状态筛选、批量删除
- Markdown 预览、图片上传、封面、分类、标签、摘要
- 草稿（存入 Jekyll 不发布的 _drafts/）、定时发布（Actions 每 15 分钟重建一次）
- 独立页面管理（存入普通 pages/ 目录）、媒体库、站点标题/描述设置
- JSON 备份导出和导入
- 移动端适配、首页文章搜索、基础 SEO 元信息
- GitHub Actions push 自动部署、手动运行、定时重建

## 必须知道的限制

- GitHub Pages 是静态托管，没有真正的服务端账号/数据库。密码门禁是后台界面保护，不等于服务器端访问控制。
- GitHub Free 的 Pages 通常要求公开仓库；发布的文章、图片和页面会公开。不要上传隐私或机密。
- 本机草稿和 Token 不会自动同步到其他设备。
- 定时发布依赖 GitHub Actions schedule，通常每 15 分钟检查，但 GitHub 可能延迟调度；长期无活动时 schedule 可能暂停。
- 评论使用 Giscus；需在 Giscus 官网启用仓库 Discussions，并填写仓库名、Repository ID、Category 名称和 Category ID，四项齐全后才会显示。
- Markdown 预览是轻量预览；正式文章由 GitHub Pages 的 Kramdown/Rouge 渲染。
- 本项目是 Argon 风格模板，不是 WordPress Argon 主题的完整移植，也不是完整 WordPress 替代品。
