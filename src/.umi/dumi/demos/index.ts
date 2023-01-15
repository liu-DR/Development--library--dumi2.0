// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'EbButton-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/liushuai/Documents/project/React/zujiankaifa/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
  var _react = _interopRequireDefault(require("react"));
  var _ebComponent = require("eb-component");
  var Button = function Button() {
    return /*#__PURE__*/_react["default"].createElement(_ebComponent.EbButton, null, "\u57FA\u672C\u4F7F\u7528");
  };
  var _default = Button;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { EbButton } from 'eb-component';\n\nconst Button: React.FC = () => (\n  <EbButton>\n    基本使用\n  </EbButton>\n)\nexport default Button"}},"dependencies":{"react":{"version":"18.2.0"},"eb-component":{"version":"1.0.0"}},"componentName":"EbButton","title":"我是标题","description":"<div class=\"markdown\"><p>我是简介</p></div>","identifier":"EbButton-demo"},
  },
  'EbButton-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/liushuai/Documents/project/React/zujiankaifa/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
  var _react = _interopRequireDefault(require("react"));
  var _ebComponent = require("eb-component");
  var Button = function Button() {
    return /*#__PURE__*/_react["default"].createElement(_ebComponent.EbButton, null, "\u8FDB\u9636\u4F7F\u7528");
  };
  var _default = Button;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { EbButton } from 'eb-component';\n\nconst Button: React.FC = () => (\n  <EbButton>\n    进阶使用\n  </EbButton>\n)\nexport default Button"}},"dependencies":{"react":{"version":"18.2.0"},"eb-component":{"version":"1.0.0"}},"componentName":"EbButton","identifier":"EbButton-demo-1"},
  },
};
