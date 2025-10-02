# 1️⃣ Usa Node oficial como base
FROM node:20-alpine AS build

# 2️⃣ Carpeta de trabajo
WORKDIR /app

# 3️⃣ Copia package.json y package-lock.json primero para aprovechar cache
COPY package*.json ./

# 4️⃣ Instala dependencias
RUN npm install

# 5️⃣ Copia el resto de la app
COPY . .

# 6️⃣ Build de Astro
RUN npm run build

# ==========================================
# 7️⃣ Stage final: servidor ligero
FROM node:20-alpine

# Instala servidor estático global
RUN npm install -g serve

# Carpeta de trabajo
WORKDIR /app

# Copia solo la carpeta dist del build
COPY --from=build /app/dist ./dist

# Expone el puerto que Dokku espera
ENV PORT 3000
EXPOSE 3000

# 8️⃣ Comando para servir la carpeta dist
CMD ["serve", "-s", "dist", "-l", "3000"]
