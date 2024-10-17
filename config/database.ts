import path from 'path';

export default () => {
  const client = 'postgres'; // Change this to 'mysql' or 'sqlite' if needed

  const connections = {
    mysql: {
      connection: {
        host: 'localhost', // Change to your MySQL host
        port: 3306, // Default MySQL port
        database: 'strapi', // Your database name
        user: 'strapi', // Your MySQL username
        password: 'vHLuZfKRWtAa0Kyd', // Your MySQL password
        ssl: false,
      },
      pool: { min: 2, max: 10 },
    },
    postgres: {
      connection: {
        host: 'aws-0-ap-south-1.pooler.supabase.com', // Your PostgreSQL host
        port: 6543, // Your PostgreSQL port
        database: 'postgres', // Your database name
        user: 'postgres.zragvlgzbensfgplfuey', // Your PostgreSQL username
        password: 'vHLuZfKRWtAa0Kyd', // Your PostgreSQL password
        ssl: false, // Set to true if SSL is required
        schema: 'public', // Adjust if needed
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', '.tmp/data.db'), // SQLite file path
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000, // Adjust timeout if needed
    },
  };
};
