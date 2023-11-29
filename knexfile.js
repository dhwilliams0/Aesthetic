// Update with your config settings.
const path = require('path');

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       database: 'books',
//       user:     'benspector',
//       password: 'postgres'
//     },
//     migrations: {
//       directory: path.join(__dirname, 'src', 'db', 'migrations')
//     },
//     seeds: {
//       directory: path.join(__dirname, 'src', 'db', 'seeds')
//     }
//   }
// }
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },
  development: {
    client: 'pg',
    connection: {
      database: 'pinterest',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
