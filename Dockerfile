FROM oven/bun:1.3.12-alpine

WORKDIR /app

COPY . .

RUN bun install --registry=https://registry.npmmirror.com
RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "dev"]
