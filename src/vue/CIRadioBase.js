/**
 * @fileoverview CIRadioBase
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

export default {
  name: 'ci-radio',

  props: {
    title: {
      type: String,
      default: ''
    },

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

    // inline: {
    //   type: String,
    //   default: ''
    // }
  },

  data() {
    return {
      myValue: this.value,
    }
  },

  watch: {
    value(val) {
      this.myValue = val
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
      // console.log('onChange', evt.target.value)
      this.$emit('input', this.myValue)
    },

    onClick(index) {
      // console.log('onClick', index)
      this.$emit('click', index)
    }
  }
}
