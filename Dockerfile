FROM node:latest

COPY ./server .

RUN npm i

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]