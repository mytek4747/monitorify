-- Create a SQLite database
CREATE TABLE monitors (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    display_duration INTEGER NOT NULL,
    loop BOOLEAN NOT NULL
);

CREATE TABLE images (
    id INTEGER PRIMARY KEY,
    monitor_id INTEGER,
    image_url TEXT NOT NULL,
    FOREIGN KEY (monitor_id) REFERENCES monitors(id)
);
