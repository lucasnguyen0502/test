import { ElementInterface } from '@/interface'
import { ActionTree } from 'vuex'
import { SGlobal } from '.'

const actions: ActionTree<SGlobal, unknown> = {
  setNumOfElm({ commit }, num: number) {
    commit('SET_NUM_OF_ELM', num)
  },
  setElmSettings({ commit }, settings: ElementInterface) {
    commit('SET_ELEMENT_SETTINGS', settings)
  },
  setListElm({ commit }, data: ElementInterface[]) {
    commit('SET_LIST_ELM', data)
  },
  pushElm({ commit }, data: ElementInterface) {
    commit('PUSH_ELM', data)
  },
  removeElm({ commit }, data: string | ElementInterface) {
    commit('REMOVE_ELM', data)
  },
  updateElm({ commit }, data: ElementInterface) {
    commit('UPDATE_ELM', data)
  }
}

export default actions
