/* Replace with your SQL commands */
CREATE TABLE collections
(
    id INTEGER NOT NULL,
    title VARCHAR(200) NOT NULL,
    division VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price INTEGER,
    telephone NUMERIC NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);

