FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "dev", "--", "-p", "3002"]