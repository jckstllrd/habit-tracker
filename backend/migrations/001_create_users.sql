CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY gen_uuid(),
  username varchar(50) UNIQUE NOT NULL,
  email varchar(50) UNIQUE NOT NULL,
  password_hash varchar(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
