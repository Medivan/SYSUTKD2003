import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: "sysutkd2003",
    bundler: viteBundler(),
    theme: defaultTheme(),
    lang: 'zh-CN',
    title: '中山大学跆拳道协会/示范团',
    description: '中山大学跆拳道协会/示范团',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: '协会历史',
                collapsible: true,
                prefix: '/history/',
                children: [
                    {
                        text: '技术顾问',
                        link: 'instructor.md',
                        children: [],
                    },
                    {
                        text: '历届会长',
                        link: 'leader.md',
                        children: [],
                    },
                    {
                        text: '黑带成员',
                        link: 'blackbelt.md',
                        children: [],
                    },
                    {
                        text: '协会荣誉',
                        link: 'honors.md',
                        children: [],
                    },
                ],
            },
            {
                text: '三校区五校园',
                collapsible: true,
                // 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`
                prefix: 'sysu35/',
                children: [
                    {
                        text: '珠海校区',
                        link: 'zhuhai.md',
                        children: [],
                    },
                    {
                        text: '广州校区-东校园',
                        link: 'east.md',
                        children: [],
                    },
                    {
                        text: '广州校区-北校园',
                        link: 'north.md',
                        children: [],
                    },
                    {
                        text: '广州校区-南校园',
                        link: 'south.md',
                        children: [],
                    },
                    {
                        text: '深圳校区',
                        link: 'shenzhen.md',
                        children: [],
                    },
                ],
            },
        ],
        sidebarDepth: 3,

    })
})