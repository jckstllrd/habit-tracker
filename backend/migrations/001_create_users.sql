CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(30),
  email varchar(30),
  password_hash char(60),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);
