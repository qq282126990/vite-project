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

const matchComponents = [
  {
    pattern: /^List/,
    compDir: 'list',
  },
];

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
  console.log('name', partialName)


  return {
    from: `./dist/components/${partialName}/index.vue`,
    // sideEffects: getSideEffectsLegacy(partialName, options),
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
