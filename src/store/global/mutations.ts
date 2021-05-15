import { ElementInterface } from '@/interface'
import { assign, filter, findIndex } from 'lodash'
import { MutationTree } from 'vuex'
import { SGlobal } from '.'

const mutations: MutationTree<SGlobal> = {
  SET_NUM_OF_ELM: (state, num) => {
    state.numOfElm = num
  },
  SET_ELEMENT_SETTINGS: (state, data: ElementInterface) => {
    state.elementSettings = assign({ id: '', name: '' }, data)
  },
  SET_LIST_ELM: (state, data: ElementInterface[]) => {
    state.listElm = data
  },
  PUSH_ELM: (state, data: ElementInterface) => {
    state.listElm.push(data)
  },
  REMOVE_ELM: (state, data: ElementInterface | string) => {
    if (typeof data === 'string') {
      state.listElm = filter(state.listElm, value => {
        return value.id !== data
      })
    } else {
      state.listElm = filter(state.listElm, value => {
        return value.id !== data.id
      })
    }
  },
  UPDATE_ELM: (state, data: ElementInterface) => {
    const index = findIndex(state.listElm, value => value.id === data.id)
    console.log('index', index)
    console.log('index', data)
    if (index !== -1) {
      state.listElm[index] = assign({}, data)
      console.log('index ', state.listElm[index])
    }
  }
}

export default mutations
