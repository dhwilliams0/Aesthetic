module.exports = {
  development: {
    client: 'pg', // or the appropriate client for your database
    connection: {
      host: 'localhost',
      user: '',
      password: '',
      database: 'images',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
