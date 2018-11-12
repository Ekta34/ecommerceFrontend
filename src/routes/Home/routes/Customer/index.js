import { injectReducer } from 'store/reducers'
import CartRoute from './routes/Cart'

export default (store) => ({
  path : 'customer',
  getComponent (nextState, cb) {
   
    require.ensure([], (require) => {
      const Customer = require('./containers/CustomerContainer').default
      const module = require('./containers/CustomerModule')
      const reducer = module.default
      const key =  module.NAME
     
      injectReducer(store, { key, reducer })

      /*  Return getComponent   */
      cb(null, Customer)

    /* Webpack named bundle   */
    }, 'customer')
  },
  childRoutes : [
    CartRoute(store),
  ]
})
