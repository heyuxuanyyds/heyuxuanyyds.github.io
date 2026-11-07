# Argon Blog CMS（GitHub Pages 版）

这是一个可通过 GitHub 网页上传的入门模板。后台地址为 `/admin/`。

## 部署（尽量不使用命令行）

1. 在 GitHub 创建一个 **Public** 仓库，推荐命名为 `你的用户名.github.io`。
2. 将本压缩包内的全部文件上传到仓库根目录，保留 `_layouts`、`_posts`、`admin`、`assets` 和 `.github` 等目录结构。
3. 仓库 Settings → Pages → Build and deployment，选择 Deploy from a branch，Branch 选 `main`，目录选 `/ (root)`。
4. 等待 Pages 构建完成，访问 `https://你的用户名.github.io/` 和 `https://你的用户名.github.io/admin/`。

## 后台连接

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token。
2. Resource owner 选择你自己；Repository access 选择 Only select repositories，勾选博客仓库。
3. Repository permissions 只给 Contents: Read and write。不要给 Administration、Actions 等不需要的权限。
4. 生成后立即复制 Token，在 `/admin/` 输入用户名、仓库名和 Token，点击连接。
5. Token 只保存在当前页面的 JavaScript 内存中；刷新页面后需重新输入。不要截图、分享或提交 Token。

## 重要限制与安全说明

- GitHub Pages 是静态托管，不运行 PHP、数据库或服务端登录。此后台通过你自己输入的 Fine-grained Token 调用 GitHub API。
- 不要把 Token 写入代码、仓库、文章或截图。此方案不是多人 CMS，也没有独立的站点账号系统。
- GitHub Pages 仓库必须公开才能在 GitHub Free 下使用。已发布文章和上传图片会公开。
- 当前草稿保存在当前浏览器的 localStorage，不会同步到其他设备；清除浏览器数据会丢失草稿。
- 不要把敏感信息写入草稿或公开文章。此版本是功能原型，尚未进行完整安全审计。
- 图片建议小于 2 MB；GitHub 仓库不是无限容量图床。
- 这是 Argon 风格的轻量实现，不是官方 Argon WordPress 主题的完整移植。

## 当前版本功能

- Markdown 编辑和基础预览
- 文章发布、读取、编辑、删除
- 图片上传并插入 Markdown
- 本机草稿
- 分类和标签 Front Matter
- 移动端适配

## 已知简化

- 预览器只实现常用 Markdown 子集；Jekyll 页面使用 Kramdown 渲染。
- 当前管理列表只读取 `_posts` 顶层 Markdown 文件。
- 分类筛选、标签页面、搜索、定时发布和多设备草稿同步尚未实现。
