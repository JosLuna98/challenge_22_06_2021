FROM node:12.18.1

WORKDIR /code

COPY package*.json /code

RUN npm install

COPY . /code

EXPOSE 8080

CMD ["npm", "run", "serve"]