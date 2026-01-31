FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/frontend/package.json apps/frontend/

RUN pnpm install --frozen-lockfile

COPY . .

WORKDIR /app/apps/frontend

EXPOSE 3001
