<template lang="pug">
div.view-select
  h2.app-title Number

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Count" title-width="5em")
          ci-number(v-model="count" min="1" max="10")

      ci-list-cell
        ci-form-group(title="Value" title-width="5em" :text="count")
</template>

<script>
export default {
  name: 'view-number',

  data() {
    return {
      count: 5
    }
  }
}
</script>
