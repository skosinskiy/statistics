drop table if exists user_permissions;
drop table if exists users;

create table user_permissions
(
    user_id       bigint not null,
    permission_id integer
);

create table users
(
    id                            bigint generated by default as identity,
    date_created                  timestamp,
    date_modified                 timestamp,
    account_expire_date           timestamp,
    email                         varchar(255),
    first_name                    varchar(255),
    jwt_refresh_token             varchar(255),
    jwt_refresh_token_expire_date timestamp,
    last_name                     varchar(255),
    password                      varchar(255),
    role_id                       varchar(255),
    primary key (id)
);

alter table user_permissions
    add constraint FKkowxl8b2bngrxd1gafh13005u foreign key (user_id) references users;