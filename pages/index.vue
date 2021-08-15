<template>
  <div>
    <Headline />
    <Search />
    <MovieList />
  </div>
</template>

<script>
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'
import Headline from '@/components/Headline'

export default {
  components: {
    Search,
    MovieList,
    Headline
  }
}
</script>
