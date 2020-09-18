INSERT INTO users
    (email, first_name, last_name, password, account_expire_date)
VALUES ('user@gmail.com', 'Test', 'User',
        '$2a$10$LsVsLTHNDaJDu8dDbkGEk.4qDE8zIuiqvQ1Kvo99ET.gd.rqUQZjW', '2100-12-30 00:00:00');

INSERT INTO user_permissions
    (user_id, permission_id)
VALUES (1, 0);

INSERT INTO sports
    (id, title)
VALUES (1, 'Football'),
       (2, 'Basketball');

INSERT INTO tournaments
    (id, title, sport_id)
VALUES (1, 'English Premier League', 1),
       (2, 'Spain LaLiga', 1),
       (3, 'Italian Serie A', 1),
       (4, 'NBA', 2);