FROM node:16-alpine

WORKDIR /link-creator-app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN npm i

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000