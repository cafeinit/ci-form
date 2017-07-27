<template lang="pug">
ci-list
  ci-list-header(:title="title")
  ci-list-body
    ci-list-cell(v-for="(option, i) in options" :key="i")
      div.ci-radio
        label.ci-radio__item(
          :class="[ option.disabled ? 'ci-disabled' : '', i == index ? 'ci-active' : '' ]"
          @click="onClick(index)")
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
 * @fileoverview CIRadioList
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CIRadioBase from './CIRadioBase'

const CIRadioList = Object.assign({}, CIRadioBase, {
  name: 'ci-radio-list'
})

export default CIRadioList
</script>
