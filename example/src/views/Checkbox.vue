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

  ci-checkbox-list(title="Country" v-model="countries" :options="country_list")

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Active" title-width="5em")
          ci-checkbox(v-model="is_active"
            :options="[ { title: 'Active', value: true } ]")

      ci-list-cell
        ci-form-group(title=" " title-width="5em" :text="is_active")

  ci-checkbox-list(title="Active" v-model="is_active"
    :options="[ { title: 'Active', value: true } ]")
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
      ],

      is_active: false
    }
  }
}
</script>
