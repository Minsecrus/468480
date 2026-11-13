import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'

export default defineConfig({
  lang: 'zh-CN',
  base: '/468480/',
  title: '《468480》设定集',
  description: '回归年 366 日 · 全人类清醒总额 468,480 小时 · 双向动态调相世界观设定文档',
  cleanUrls: true,
  srcExclude: ['README.md'],
  markdown: {
    config: (md) => {
      md.use(katex, {
        delimiters: 'all',
        mathFence: true,
        throwOnError: false,
        logger: (errorCode) =>
          errorCode === 'newLineInDisplayMode' || errorCode === 'unicodeTextInMathMode'
            ? 'ignore'
            : 'warn',
        transformer: (content, displayMode) => {
          if (displayMode) {
            return content.startsWith('<p')
              ? content.replace(/^<p\b/, '<p v-pre')
              : `<div v-pre>${content}</div>`
          }
          return content.startsWith('<span')
            ? content.replace(/^<span\b/, '<span v-pre')
            : `<span v-pre>${content}</span>`
        },
      })
    },
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心大纲', link: '/main' },
      { text: '设定索引', link: '/infra/README' },
    ],
    sidebar: [
      {
        text: '总纲与索引',
        items: [
          { text: '《468480》大纲', link: '/main' },
          { text: '世界观基建与社会生态索引', link: '/infra/README' },
        ],
      },
      {
        text: '一、宏观地理与时间底座',
        items: [
          { text: '行星版图、城邦同盟与荒野生态', link: '/infra/world_and_wasteland' },
          { text: '新历城 3D 空间架构与计时体系', link: '/infra/city_and_timekeeping' },
        ],
      },
      {
        text: '二、硬基建、制度与法律经济',
        items: [
          { text: '能源调度、安眠金库与休眠物流', link: '/infra/energy_vaults_and_logistics' },
          { text: '成年礼、配额局与双轨金融政治', link: '/infra/ceremony_quota_and_finance' },
          { text: '医疗规程、全麻馆与时序司法', link: '/infra/medical_anesthesia_and_law' },
          { text: '《新历法典》核心条文汇编', link: '/infra/legal_code_and_statutes' },
          { text: '经济白皮书：货币、税收与合同', link: '/infra/economic_tax_and_contracts' },
        ],
      },
      {
        text: '三、阶层日常、职场分工与文化',
        items: [
          { text: '永昼人与基准人的日常生存图景', link: '/infra/life_perpetual_and_baseline' },
          { text: '错峰族空间折叠与畸零者黑市', link: '/infra/life_staggered_and_fractional' },
          { text: '长眠财阀庄园、苏醒节与文化', link: '/infra/life_long_sleepers_and_culture' },
          { text: '跨频职业谱系与劳动力分工图谱', link: '/infra/occupations_and_labor' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minsecrus/468480' },
    ],
    footer: {
      message: '基于 CC BY-NC-SA 4.0 协议共享 · 署名 · 非商业性使用 · 相同方式共享',
      copyright: 'Copyright © 2026 Minsecrus',
    },
  },
})
