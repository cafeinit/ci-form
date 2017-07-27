/**
 * @fileoverview CICheckbox
 * @author burning (www.cafeinit.com)
 * @version 2017.07.27
 */

export default {
  name: 'ci-checkbox',

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
      type: [ Array, Boolean ],
      default() {
        return []
      }
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
    ids() {
      let ids = []

      this.myValue.forEach((item) => {
        this.options.forEach((option, i) => {
          if (option.value == item) {
            ids.push(i)
          }
        })
      })

      return ids
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
