import { defineConfig } from 'dumi';
import style from './docs/siteStyle';

export default defineConfig({
  // base: '/component/',
  // publicPath: '/component/',
  apiParser: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '/src' }],
    entryFile: './src/index.ts',
  },

  themeConfig: {
    name: '业务组件库',
    logo: 'logo1.jpg',
    nav: [
      { title: '指南', link: '/guide' },
      {
        title: '组件',
        link: '/components/eb-overview',
      },
    ],
    hd: true,
    rtl: true,
  },

  history: {
    type: 'hash',
  },

  hash: false,

  // title: '业务组件库',
  // logo: 'logo1.jpg',

  favicons: ['logo2.jpeg'],

  outputPath: 'docs-dist',
  // description: '企业业务组件库',

  locales: [{ id: 'zh-CN', name: '中文' }],
  // more config: https://d.umijs.org/config
  styles: [style],
});
