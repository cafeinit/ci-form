<template lang="pug">
div.ci-number
  ci-button(color="primary" @click="reduce")
    i.material-icons remove

  input(type="number" v-model="myValue"
    @change="onChange"
    @input="onInput")

  ci-button(color="primary" @click="increase")
    i.material-icons add
</template>

<script>
/**
 * @fileoverview CINumber
 * @author burning (www.cafeinit.com)
 * @version 2017.07.28
 */

export default {
  name: 'ci-number',

  props: {
    name: {
      type: String,
      default: ''
    },

    value: {
      type: [ Number, String ],
      default: 0
    },

    step: {
      type: [ Number, String ],
      default: 1
    },

    min: {
      type: [ Number, String ],
      // default: Number.MIN_VALUE
      default: 0
    },

    max: {
      type: [ Number, String ],
      // default: Number.MAX_VALUE
      default: 100
    },

    placeholder: {
      type: [ Number, String ],
      default: ''
    },
  },

  data() {
    return {
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = Number(val) || 0
    }
  },

  methods: {
    checkValue(value) {
      value = (value < this.min) ? this.min : value
      value = (value > this.max) ? this.max : value
      return value
    },

    reduce() {
      this.myValue = this.checkValue(this.myValue - this.step)
      this.$emit('input', this.myValue)
    },

    increase() {
      this.myValue = this.checkValue(this.myValue + this.step)
      this.$emit('input', this.myValue)
    },

    onChange(evt) {
      this.$emit('change', this.myValue)
    },

    onInput(evt) {
      this.$emit('input', this.myValue)
    }
  }
}
</script>
