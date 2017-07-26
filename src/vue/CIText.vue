<template lang="pug">
div.ci-text
  input(
    :type="type"
    :name="name"
    :value="value"
    :maxlength="maxlength"
    :placeholder="placeholder"
    @change="onChange"
    @input="onInput")
</template>

<script>
/**
 * @fileoverview CIText
 * @author burning (www.cafeinit.com)
 * @version 2017.07.26
 */

export default {
  name: 'ci-text',

  props: {
    name: {
      type: String,
      default: ''
    },

    value: {
      type: [ String, Number ],
      default: ''
    },

    maxlength: {
      type: [ String, Number ],
      default: ''
    },

    placeholder: {
      type: [ String, Number ],
      default: ''
    },
  },

  methods: {
    onChange(evt) {
      this.$emit('change', evt.target.value)
    },

    onInput(evt) {
      this.$emit('input', evt.target.value)
    }
  }
}
</script>
