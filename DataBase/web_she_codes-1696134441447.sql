
CREATE TABLE Campaign
(
  campaign_id INT(11)      NOT NULL,
  name        VARCHAR(30)  NOT NULL,
  level       VARCHAR(25)  NOT NULL,
  mem_count   INT(11)      NOT NULL,
  description VARCHAR(100) NOT NULL,
  note        VARCHAR(100) NOT NULL,
  PRIMARY KEY (campaign_id)
);

CREATE TABLE Challenge
(
  challenge_id   INT(11)      NOT NULL,
  challenge_name VARCHAR(25)  NOT NULL,
  date           DATETIME     NOT NULL DEFAULT TIMESTAMP,
  user_id        INT(11)      NOT NULL,
  description    VARCHAR(100) NOT NULL,
  campaign_id    INT(11)      NOT NULL,
  PRIMARY KEY (challenge_id)
);

CREATE TABLE Comment
(
  post_id INT(11)     NOT NULL,
  time    DATETIME    NOT NULL DEFAULT Timestamp,
  content VARCHAR(30) NOT NULL,
  user_id INT(11)     NOT NULL
);

CREATE TABLE Detail_challenge
(
  challenge_id INT(11)  NOT NULL,
  user_id      INT(11)  NOT NULL,
  finish_date  DATETIME NOT NULL DEFAULT TIMESTAMP,
  point        INT(11)  NOT NULL
);

CREATE TABLE Detail_rank
(
  user_id      INT(11) NOT NULL,
  id           INT(11) NOT NULL,
  total_point  INT     NOT NULL,
  redeem_point INT     NOT NULL
);

CREATE TABLE Detail_voucher
(
  user_id    INT(11)  NOT NULL,
  voucher_id INT(11)  NOT NULL,
  redeem     DATETIME NOT NULL,
  used       VARCHAR  NOT NULL,
  point      INT(11)  NOT NULL
);

CREATE TABLE Post
(
  post_id      INT(11)      NOT NULL,
  date         DATETIME     NOT NULL DEFAULT Timestamp,
  user_id      INT(11)      NOT NULL,
  title        VARCHAR(25)  NOT NULL,
  content      VARCHAR(100) NOT NULL,
  media        VARCHAR      NOT NULL,
  challenge_id INT(11)      NOT NULL,
  PRIMARY KEY (post_id)
);

CREATE TABLE Rank
(
  id    INT(11)     NOT NULL,
  name  VARCHAR(30) NOT NULL,
  point INT(11)     NOT NULL,
  ratio FLOAT       NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Schedule
(
  schedule_id INT(11)      NOT NULL,
  campaign_id INT(11)      NOT NULL,
  name        VARCHAR(30)  NOT NULL,
  date        DATE         NOT NULL,
  start       DATETIME     NOT NULL DEFAULT timestamp,
  content     VARCHAR(100) NOT NULL,
  PRIMARY KEY (schedule_id)
);

CREATE TABLE User
(
  user_id      INT(11)     NOT NULL,
  name         VARCHAR(25) NOT NULL,
  password     VARCHAR(30) NOT NULL,
  birth_date   DATETIME    NOT NULL DEFAULT TIMESTAMP,
  email        VARCHAR(30) NOT NULL,
  ava          BLOB        NOT NULL,
  phone_number INT(12)     NOT NULL,
  address      VARCHAR(30) NOT NULL,
  type         INT(2)      NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE Voucher
(
  user_id    INT(11)  NOT NULL,
  date       DATETIME NOT NULL DEFAULT TIMESTAMP,
  voucher_id INT(11)  NOT NULL,
  percent    INT(11)  NOT NULL,
  amount     INT(11)  NOT NULL,
  point      INT(11)  NOT NULL,
  expiredate DATETIME NOT NULL DEFAULT TIMESTAMP,
  PRIMARY KEY (voucher_id)
);

ALTER TABLE Post
  ADD CONSTRAINT FK_Challenge_TO_Post
    FOREIGN KEY (challenge_id)
    REFERENCES Challenge (challenge_id);

ALTER TABLE Comment
  ADD CONSTRAINT FK_Post_TO_Comment
    FOREIGN KEY (post_id)
    REFERENCES Post (post_id);

ALTER TABLE Detail_challenge
  ADD CONSTRAINT FK_Challenge_TO_Detail_challenge
    FOREIGN KEY (challenge_id)
    REFERENCES Challenge (challenge_id);

ALTER TABLE Post
  ADD CONSTRAINT FK_User_TO_Post
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Comment
  ADD CONSTRAINT FK_User_TO_Comment
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Detail_challenge
  ADD CONSTRAINT FK_User_TO_Detail_challenge
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Challenge
  ADD CONSTRAINT FK_User_TO_Challenge
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Voucher
  ADD CONSTRAINT FK_User_TO_Voucher
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Detail_voucher
  ADD CONSTRAINT FK_Voucher_TO_Detail_voucher
    FOREIGN KEY (voucher_id)
    REFERENCES Voucher (voucher_id);

ALTER TABLE Detail_voucher
  ADD CONSTRAINT FK_User_TO_Detail_voucher
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Detail_rank
  ADD CONSTRAINT FK_User_TO_Detail_rank
    FOREIGN KEY (user_id)
    REFERENCES User (user_id);

ALTER TABLE Detail_rank
  ADD CONSTRAINT FK_Rank_TO_Detail_rank
    FOREIGN KEY (id)
    REFERENCES Rank (id);

ALTER TABLE Schedule
  ADD CONSTRAINT FK_Campaign_TO_Schedule
    FOREIGN KEY (campaign_id)
    REFERENCES Campaign (campaign_id);

ALTER TABLE Challenge
  ADD CONSTRAINT FK_Campaign_TO_Challenge
    FOREIGN KEY (campaign_id)
    REFERENCES Campaign (campaign_id);
