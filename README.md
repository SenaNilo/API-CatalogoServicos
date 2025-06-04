## Inicializacao

npm init -y

## Dependencias

npm install express prisma sqlite3 cors bcrypt jsonwebtoken

npm install -D nodemon

npx prisma init

## Migrate Banco Prisma

npx prisma migrate dev --name init 