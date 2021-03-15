module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'lootboxes',
        username: 'victor',
        password: 'password123'
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
