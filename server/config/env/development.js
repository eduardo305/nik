module.exports = {
  port: 8080,

  mongo: {
    uri: process.env.MONGO_URI || 'development_db',
    options: {
      db: {
        safe: true
      }
    }
  }
};
