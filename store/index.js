import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      backgroundDataset: 0
    }
  })
}

export default createStore
