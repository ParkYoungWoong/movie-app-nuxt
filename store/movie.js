import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    loading: false,
    message: 'Search for the movie title!',
    theMovie: {}
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) return
    
      // 로딩 시작
      commit('updateState', {
        loading: true,
        message: ''
      })

      try {
        console.log(typeof payload.number)
        const res = await _fetchMovie(payload)
        const { Search, totalResults } = res.data
        console.log(res)
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })

        const total = parseInt(totalResults, 10) // '266' => 266
        const pageLength = Math.ceil(total / 10) // 26.6 => 27

        // 검색된 총 결과가 2페이지 이상인 경우.
        if (pageLength > 1) {
          // 2페이지부터 반복 처리
          for (let page = 2; page <= pageLength; page += 1) {
            // 반복되는 페이지 번호가, 요청(request)한 개수보다 크면 요청 종료!
            if (page > (payload.number / 10)) break
            // 추가 요청 처리
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: _uniqBy([
                ...state.movies,
                ...Search
              ], 'imdbID')
            })
          }
        }
      } catch (error) {
        console.log(error)
        commit('updateState', {
          message: error.message,
          movies: []
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        loading: true
      })

      try {
        const res = await _fetchMovie({ 
          id: payload.id
        })
        console.log(res.data)
        // theMovie = res.data
        commit('updateState', {
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState', {
          message: error.message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

async function _fetchMovie(payload) {
  // CSR: '/api/movie' => '주소/api/movie'
  // SSR: '/api/movie' => '/api/movie'
  const url = process.client 
    ? '/api/movie' 
    : `${process.env.CLIENT_URL}/api/movie`
  return await axios.post(url, payload)
}