FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/node:22.12-alpine

WORKDIR /app

COPY . .

RUN npm install --registry=https://registry.npmmirror.com
RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "dev", "--", "-p", "3002"]