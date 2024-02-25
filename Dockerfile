FROM node:14.18-alpine
ENV NODE_ENV development
ENV TSC_WATCHFILE UseFsEvents
WORKDIR /app
COPY package.json .
#COPY yarn.lock .
RUN yarn install
COPY . .
CMD ["yarn", "dev"]
EXPOSE 3000