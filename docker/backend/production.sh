#!/bin/sh
set -e

npx prisma generate

npx prisma migrate deploy

npx prisma db seed

node index.js