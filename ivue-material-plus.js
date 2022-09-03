export function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}

// 安装包路径
const pakPath = 'ivue-material-plus/dist/unplugin-vue-components'

// 没有样式的组件
const noStylesComponents = [
  'ivue-content',
  'ivue-carousel-item',
  'ivue-bottom-nav-item',
  'ivue-breadcrumbs-item',
  'ivue-checkbox-group',
  'ivue-collapse-panel',
  'ivue-count-down',
  'ivue-count-up',
  'ivue-radio-group',
  'ivue-option',
  'ivue-option-group',
]

// 使用依赖组件
const useDependentComponents = [
  // ivue-table
  {
    name: 'ivue-table',
    dependent: ['IvueTableColumn']
  },
  // ivue-tabs
  {
    name: 'ivue-tabs',
    dependent: ['IvueTabItem', 'IvueTab']
  },
  // ivue-select
  {
    name: 'ivue-select',
    dependent: ['IvueOption', 'IvueOptionGroup']
  },
   // ivue-steps
   {
    name: 'ivue-steps',
    dependent: ['IvueStep']
  }
]

// 设置样式文件
function getSideEffects(componentsName, options) {
  // 没有样式文件
  if (!options.importStyle) {
    return
  }

  return [
    `${pakPath}/styles/reset.css`,
    `ivue-material-plus/dist/styles/color.css`,
    `${pakPath}/styles/ivue-icon.css`,
    `${pakPath}/styles/${componentsName}.css`
  ];
}

// 请求组件
const resolveComponent = (componentsName, options) => {
  // 使用依赖组件

  let useDependentComponentsData = null

  useDependentComponents.forEach((item) => {
    item.dependent.forEach((dependent) => {
      // 转换为驼峰
      const _kebabCase = kebabCase(dependent)

      // 匹配输入的组件是否符合
      if (_kebabCase === componentsName) {
        useDependentComponentsData = {
          name: dependent,
          from: `${pakPath}/es`,
        }
      }
    })
  })

  // 注册依赖的组件
  if (useDependentComponentsData) {
    return useDependentComponentsData
  }

  return {
    from: `${pakPath}/es/${componentsName}`,
    sideEffects: getSideEffects(componentsName, options)
  }
};

// 请求指令
const resolveDirective = (name) => {
  const directives = {
    Loading: {
      name: 'IvueLoadingDirective',
      importName: 'ivue-loading',
      styleName: 'ivue-loading',
      importStyle: true
    },
    Ripple: {
      name: 'Ripple',
      importName: 'ivue-ripple',
      styleName: 'ivue-ripple',
      importStyle: true
    },
    ClickOutside: {
      name: 'ClickOutside',
      importName: 'ivue-click-outside',
      styleName: 'ivue-click-outside',
      importStyle: false
    },
    Touch: {
      name: 'Touch',
      importName: 'ivue-touch',
      styleName: 'ivue-touch',
      importStyle: false
    },
  }

  const directive = directives[name];

  if (!directive) {
    return
  }

  return {
    name: directive.name,
    from: `${pakPath}/es/${directive.importName}`,
    sideEffects: getSideEffects(directive.styleName, {
      importStyle: directive.importStyle
    })
  }
}

export function IvueMaterialPlusResolver() {
  return [{
      type: 'component',
      resolve: (name) => {
        // 是否是 ivue组件
        if (!name.match(/^Ivue[A-Z]/)) {
          return;
        }

        // 转换为驼峰
        const _kebabCase = kebabCase(name)

        // 没有样式组件
        if ([...noStylesComponents].includes(_kebabCase)) {
          return resolveComponent(_kebabCase, {
            importStyle: false
          })
        }

        // 有样式组件
        return resolveComponent(_kebabCase, {
          importStyle: true
        });
      },
    },
    {
      type: 'directive',
      resolve: (name) => {
        return resolveDirective(name)
      },
    },
  ]
}
