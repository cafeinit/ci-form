/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CIFormGroup from './CIFormGroup.vue'
import CICheckbox from './CICheckbox.vue'
import CICheckboxList from './CICheckboxList.vue'
import CINumber from './CINumber.vue'
import CIRadio from './CIRadio.vue'
import CIRadioList from './CIRadioList.vue'
import CISelect from './CISelect.vue'
import CIText from './CIText.vue'
import CITextarea from './CITextarea.vue'

const components = [
  CIFormGroup,
  CICheckbox,
  CICheckboxList,
  CINumber,
  CIRadio,
  CIRadioList,
  CISelect,
  CIText,
  CITextarea,
]

const CIForm = {
  name: 'CIForm',
  version: '1.0.0',
  plugin: plugin,

  CIFormGroup,
  CICheckbox,
  CICheckboxList,
  CINumber,
  CIRadio,
  CIRadioList,
  CISelect,
  CIText,
  CITextarea
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
