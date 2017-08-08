<template lang="pug">
div.ci-textarea
  textarea(
    :name="name"
    :cols="cols"
    :rows="rows"
    :maxlength="maxlength"
    :placeholder="placeholder"
    @change="onChange"
    @input="onInput") {{value}}

  p.ci-textarea__count(v-if="isShowCount")
    span {{count}}
    i(v-if="maxlength > 0") /
    span(v-if="maxlength > 0") {{maxlength}}
</template>

<script>
/**
 * @fileoverview CITextarea
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

export default {
  name: 'ci-textarea',

  props: {
    name: {
      type: String,
      default: ''
    },

    value: {
      type: [ String, Number, Object ],
      default: ''
    },

    cols: {
      type: [ String, Number ],
      default: ''
    },

    rows: {
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

    isShowCount: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  computed: {
    count() {
      return this.myValue.length
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  methods: {
    onChange(evt) {
      console.log('onChange', evt.target.value.length)
      this.myValue = evt.target.value
      this.$emit('change', evt.target.value)
    },

    onInput(evt) {
      console.log('onInput', evt.target.value.length)
      this.myValue = evt.target.value
      this.$emit('input', evt.target.value)
    }
  }
}
</script>
