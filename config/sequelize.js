const base = {
  username: process.env.SEQUELIZE_USER,
  password: process.env.SEQUELIZE_PASSWORD,
  database: process.env.SEQUELIZE_DB,
  host:     process.env.SEQUELIZE_HOST,
  dialect:  'postgres',
};

module.exports = {
  test:        base,
  development: base,
  production:  base,
};
