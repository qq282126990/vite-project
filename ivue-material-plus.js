// import type { ComponentResolver } from './types';
export function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
}


// 需要自动引入的插件或者css
function getSideEffects() {
  const sideEffects = [
    'view-design/dist/styles/iview.css',
    'popper.js/dist/umd/popper.js',
  ];

  return sideEffects;
}

function getCompDir(compName) {

  // const total = matchComponents.length;
  // for (let i = 0; i < total; i++) {
  //   const matcher = matchComponents[i];
  //   if (compName.match(matcher.pattern)) {
  //     compPath = `${matcher.compDir}/${kebabCase(compName)}.vue`;
  //     break;
  //   }
  // }
  // if (!compPath)
  //   compPath = kebabCase(compName);

  return compPath;
}


const resolveComponent = (name) => {
  if (!name.match(/^Ivue[A-Z]/)) {
    return;
  }

  const partialName = kebabCase(name)

  // ivue-select
  if (partialName.match(/^ivue-op[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-select/index`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/ivue-select.css`,
    }
  }

  // ivue-table
  if (partialName.match(/^ivue-tabl[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-table/index`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/ivue-table.css`,
    }
  }

  // ivue-collapse
  if (partialName.match(/^ivue-coll[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-collapse/index`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/ivue-collapse.css`,
    }
  }

  // ivue-tabs
  if (partialName.match(/^ivue-tab-[a-z]/) || partialName.match(/^ivue-ta[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-tabs/index`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/ivue-tabs.css`,
    }
  }

  // ivue-steps
  if (partialName.match(/^ivue-ste[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-steps/index`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/ivue-steps.css`,
    }
  }

  // group
  if (partialName.match('group') || partialName.match('item')) {

    const match = partialName.match('group') || partialName.match('item')

    let _partialName = partialName
    if (match) {
      _partialName = partialName.replace(`-${match[0]}`, '')
    }

    return {
      from: `ivue-material-plus/unplugin-vue-components/es/${_partialName}`,
      sideEffects: `ivue-material-plus/unplugin-vue-components/styles/${_partialName}.css`,
    }
  }

  // ivue-content
  if (partialName.match(/^ivue-cont[a-z]/)) {
    return {
      from: `ivue-material-plus/unplugin-vue-components/es/ivue-steps/index`,
      sideEffects: `ivue-material-plus/styles/elevation.css`,
    }
  }

  // fix:全局引入icon
  return {
    from: `ivue-material-plus/unplugin-vue-components/es/${partialName}`,
    sideEffects: [
      `ivue-material-plus/unplugin-vue-components/styles/ivue-icon.css`,
      `ivue-material-plus/unplugin-vue-components/styles/${partialName}.css`,
    ]
  }
};

export function IvueMaterialPlusResolver(options) {
  return {
    type: 'component',
    // resolve: (name: string) => {
    //   if (name.match(/^I[A-Z]/)) {
    //     const compName = name.slice(1);

    //     return {
    //       from: `ivue-material-plus/src/components/${getCompDir(compName)}`,
    //       // 需要自动引入的插件或者css
    //       sideEffects: getSideEffects(),
    //     };
    //   }
    // },
    resolve: (name) => {
      return resolveComponent(name);
    },
  };
}
