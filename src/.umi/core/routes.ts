// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/liushuai/Documents/project/React/zujiankaifa/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/liushuai/Documents/project/React/zujiankaifa/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/liushuai/Documents/project/React/zujiankaifa/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/eb-button",
        "component": require('/Users/liushuai/Documents/project/React/zujiankaifa/src/EbButton/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/EbButton/index.md",
          "updatedTime": 1673545713501,
          "componentName": "EbButton",
          "title": "Button按钮",
          "group": {
            "title": "EbButton",
            "__fallback": true,
            "path": "/eb-button"
          },
          "toc": "content",
          "slugs": [
            {
              "depth": 1,
              "value": "Button按钮",
              "heading": "button按钮"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "进阶使用",
              "heading": "进阶使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button按钮 - 业务组件库"
      },
      {
        "path": "/eb-table",
        "component": require('/Users/liushuai/Documents/project/React/zujiankaifa/src/EbTable/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/EbTable/index.md",
          "updatedTime": 1673572318905,
          "componentName": "EbTable",
          "slugs": [],
          "group": {
            "path": "/eb-table",
            "title": "EbTable"
          },
          "title": "EbTable"
        },
        "title": "EbTable - 业务组件库"
      },
      {
        "path": "/",
        "component": require('/Users/liushuai/Documents/project/React/zujiankaifa/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1673532847163,
          "slugs": [
            {
              "depth": 1,
              "value": "介绍",
              "heading": "介绍"
            }
          ],
          "title": "介绍"
        },
        "title": "介绍 - 业务组件库"
      }
    ],
    "title": "业务组件库",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
