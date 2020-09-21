INSERT INTO users
    (id, email, first_name, last_name, password, account_expire_date)
VALUES (1, 'user1@gmail.com', 'First', 'User',
        '$2a$10$LsVsLTHNDaJDu8dDbkGEk.4qDE8zIuiqvQ1Kvo99ET.gd.rqUQZjW', '2100-12-30 00:00:00'),
       (2, 'expiredUser@gmail.com', 'Expired', 'User', '$2a$10$LsVsLTHNDaJDu8dDbkGEk.4qDE8zIuiqvQ1Kvo99ET.gd.rqUQZjW',
        '2000-12-30 00:00:00'),
       (3, 'user2@gmail.com', 'Second', 'User',
        '$2a$10$LsVsLTHNDaJDu8dDbkGEk.4qDE8zIuiqvQ1Kvo99ET.gd.rqUQZjW', '2100-12-30 00:00:00');

INSERT INTO user_permissions
    (user_id, permission_id)
VALUES (1, 0),
       (3, 0);

INSERT INTO sports
    (title)
VALUES ('Football'),
       ('Basketball');

INSERT INTO tournaments
    (id, title, sport_id)
VALUES (1, 'English Premier League', 1),
       (2, 'Spain LaLiga', 1),
       (3, 'Italian Serie A', 1),
       (4, 'NBA', 2);

INSERT INTO teams
    (id, title, tournament_id)
VALUES
    (1, 'Leicester', 1),
    (2, 'Everton', 1),
    (3, 'Arsenal', 1),
    (4, 'Liverpool', 1),
    (5, 'Crystal Palace', 1),
    (6, 'Tottenham', 1),
    (7, 'Wolves', 1),
    (8, 'Brighton', 1),
    (9, 'Leeds', 1),
    (10, 'Chelsea', 1),
    (11, 'Newcastle', 1),
    (12, 'Aston Villa', 1),
    (13, 'Manchester City', 1),
    (14, 'Burnley', 1),
    (15, 'Manchester Utd', 1),
    (16, 'Sheffield Utd', 1),
    (17, 'West Ham', 1),
    (18, 'Fulham', 1),
    (19, 'Southampton', 1),
    (20, 'West Brom', 1);

INSERT INTO rounds
    (id, number, tournament_id)
VALUES (1, 1, 1),
       (2, 2, 1);

INSERT INTO matches
    (id, date, round_id, home_team_id, away_team_id, home_score, away_score, state)
VALUES
    (1, '2020-09-14 22:15:00', 1, 8, 10, 1, 3, 'FINISHED'),
    (2, '2020-09-14 20:00:00', 1, 16, 7, 0, 2, 'FINISHED'),
    (3, '2020-09-13 18:30:00', 1, 6, 2, 0, 1, 'FINISHED'),
    (4, '2020-09-13 16:00:00', 1, 20, 1, 0, 3, 'FINISHED'),
    (5, '2020-09-12 22:00:00', 1, 17, 11, 0, 2, 'FINISHED'),
    (6, '2020-09-12 19:30:00', 1, 4, 9, 4, 3, 'FINISHED'),
    (7, '2020-09-12 17:00:00', 1, 5, 19, 1, 0, 'FINISHED'),
    (8, '2020-09-12 14:30:00', 1, 18, 3, 0, 3, 'FINISHED'),
    (9, null, 1, 13, 12, null, null, 'SCHEDULED'),
    (10, null, 1, 14, 15, null, null, 'SCHEDULED');

INSERT INTO match_statistics
    (match_id, team_id, name, title, value, type)
VALUES
    (1, 8, 'POSSESSION', 'Possession', 52, 'PERCENT'),
    (1, 8, 'SHOTS', 'Shots', 13, 'NUMERIC'),
    (1, 8, 'SHOTS_ON_TARGET', 'Shots on Target', 3, 'NUMERIC'),
    (1, 8, 'SHOTS_OFF_TARGET', 'Shots off Target', 6, 'NUMERIC'),
    (1, 8, 'BLOCKED_SHOTS', 'Blocked shots', 4, 'NUMERIC'),
    (1, 8, 'FREE_KICKS', 'Free kicks', 16, 'NUMERIC'),
    (1, 8, 'CORNER_KICKS', 'Corner kicks', 4, 'NUMERIC'),
    (1, 8, 'OFFSIDES', 'Offsides', 0, 'NUMERIC'),
    (1, 8, 'GOALKEEPER_SAVES', 'Goalkeeper saves', 2, 'NUMERIC'),
    (1, 8, 'FOULS', 'Fouls', 8, 'NUMERIC'),
    (1, 8, 'YELLOW_CARDS', 'Yellow cards', 1, 'NUMERIC'),
    (1, 8, 'RED_CARDS', 'Red cards', 0, 'NUMERIC'),
    (1, 8, 'TOTAL_PASSES', 'Total passes', 507, 'NUMERIC'),
    (1, 8, 'TACKLES', 'Tackles', 17, 'NUMERIC'),
    (1, 8, 'ATTACKS', 'Attacks', 106, 'NUMERIC'),
    (1, 8, 'DANGEROUS_ATTACKS', 'Attacks', 48, 'NUMERIC'),

    (1, 8, 'POSSESSION', 'Possession', 48, 'PERCENT'),
    (1, 8, 'SHOTS', 'Shots', 10, 'NUMERIC'),
    (1, 8, 'SHOTS_ON_TARGET', 'Shots on Target', 5, 'NUMERIC'),
    (1, 8, 'SHOTS_OFF_TARGET', 'Shots off Target', 2, 'NUMERIC'),
    (1, 8, 'BLOCKED_SHOTS', 'Blocked shots', 3, 'NUMERIC'),
    (1, 8, 'FREE_KICKS', 'Free kicks', 7, 'NUMERIC'),
    (1, 8, 'CORNER_KICKS', 'Corner kicks', 3, 'NUMERIC'),
    (1, 8, 'OFFSIDES', 'Offsides', 3, 'NUMERIC'),
    (1, 8, 'GOALKEEPER_SAVES', 'Goalkeeper saves', 2, 'NUMERIC'),
    (1, 8, 'FOULS', 'Fouls', 13, 'NUMERIC'),
    (1, 8, 'YELLOW_CARDS', 'Yellow cards', 0, 'NUMERIC'),
    (1, 8, 'RED_CARDS', 'Red cards', 0, 'NUMERIC'),
    (1, 8, 'TOTAL_PASSES', 'Total passes', 465, 'NUMERIC'),
    (1, 8, 'TACKLES', 'Tackles', 16, 'NUMERIC'),
    (1, 8, 'ATTACKS', 'Attacks', 97, 'NUMERIC'),
    (1, 8, 'DANGEROUS_ATTACKS', 'Attacks', 27, 'NUMERIC');

INSERT INTO match_events
    (match_id, type, minute, team_id)
VALUES
    (1, 'GOAL', 23, 10),
    (1, 'GOAL', 54, 8),
    (1, 'GOAL', 56, 10),
    (1, 'GOAL', 66, 10),
    (1, 'YELLOW_CARD', 81, 8);