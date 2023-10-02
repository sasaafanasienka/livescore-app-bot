# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем зависимости и файлы приложения
COPY package*.json ./
COPY ./app ./
RUN npm install

# Определяем команду для запуска приложения
CMD ["npx", "nodemon", "./src/server.js"]
