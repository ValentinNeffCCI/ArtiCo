-- =============================================================================
-- ArtiCo — Script de peuplement de la base (jeu de données de démonstration)
-- À utiliser dans le cadre d'une soutenance.
--
-- PostgreSQL. Exécution :
--   psql "$DATABASE_URL" -f API/prisma/seed_demo.sql
--   ou via Docker :
--   docker compose exec -T <service_postgres> psql -U <user> -d <db> < API/prisma/seed_demo.sql
--
-- Le script vide les tables puis réinsère un jeu cohérent.
-- NB : les mots de passe ne sont pas réellement utilisables (hash factice).
-- =============================================================================

BEGIN;

-- 1) Remise à zéro (ordre géré par CASCADE, identités réinitialisées) ----------
TRUNCATE TABLE
    soumissions,
    options,
    inputs,
    galeries,
    formulaires,
    entreprises,
    categories,
    users
RESTART IDENTITY CASCADE;

-- 2) Catégories ---------------------------------------------------------------
INSERT INTO categories (id, name, "createdAt", "updatedAt") VALUES
    (1, 'Plomberie',    now(), now()),
    (2, 'Électricité',  now(), now()),
    (3, 'Menuiserie',   now(), now()),
    (4, 'Maçonnerie',   now(), now()),
    (5, 'Peinture',     now(), now()),
    (6, 'Autre',        now(), now());

-- 3) Utilisateurs -------------------------------------------------------------
-- Hash bcrypt factice de format valide (comptes non destinés à la connexion).
INSERT INTO users (id, name, email, password, role, active, "createdAt", "updatedAt") VALUES
    (1, 'admin',          'admin@artico.fr',        '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'ADMIN', true, now(), now()),
    (2, 'Jean Dubois',    'jean.dubois@artico.fr',  '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'USER',  true, now(), now()),
    (3, 'Marie Laurent',  'marie.laurent@artico.fr','$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'USER',  true, now(), now()),
    (4, 'Paul Martin',    'paul.martin@artico.fr',  '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'USER',  true, now(), now()),
    (5, 'Sophie Bernard', 'sophie.bernard@artico.fr','$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy','USER',  true, now(), now());

-- 4) Entreprises --------------------------------------------------------------
INSERT INTO entreprises
    (id, name, email, city, cp, address1, address2, phone, description, image, "ownerId", "categorieId", "createdAt", "updatedAt") VALUES
    (1, 'Plomberie Dubois & Fils', 'contact@plomberie-dubois.fr', 'Strasbourg', '67000', '12 rue des Artisans',  NULL,            '0388112233', 'Dépannage, installation sanitaire et rénovation de salle de bain.',        NULL, 2, 1, now(), now()),
    (2, 'Élec Laurent',            'contact@elec-laurent.fr',     'Colmar',     '68000', '5 avenue de la Gare',  'Bâtiment B',    '0389445566', 'Installation électrique, mise aux normes et domotique.',                  NULL, 3, 2, now(), now()),
    (3, 'Atelier Bois Martin',     'contact@bois-martin.fr',      'Mulhouse',   '68100', '23 rue du Chêne',      NULL,            '0389778899', 'Menuiserie sur mesure, pose de parquet et agencement intérieur.',          NULL, 4, 3, now(), now()),
    (4, 'Bâti Bernard',            'contact@bati-bernard.fr',     'Sélestat',   '67600', '8 impasse des Murs',   NULL,            '0388990011', 'Maçonnerie générale, gros œuvre et extensions de maison.',                 NULL, 5, 4, now(), now()),
    (5, 'Déco Peinture Laurent',   'deco@elec-laurent.fr',        'Colmar',     '68000', '14 rue Saint-Pierre',  NULL,            '0389220033', 'Peinture intérieure et extérieure, enduits décoratifs et ravalement.',     NULL, 3, 5, now(), now());

-- 5) Galeries (chemins de photos) --------------------------------------------
INSERT INTO galeries (id, path, "entrepriseId", "createdAt", "updatedAt") VALUES
    (1, 'uploads/demo/plomberie-1.jpg',  1, now(), now()),
    (2, 'uploads/demo/plomberie-2.jpg',  1, now(), now()),
    (3, 'uploads/demo/elec-1.jpg',       2, now(), now()),
    (4, 'uploads/demo/bois-1.jpg',       3, now(), now()),
    (5, 'uploads/demo/bois-2.jpg',       3, now(), now()),
    (6, 'uploads/demo/bati-1.jpg',       4, now(), now()),
    (7, 'uploads/demo/peinture-1.jpg',   5, now(), now());

-- 6) Formulaires --------------------------------------------------------------
INSERT INTO formulaires (id, name, "entrepriseId", "createdAt", "updatedAt") VALUES
    (1, 'Demande de devis plomberie',   1, now(), now()),
    (2, 'Contact rapide',               2, now(), now()),
    (3, 'Projet sur mesure',            3, now(), now()),
    (4, 'Demande de devis maçonnerie',  4, now(), now());

-- 7) Champs (inputs) ----------------------------------------------------------
-- Formulaire 1 : Demande de devis plomberie
INSERT INTO inputs (id, name, type, required, "formulaireId") VALUES
    (1, 'Nom complet',           'text',     true,  1),
    (2, 'Email',                 'email',    true,  1),
    (3, 'Téléphone',             'tel',      false, 1),
    (4, 'Type de prestation',    'select',   true,  1),
    (5, 'Description du besoin', 'textarea', true,  1);

