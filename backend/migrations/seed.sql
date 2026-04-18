-- Users
INSERT INTO users (username, email) VALUES
  ('jack', 'jack@example.com'),
  ('alice', 'alice@example.com'),
  ('bob', 'bob@example.com');

-- Habits (referencing user IDs 1, 2, 3)
INSERT INTO habits (name, user_id) VALUES
  ('Morning Run', 1),
  ('Read 30 mins', 1),
  ('Meditate', 2),
  ('Drink 2L Water', 2),
  ('Evening Walk', 3);

-- Habit logs (referencing habit IDs 1–5)
INSERT INTO habit_logs (habit_id, logged_on) VALUES
  (1, '2026-04-14'),
  (1, '2026-04-15'),
  (1, '2026-04-16'),
  (2, '2026-04-15'),
  (2, '2026-04-17'),
  (3, '2026-04-13'),
  (3, '2026-04-16'),
  (4, '2026-04-14'),
  (4, '2026-04-15'),
  (4, '2026-04-16'),
  (4, '2026-04-17'),
  (5, '2026-04-16');
