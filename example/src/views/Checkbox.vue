<template lang="pug">
div.view-select
  h2.app-title Checkbox

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Country" title-width="5em")
          ci-checkbox(v-model="countries"
            :options="country_list" inline="inline")

      ci-list-cell
        ci-form-group(title="Country" title-width="5em")
          ci-checkbox(v-model="countries" :options="country_list")

      ci-list-cell
        ci-form-group(title="Value" title-width="5em" :text="countries")
  //- ci-radio-list(title="Country" v-model="country" :options="country_list")
</template>

<script>
export default {
  name: 'view-checkbox',
  data() {
    return {
      countries: [ 'CN', 'EN' ],
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
