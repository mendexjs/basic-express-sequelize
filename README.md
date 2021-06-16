# Projeto base para desenvolvimento JS

### STACK -  NodeJs | Express | Sequelize + Seeder | Mysql | Vue2

### Instruções para realizar o setup do projeto
entre no diretorio /app e rode os seguintes comandos
1. $ npm install
2. Altere as variaveis do banco no arquivo config/config.json
3. Crie o banco nomeado como no ambiente que acabou de configurar pelo mysql cli -> $ mysql -uroot -p após inserir a senha rode $ create database name_your_db
2. $ node server.js
   

### Rodar os Seeders

1. $ npx sequelize db:seed:all
