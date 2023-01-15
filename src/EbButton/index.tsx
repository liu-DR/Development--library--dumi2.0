
export interface EbButtonPropsType {
  /**
   * 可以这样写属性描述
   * @description       设置按钮类型
   * @default           default
   */
  type: string; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * @description       按钮文字
   * @default
   */
  title: string;
}

import React from 'react';

const EbButton: React.FC<EbButtonPropsType> = (props: { type: string; }) => {
  const {
    type
  } = props

  return (
    <div>
      <span>Button按钮</span>
    </div>
  )
}

// const EbButtonPropsType = () => null

// export {
//   EbButtonPropsType
// }

export default EbButton
