# =========================
# 1️⃣ Stage de build
# =========================
FROM node:20-alpine AS build

# Carpeta de trabajo
WORKDIR /app

# Copia package.json y package-lock.json primero (cache eficiente)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto de la app
COPY . .

# Build de Astro
RUN npm run build

# =========================
# 2️⃣ Stage final: servidor ligero
# =========================
# Usamos NGINX para servir estáticos (más eficiente que Node)
FROM nginx:alpine

# Copiamos el build de Astro a la carpeta que sirve NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto que Dokku asigna
ENV PORT 80
EXPOSE 80

# NGINX ya sirve archivos estáticos automáticamente
# Dokku hará el proxy a este contenedor
CMD ["nginx", "-g", "daemon off;"]