-- Formulaire 2 : Contact rapide
INSERT INTO inputs (id, name, type, required, "formulaireId") VALUES
    (6, 'Nom',     'text',     true,  2),
    (7, 'Email',   'email',    true,  2),
    (8, 'Message', 'textarea', true,  2);

-- Formulaire 3 : Projet sur mesure
INSERT INTO inputs (id, name, type, required, "formulaireId") VALUES
    (9,  'Nom complet',       'text',     true,  3),
    (10, 'Email',             'email',    true,  3),
    (11, 'Type de projet',    'select',   true,  3),
    (12, 'Budget estimé',     'select',   false, 3),
    (13, 'Détails du projet', 'textarea', true,  3);

-- Formulaire 4 : Demande de devis maçonnerie
INSERT INTO inputs (id, name, type, required, "formulaireId") VALUES
    (14, 'Nom complet',  'text',     true,  4),
    (15, 'Email',        'email',    true,  4),
    (16, 'Nature des travaux', 'select', true, 4),
    (17, 'Surface (m²)', 'number',   false, 4),
    (18, 'Précisions',   'textarea', false, 4);

-- 8) Options (pour les champs de type select) ---------------------------------
-- Input 4 : Type de prestation (plomberie)
INSERT INTO options (id, value, "inputId") VALUES
    (1, 'Dépannage urgent',          4),
    (2, 'Installation sanitaire',    4),
    (3, 'Rénovation salle de bain',  4);

-- Input 11 : Type de projet (menuiserie)
INSERT INTO options (id, value, "inputId") VALUES
    (4, 'Meuble sur mesure', 11),
    (5, 'Pose de parquet',   11),
    (6, 'Agencement complet',11);

-- Input 12 : Budget estimé
INSERT INTO options (id, value, "inputId") VALUES
    (7, 'Moins de 1 000 €',   12),
    (8, '1 000 € à 5 000 €',  12),
    (9, 'Plus de 5 000 €',    12);

-- Input 16 : Nature des travaux (maçonnerie)
INSERT INTO options (id, value, "inputId") VALUES
    (10, 'Extension',     16),
    (11, 'Mur de clôture',16),
    (12, 'Terrasse',      16);

-- 9) Soumissions (réponses aux formulaires, contenu JSON) ---------------------
INSERT INTO soumissions (id, content, email, "formulaireId", "createdAt", "updatedAt") VALUES
    (1,
     '{"Nom complet":"Luc Petit","Email":"luc.petit@example.com","Téléphone":"0612345678","Type de prestation":"Dépannage urgent","Description du besoin":"Fuite sous l''évier de la cuisine, intervention rapide souhaitée."}',
     'luc.petit@example.com', 1, now(), now()),
    (2,
     '{"Nom complet":"Anne Moreau","Email":"anne.moreau@example.com","Téléphone":"","Type de prestation":"Rénovation salle de bain","Description du besoin":"Rénovation complète d''une salle de bain de 6m²."}',
     'anne.moreau@example.com', 1, now(), now()),
    (3,
     '{"Nom":"Thomas Roux","Email":"thomas.roux@example.com","Message":"Bonjour, je souhaite un devis pour la mise aux normes de mon tableau électrique."}',
     'thomas.roux@example.com', 2, now(), now()),
    (4,
     '{"Nom complet":"Claire Faure","Email":"claire.faure@example.com","Type de projet":"Meuble sur mesure","Budget estimé":"1 000 € à 5 000 €","Détails du projet":"Bibliothèque sur mesure pour un salon, hauteur sous plafond 2m70."}',
     'claire.faure@example.com', 3, now(), now()),
    (5,
     '{"Nom complet":"Hugo Garnier","Email":"hugo.garnier@example.com","Nature des travaux":"Terrasse","Surface (m²)":"25","Précisions":"Création d''une terrasse béton à l''arrière de la maison."}',
     'hugo.garnier@example.com', 4, now(), now());

-- 10) Recalage des séquences d'auto-incrément ---------------------------------
SELECT setval(pg_get_serial_sequence('categories',  'id'), (SELECT MAX(id) FROM categories));
SELECT setval(pg_get_serial_sequence('users',       'id'), (SELECT MAX(id) FROM users));
SELECT setval(pg_get_serial_sequence('entreprises', 'id'), (SELECT MAX(id) FROM entreprises));
SELECT setval(pg_get_serial_sequence('galeries',    'id'), (SELECT MAX(id) FROM galeries));
SELECT setval(pg_get_serial_sequence('formulaires', 'id'), (SELECT MAX(id) FROM formulaires));
SELECT setval(pg_get_serial_sequence('inputs',      'id'), (SELECT MAX(id) FROM inputs));
SELECT setval(pg_get_serial_sequence('options',     'id'), (SELECT MAX(id) FROM options));
SELECT setval(pg_get_serial_sequence('soumissions', 'id'), (SELECT MAX(id) FROM soumissions));

COMMIT;

-- Récapitulatif
SELECT 'categories'  AS table, count(*) FROM categories
UNION ALL SELECT 'users',       count(*) FROM users
UNION ALL SELECT 'entreprises', count(*) FROM entreprises
UNION ALL SELECT 'galeries',    count(*) FROM galeries
UNION ALL SELECT 'formulaires', count(*) FROM formulaires
UNION ALL SELECT 'inputs',      count(*) FROM inputs
UNION ALL SELECT 'options',     count(*) FROM options
UNION ALL SELECT 'soumissions', count(*) FROM soumissions;
