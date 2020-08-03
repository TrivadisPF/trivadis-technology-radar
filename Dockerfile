FROM node:13

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080

RUN yarn

CMD ["yarn", "watch"]