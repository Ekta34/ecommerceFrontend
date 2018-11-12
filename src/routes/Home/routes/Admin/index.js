import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'admin',
  getComponent (nextState, cb) {
   
    require.ensure([], (require) => {
      const Admin = require('./containers/AdminContainer').default
      const module = require('./containers/AdminModule')
      const reducer = module.default
      const key =  module.NAME
     
      injectReducer(store, { key, reducer })

      /*  Return getComponent   */
      cb(null, Admin)

    /* Webpack named bundle   */
    }, 'admin')
  }
})
