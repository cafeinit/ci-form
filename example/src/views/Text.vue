<template lang="pug">
div.view-index
  h2.app-title Text

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Mobile" title-width="5em")
          ci-text(v-model="mobile")
          template(slot="extend")
            ci-button(color="primary" text="Get Code")

      ci-list-cell
        ci-form-group(title="Username" title-width="5em")
          ci-text(v-model="username")
      ci-list-cell
        ci-form-group(title="Password" title-width="5em")
          ci-text(type="password" v-model="password" placeholder="More than 6 (0-9, a-z, A-Z)")

  ci-list
    ci-list-body
      ci-list-cell
        ci-form-group(title="Mobile" title-width="5em" :text="mobile")

      ci-list-cell
        ci-form-group(title="Username" title-width="5em" :text="username")

  ci-list
    ci-list-body
      ci-list-cell(title="Mobile" :extend-text="mobile")
      ci-list-cell(title="Username" :extend-text="username")
</template>

<script>
export default {
  name: 'view-text',
  data() {
    return {
      mobile: '',
      username: 'burning',
      password: ''
    }
  }
}
</script>
