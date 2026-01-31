FROM node:20-alpine

WORKDIR /app

# pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# зависимости монорепы
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/backend/package.json apps/backend/

RUN pnpm install --frozen-lockfile

# исходники
COPY . .

WORKDIR /app/apps/backend

EXPOSE 3000
