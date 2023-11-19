FROM node:buster
RUN mkdir ./app
COPY . ./app/
WORKDIR /app
CMD npm install
CMD npx prisma generate
EXPOSE 3000/tcp
CMD npm start
