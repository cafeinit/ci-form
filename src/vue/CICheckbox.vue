<template lang="pug">
div.ci-checkbox(:class="inline ? 'ci-checkbox_inline' : ''")
  label.ci-checkbox__item(v-for="(option, i) in options" :key="i"
    :class="[ option.disabled ? 'ci-disabled' : '', ids.indexOf(i) >= 0 ? 'ci-active' : '' ]"
    @click="onClick")
    input(type="checkbox"
      v-model="myValue"
      :id="`checkbox-${i}`"
      :name="name"
      :value="option.value"
      :disabled="option.disabled"
      @change="onChange")

    i.material-icons(v-if="ids.indexOf(i) >= 0") check_box
    i.material-icons(v-else) check_box_outline_blank
    span {{ option.title || option.value }}
</template>

<script>
/**
 * @fileoverview CICheckbox
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CICheckboxBase from './CICheckboxBase'

const CICheckbox = Object.assign({}, CICheckboxBase, {
  name: 'ci-checkbox'
})

CICheckbox.props.inline = {
  type: String,
  default: ''
}

export default CICheckbox
</script>
