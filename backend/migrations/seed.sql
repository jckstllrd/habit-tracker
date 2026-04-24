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
  (1, '2026-04-20'),
  (1, '2026-04-21'),
  (1, '2026-04-22'),
  (1, '2026-04-23'),
  (1, '2026-04-24'),
  (2, '2026-04-22'),
  (2, '2026-04-24'),
  (3, '2026-04-20'),
  (3, '2026-04-24'),
  (4, '2026-04-21'),
  (4, '2026-04-22'),
  (4, '2026-04-23'),
  (4, '2026-04-24'),
  (5, '2026-04-18'),
  (5, '2026-04-20');
