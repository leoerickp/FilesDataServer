
FROM node:19-alpine3.15
EXPOSE 3000
WORKDIR /app
COPY . .
RUN yarn install --prod --frozen-lockfile
CMD [ "node","src/app.js"]