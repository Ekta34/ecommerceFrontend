import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'cart',
  getComponent (nextState, cb) {
   
    require.ensure([], (require) => {
      const Cart = require('./containers/CartContainer').default
      const module = require('./containers/CartModule')
      const reducer = module.default
      const key =  module.NAME
     
      injectReducer(store, { key, reducer })

      /*  Return getComponent   */
      cb(null, Cart)

    /* Webpack named bundle   */
    }, 'cart')
  }
})
