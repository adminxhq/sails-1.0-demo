module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  models: {
    datastore: 'testDiskDb',
    migrate: 'alter'
  },

  port: process.env.PORT || 1339,

  routes: {
    '/adminx*': {
      cors: {
        allowOrigins: '*'
      }
    },
  }

};
