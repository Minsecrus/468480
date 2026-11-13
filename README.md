# 《468480》世界观大纲与硬核基建设定集

> 回归年严格等于 `366` 个太阳日（`8,784` 小时）；全人类无论在 `18` 岁真太阳时午夜选定何种实数参数 `n`（`n ≥ -1/3`），终身总清醒时间始终守恒为 `468,480` 小时（`53.33` 年）。同一条守恒公式，将人类社会撕裂为永昼、基准、错峰、畸零与长眠五大阶层。

* **在线文档站（GitHub Pages）**：https://minsecrus.github.io/468480/

---

## 目录结构

* [main.md](./main.md) — **故事主干大纲、核心数学公理与三幕结构**
* [infra/README.md](./infra/README.md) — **世界观基建与社会生态设定总索引**（下辖 16 篇专题设定）：
  * 宏观地理与时间底座：[行星版图与荒野生态](./infra/world_and_wasteland.md)、[3D 垂直城邦与计时体系](./infra/city_and_timekeeping.md)
  * 硬基建与法经制度：[能源与安眠金库](./infra/energy_vaults_and_logistics.md)、[成年礼与双轨政治](./infra/ceremony_quota_and_finance.md)、[医疗与全麻馆生态](./infra/medical_anesthesia_and_law.md)、[《新历法典》汇编](./infra/legal_code_and_statutes.md)、[经济白皮书与合同范本](./infra/economic_tax_and_contracts.md)、[跨频生产、产品与销售体系](./infra/industry_products_and_commerce.md)
  * 阶层日常与职场文化：[永昼人与基准人日常](./infra/life_perpetual_and_baseline.md)、[错峰族与无时区黑市](./infra/life_staggered_and_fractional.md)、[长眠财阀与文化图腾](./infra/life_long_sleepers_and_culture.md)、[跨频职业谱系详表](./infra/occupations_and_labor.md)、[跨频教育与养成学](./infra/education_and_indoctrination.md)、[婚恋伦理与代际错位](./infra/relationships_and_kinship.md)、[多速网络、饮食与灾时强醒](./infra/media_food_and_emergencies.md)、[节律天眼与跨频刑侦](./infra/security_and_forensics.md)
* [index.md](./index.md) — **VitePress 文档站首页与 KaTeX 公式速览**
* [.vitepress/](./.vitepress/config.mts) — **VitePress 与 KaTeX 渲染配置**

---

## 本地运行文档站（VitePress + KaTeX）

环境要求：Node.js 20+（推荐 Node.js 22 LTS）。

```bash
# 安装依赖
npm install

# 启动本地热更新预览（已配置 base: '/468480/'）
npm run docs:dev

# 构建静态站点（输出至 .vitepress/dist）
npm run docs:build

# 本地预览构建产物
npm run docs:preview
```

站点已集成 `@mdit/plugin-katex` 与本地打包的 `katex` 样式及字体，支持 `$...$`、`$$...$$`、`\(...\)`、`\[...\]` 及 ```` ```math ```` 公式块离线渲染。

---

## GitHub Pages 自动部署流程

本仓库已配置 GitHub Actions 工作流 [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)：

1. 在 GitHub 仓库页面打开 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 将代码推送至 `main` 分支（或在 Actions 页面手动触发 `Deploy VitePress site to Pages`）。
4. 工作流将自动执行 `npm ci` → `npm run docs:build` 并发布 `.vitepress/dist` 至 `https://minsecrus.github.io/468480/`。

> 若后续绑定独立自定义域名（Custom Domain），请同步将 [.vitepress/config.mts](./.vitepress/config.mts) 中的 `base: '/468480/'` 调整为 `base: '/'`。

---

## 开源与共享协议

本项目依据 **知识共享 署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）** 公开共享，详见 [LICENSE](./LICENSE) 与 [协议原文](https://creativecommons.org/licenses/by-nc-sa/4.0/)。

* **署名（BY）**：须保留原作者署名并附带本协议链接，说明是否对原作品作出修改。
* **非商业性使用（NC）**：禁止将本作品或衍生内容用于任何商业目的。
* **相同方式共享（SA）**：基于本作改编、续写或二次创作的衍生作品，须沿用同一 CC BY-NC-SA 4.0 协议发布。
