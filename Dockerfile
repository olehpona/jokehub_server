FROM node:buster
RUN mkdir ./app
COPY . ./app/
RUN git clone https://github.com/olehpona/jokeHUB
WORKDIR /jokeHUB
RUN npm install
RUN npm run build
WORKDIR /app
RUN npm install
RUN npx prisma generate
WORKDIR /
RUN rm -fdr /app/public/*
RUN cp -r /jokeHUB/dist/* /app/public/
RUN rm -fdr /jokeHUB
WORKDIR /app
EXPOSE 3000/tcp
CMD npm start