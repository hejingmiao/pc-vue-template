const NAV_LIST = 'NAV_LIST'
const ITEM_LIST = 'ITEM_LIST'

const stores = {
  modules: {
    // home
  },
  state: {
    navList: [
      { text: '首页', name: 'home', link: '#home', isCur: true },
      { text: '运动员', name: 'athlete', link: '/athleteList', isCur: false },
      { text: '项目', name: 'item', link: '#items', isCur: false },
      { text: '国家地区', name: 'country', link: '#country', isCur: false },
      { text: '场馆', name: 'stadiums', link: '#stadiums', isCur: false },
      { text: '历届', name: 'elements', link: '#elements', isCur: false }
    ],
    itemList: [] // 项目列表
  },
  mutations: {
    [NAV_LIST] (state, payload) {
      state.navList.forEach(item => {
        item.isCur = payload.indexOf(item.name) > -1
      })
    },
    [ITEM_LIST] (state, payload) {
      state.itemList = payload
    }
  },
  actions: {
    setNavList ({ commit }, payload = '') {
      commit(NAV_LIST, payload)
    },
    setItemList ({ commit }, payload = []) {
      commit(ITEM_LIST, payload)
    },
    async sleep (payload) {
      return new Promise(resolve => {
        setTimeout(resolve, payload)
      })
    }
  }
}

export default stores
