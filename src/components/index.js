// import Vue from "vue";
// import stts from './static/vendor.dll'
// import stta from './static/vue.dll'
// const ty = typeof stts
// const ta = typeof stta
import egs from './egs'
const _components = {
  egs
}

// class registAllComponents extends Vue {
//   constructor() {
//     super()
//     this._component()
//   }
//   _component () {
//     for(let name in _components) {
//       return this.component(name, _components[name])
//     }
//   }
// }
// export default new registAllComponents()

export function registAllComponents(context) {
    for(let name in _components) {
      context.component(name, _components[name])
    }
}
