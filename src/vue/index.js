/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CIFormGroup from './CIFormGroup.vue'
import CIRadio from './CIRadio.vue'
import CISelect from './CISelect.vue'
import CIText from './CIText.vue'

const components = [
  CIFormGroup,
  CIRadio,
  CISelect,
  CIText,
]

const CIForm = {
  name: 'CIForm',
  version: '1.0.0',
  plugin: plugin,

  CIFormGroup,
  CIRadio,
  CISelect,
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
