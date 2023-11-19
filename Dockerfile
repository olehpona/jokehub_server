FROM node:buster
RUN mkdir ./app
COPY package*.json ./app/
CMD npm install
COPY . ./app/
CMD npx prisma generate
WORKDIR /app
EXPOSE 3000/tcp
CMD npm start