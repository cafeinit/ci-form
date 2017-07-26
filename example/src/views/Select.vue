<template lang="pug">
div.view-select
  h2.app-title Select

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Country" title-width="5em")
          ci-select(v-model="country" :options="country_list")

      ci-list-cell
        ci-form-group(title="Value" title-width="5em" :text="country")
</template>

<script>
export default {
  name: 'view-select',
  data() {
    return {
      country: 'EN',
      country_list: [
        { value: 'CN', title: 'China' },
        { value: 'US', title: 'America' },
        { value: 'EN', title: 'English' },
        { value: 'FR', title: 'France' },
        { value: 'RU', title: 'Russia' },
        { value: 'JP', title: 'Japan', disabled: true },
      ]
    }
  }
}
</script>
