// 定义组件源码所使用的参数类型

import { ReactNode } from 'react';

interface EbButtonPropsType {
  children?: ReactNode;
  /**
   * 可以这样写属性描述
   * @description       设置按钮类型
   * @default           default
   */
  type?: 'primary' | 'danger' | 'warning' | 'info' | 'text'; // 支持识别 TypeScript 可选类型为非必选属性
  /**
   * @description       按钮文字
   * @default '大大的'
   */
  title: string;
}

export type { EbButtonPropsType };
