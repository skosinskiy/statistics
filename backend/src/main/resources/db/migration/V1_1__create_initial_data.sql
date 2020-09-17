INSERT INTO users
    (email, first_name, last_name, password, account_expire_date)
VALUES ('user@gmail.com', 'Test', 'User',
        '$2a$10$LsVsLTHNDaJDu8dDbkGEk.4qDE8zIuiqvQ1Kvo99ET.gd.rqUQZjW', '2100-12-30 00:00:00');

INSERT INTO user_permissions
    (user_id, permission_id)
VALUES (1, 0);