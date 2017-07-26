/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.26
 */

import CIFormGroup from './CIFormGroup.vue'
import CIText from './CIText.vue'

const components = [
  CIFormGroup,
  CIText,
]

const CIForm = {
  name: 'CIForm',
  version: '1.0.0',
  plugin: plugin,

  CIFormGroup,
  CIText,
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CIForm = CIForm

export default CIForm

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
