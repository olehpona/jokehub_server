FROM node:buster
RUN mkdir ./app
COPY package*.json ./app/
WORKDIR /app
CMD npm install
COPY . ./app/
CMD npx prisma generate
EXPOSE 3000/tcp
CMD npm start
