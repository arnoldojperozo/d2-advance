<template>
  <div class="banner-container">
    <pure-element-ui-error-ops
      title="404"
      message="The page not found :/"
      :handleBack="handleBack"
      handleBackText="Back to Home"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.push('/')
    }
  }
}
</script>
