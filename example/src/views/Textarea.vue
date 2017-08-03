<template lang="pug">
div.view-index
  h2.app-title Textarea

  ci-list
    ci-list-header(title="Content")
    ci-list-body
      ci-list-cell
        ci-textarea(v-model="content" maxlength="200")

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Content" title-width="5em")
          ci-textarea(v-model="content" :is-show-count="false")

      ci-list-cell {{content}}
</template>

<script>
export default {
  name: 'view-textarea',

  data() {
    return {
      content: ''
    }
  }
}
</script>
