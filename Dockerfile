# Utiliza una imagen oficial de Node.js como imagen base
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package.json package-lock.json* ./

# Instala las dependencias de tu proyecto
RUN npm install

# Copia los archivos locales en el contenedor
COPY . .

# Expone el puerto que utilizará el servidor
EXPOSE 8000

# Define el comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]