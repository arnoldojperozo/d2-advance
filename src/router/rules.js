import { store } from '@/core'

export default [
  {
    match: '/admin/**',
    validator: () => !store.getters.isLogin,
    handler: '/404'
  },
  {
    match: '/login',
    validator: () => store.getters.isLogin,
    handler: '/404'
  }
]
