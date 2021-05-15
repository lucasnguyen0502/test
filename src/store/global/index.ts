import { ElementInterface } from '@/interface'
import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export interface SGlobal {
  numOfElm: number
  elementSettings: ElementInterface
  listElm: ElementInterface[]
}

const state: SGlobal = {
  numOfElm: 1000,
  elementSettings: {
    id: '',
    name: ''
  },
  listElm: []
}

const global: Module<SGlobal, unknown> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default global
