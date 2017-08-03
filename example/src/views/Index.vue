<template lang="pug">
div.view-index
  h2.app-title Index

  ci-list
    ci-list-body
      //- ci-list-cell(title="Form Group" extend-icon="chevron_right"
      //-   @click="toUrl('form-group')")
      ci-list-cell(title="Checkbox" extend-icon="chevron_right"
        @click="toUrl('checkbox')")
      ci-list-cell(title="Number" extend-icon="chevron_right"
        @click="toUrl('number')")
      ci-list-cell(title="Radio" extend-icon="chevron_right"
        @click="toUrl('radio')")
      ci-list-cell(title="Select" extend-icon="chevron_right"
        @click="toUrl('select')")
      ci-list-cell(title="Text" extend-icon="chevron_right"
        @click="toUrl('text')")
      ci-list-cell(title="Textarea" extend-icon="chevron_right"
        @click="toUrl('textarea')")
</template>

<script>
export default {
  name: 'view-index',

  methods: {
    toUrl(url) {
      // console.log('toUrl', url)
      this.$router.push(url)
    }
  }
}
</script>
