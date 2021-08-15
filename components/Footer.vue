<template>
  <footer>
    <Logo />
    <a
      href="https://heropy.blog"
      target="_blank">
      (c){{ thisYear }} {{ name }} 
    </a>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },
  computed: {
    thisYear() {
      return new Date().getFullYear()
    },
    name() {
      return this.$store.state.about.name
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
