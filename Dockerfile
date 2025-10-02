# 1️⃣ Stage final: servidor ligero
FROM node:20-alpine

# Instala servidor estático global
RUN npm install -g serve

# Carpeta de trabajo
WORKDIR /app

# Copia solo la carpeta dist del build
COPY --from=build /app/dist ./dist

# Usa la variable PORT que Dokku le asigna
ENV PORT 8080
EXPOSE $PORT

# 8️⃣ Comando para servir la carpeta dist
CMD ["sh", "-c", "serve -s dist -l $PORT"]
