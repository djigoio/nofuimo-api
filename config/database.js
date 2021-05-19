module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'nofuimodb'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'password'),
        ssl: env('DATABASE_SSL', false)
        //ssl: {
        //  rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        //},
      },
      options: {},
    },
  },
});