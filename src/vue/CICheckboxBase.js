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

      // if (typeof this.myValue === 'boolean') {
      //   this.myValue = [ this.myValue ]
      // }

      if (this.myValue instanceof Array) {
        this.myValue.forEach((item) => {
          this.options.forEach((option, i) => {
            if (option.value == item) {
              ids.push(i)
            }
          })
        })
      }
      else {
        if (this.myValue) {
          ids.push(0)
        }
      }

      return ids
    }
  },

  methods: {
    onChange(evt) {
      // console.log('onChange', this.myValue, evt.target.checked)
      if (this.myValue.length > 1) {
        this.$emit('input', this.myValue)
      }
      else {
        this.$emit('input', evt.target.checked)
      }
    },

    onClick(index) {
      // console.log('onClick', index)
      this.$emit('click', index)
    }
  }
}
