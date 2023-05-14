import { defineConfig } from 'dumi';
import style from './docs/siteStyle';

export default defineConfig({
  apiParser: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '/src' }],
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: '业务组件库',
    logo: '/logo1.jpg',
    nav: [
      { title: '指南', link: '/guide' },
      {
        title: '组件',
        link: '/components/eb-overview',
      },
      { title: '学习文档', link: '/studyword' },
    ],
    // hd: true,
    // rtl: true,
  },
  // history: {
  //   type: 'hash',
  // },
  hash: true,
  favicons: ['/logo2.jpeg'],
  outputPath: 'docs-dist',
  locales: [{ id: 'zh-CN', name: '中文' }],
  // more config: https://d.umijs.org/config
  styles: [style],
});
