<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          :class="{ active: isMatch(nav.path) }"
          active-class="active"
          class="nav-link"
          exact>  
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>

    <div
      class="user"
      @click="toAbout">
      <img
        src="https://heropy.blog/css/images/logo.png"
        :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988', // 겨울왕국2
          path: /^\/movie/
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    myImage() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    }
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      return path.test(this.$route.fullPath) // /movie/tt1234567
    },
    toAbout() {
      // console.log('/about')
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>