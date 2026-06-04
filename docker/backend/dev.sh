#!/bin/sh
set -e

npx prisma generate

npx prisma migrate deploy

npx prisma db seed || echo "Seed ignoré (déjà appliqué ou non nécessaire)"

node --watch index.js
