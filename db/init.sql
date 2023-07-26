SELECT 'CREATE DATABASE apiorg'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'apiorg')\gexec