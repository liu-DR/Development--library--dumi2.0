// 组件源代码
import React from 'react';
import { EbButtonPropsType } from './interface';

const EbButton: React.FC<EbButtonPropsType> = (props) => {
  const { type, children } = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default EbButton;
