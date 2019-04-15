import HelloWorld from './lib/HelloWorld/HelloWorld.vue'

const components = {
  HelloWorld
}

function install (Vue) {
  for (const component of Object.values(components)) {
    if (component.name) {
      Vue.component(component.name, Vue.extend(component))
    }
  }
}

export default {
  ...components,
  install
}
