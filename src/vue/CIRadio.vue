<template lang="pug">
div.ci-radio(:class="inline ? 'ci-radio_inline' : ''")
  label.ci-radio__item(v-for="(option, i) in options" :key="i"
    :class="[ option.disabled ? 'ci-disabled' : '', i == index ? 'ci-active' : '' ]")
    input(type="radio"
      v-model="myValue"
      :id="`radio-${i}`"
      :name="name"
      :value="option.value"
      :disabled="option.disabled"
      @input="onInput"
      @change="onChange"
      @click="onClick")

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

export default {
  name: 'ci-radio',

  props: {
    name: {
      type: String,
      default: ''
    },

    options: {
      type: Array,
      default() {
        return []
      }
    },

    value: {
      type: [ String, Number ],
      default: ''
    },

    inline: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      myValue: this.value,
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    },

    myValue(val) {
      console.log('myValue', val, this.options.indexOf(this.myValue))
    }
  },

  computed: {
    index() {
      for (let i = 0; i < this.options.length; i ++) {
        if (this.options[i].value == this.myValue) {
          return i
        }
      }
      return -1
    }
  },

  methods: {
    onChange(evt) {
      console.log('change', evt.target.value)
      this.$emit('change', this.myValue)
      // this.$emit('input', this.myValue)
    },

    onClick(index) {
      // this.myIndex = index
      this.$emit('click', this.myValue)
    },

    onInput(evt) {
      console.log('input', evt.target.value)
    }
  }
}
</script>
