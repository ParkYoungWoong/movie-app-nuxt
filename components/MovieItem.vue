<template>
  <RouterLink
    :to="`/movie/${movie.imdbID}`"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie">
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  $size: 200px;
  width: $size;
  height: $size * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background-color: rgba($black, .3);
    .year {
      color: $primary;
    }
    .title {
      color: $white;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>