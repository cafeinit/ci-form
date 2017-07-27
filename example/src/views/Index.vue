<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Form Group" extend_icon="chevron_right"
          @click="toUrl('form-group')")
        ci-list-cell(title="Checkbox" extend_icon="chevron_right"
            @click="toUrl('checkbox')")
        ci-list-cell(title="Radio" extend_icon="chevron_right"
          @click="toUrl('radio')")
        ci-list-cell(title="Select" extend_icon="chevron_right"
          @click="toUrl('select')")
        ci-list-cell(title="List" extend_text="detail"
          @click="toUrl('list')")
        ci-list-cell(title="Media" extend_icon="chevron_right"
          @click="toUrl('media')")
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
