ALTER TABLE players
ADD
  genre VARCHAR(1) DEFAULT 'F';
UPDATE players
SET
  genre = 'H'
WHERE
  nickname = 'titi';