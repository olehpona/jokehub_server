FROM node:buster
RUN mkdir ./app
COPY . ./app/
WORKDIR /app
RUN npm install
RUN npx prisma generate
EXPOSE 3000/tcp
CMD npm start
