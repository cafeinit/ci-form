<template lang="pug">
div.ci-radio(:class="inline ? 'ci-radio_inline' : ''")
  label.ci-radio__item(v-for="(option, i) in options" :key="i"
    :class="[ option.disabled ? 'ci-disabled' : '', i == index ? 'ci-active' : '' ]"
    @click="onClick")
    input(type="radio"
      v-model="myValue"
      :id="`radio-${i}`"
      :name="name"
      :value="option.value"
      :disabled="option.disabled"
      @change="onChange")

    i.material-icons(v-if="i == index") radio_button_checked
    i.material-icons(v-else) radio_button_unchecked
    span {{ option.title || option.value }}
</template>

<script>
/**
 * @fileoverview CIRadio
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CIRadioBase from './CIRadioBase'

const CIRadio = Object.assign({}, CIRadioBase, {
  name: 'ci-radio'
})

CIRadio.props.inline = {
  type: String,
  default: ''
}

export default CIRadio
</script>
