CREATE DATABASE IF NOT EXISTS pokedex_db;
USE pokedex_db;

CREATE TABLE IF NOT EXISTS pokemon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nivel_base INT NOT NULL,
    es_legendario BOOLEAN NOT NULL DEFAULT FALSE
);

-- Datos contrastados y correctos.
INSERT INTO pokemon (nombre, nivel_base, es_legendario) VALUES
('Bulbasaur', 5, FALSE),   -- Gen 1 (Lanzamiento en Japón)
('Pikachu', 5, FALSE),     -- Gen 1
('Mewtwo', 70, TRUE),      -- Gen 1 (Legendario real)
('Lugia', 45, TRUE),       -- Gen 2 (Lanzamiento Oro/Plata Japón)
('Mudkip', 5, FALSE),      -- Gen 3 (Lanzamiento Rubí/Zafiro Japón)
('Garchomp', 48, FALSE),   -- Gen 4 (Lanzamiento Diamante/Perla Japón)
('Arceus', 80, TRUE),      -- Gen 4 (Mítico/Legendario)
('Greninja', 36, FALSE),   -- Gen 6 (Lanzamiento X/Y Mundial)
('Sprigatito', 25, FALSE),  -- Gen 9 (Lanzamiento Escarlata/Púrpura Mundial)
('Koraidon', 70, TRUE);    -- Gen 9 (Legendario real)