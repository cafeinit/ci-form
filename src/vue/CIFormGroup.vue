<template lang="pug">
div.ci-form-group
  label.ci-form-group__title(v-if="title"
    :style="{ width: titleWidth }") {{title}}

  div.ci-form-group__content
    span.ci-form-group__text(v-if="text") {{text}}
    slot

  div.ci-form-group__extend(v-if="$slots.extend")
    slot(name="extend")
</template>

<script>
/**
 * @fileoverview CIFormGroup
 * @author burning (www.cafeinit.com)
 * @version 2017.07.26
 */

export default {
  name: 'ci-form-group',

  props: {
    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  }
}
</script>
