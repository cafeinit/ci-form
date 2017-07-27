<template lang="pug">
ci-list
  ci-list-header(:title="title")
  ci-list-body
    ci-list-cell(v-for="(option, i) in options" :key="i")
      div.ci-checkbox
        label.ci-checkbox__item(
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
 * @fileoverview CICheckboxList
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

import CICheckboxBase from './CICheckboxBase'

const CICheckboxList = Object.assign({}, CICheckboxBase, {
  name: 'ci-checkbox-list'
})

export default CICheckboxList
</script>
