<template lang="pug">
div.ci-select
  select(v-if="groups.length"
    v-model="myValue"
    :name="name"
    @change="onChange")
      optgroup(v-for="(group, groupIndex) in groups" :key="groupIndex"
        :label="group.title")
        option(v-for="(option, index) in group.options" :key="index"
          :value="option.value"
          :disabled="option.disabled") {{option.title}}

  select(v-if="options.length"
    v-model="myValue"
    :name="name"
    @change="onChange")
    option(v-for="(option, index) in options" :key="index"
      :value="option.value"
      :disabled="option.disabled") {{option.title}}

  i.material-icons expand_more
</template>

<script>
/**
 * @fileoverview CISelect
 * @author burning (www.cafeinit.com)
 * @version 2017.07.26
 */

export default {
  name: 'ci-select',

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

    groups: {
      type: Array,
      default() {
        return []
      }
    },

    value: {
      type: [ String, Number ],
      default: ''
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  methods: {
    onChange() {
      this.$emit('change', this.myValue)
      this.$emit('input', this.myValue)
    }
  }
}
</script>
