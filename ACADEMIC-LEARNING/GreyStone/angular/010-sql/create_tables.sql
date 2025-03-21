
CREATE TABLE user (
    id INT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE task (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

SELECT * FROM task;
SELECT * FROM user;