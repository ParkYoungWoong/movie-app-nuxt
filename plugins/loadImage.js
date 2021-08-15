export default {
  install(Vue) {
    Vue.prototype.$loadImage = (src) => {
      return new Promise((resolve) => {
        if (process.server) {
          resolve()
          return
        }
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}