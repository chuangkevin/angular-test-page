#Download Node Alpine image
FROM node:18-alpine As build
#Setup the working directory
WORKDIR /usr/src/ng-app
#Copy package.json
COPY package.json package-lock.json ./
#Install dependencies
RUN npm install
#Copy other files and folder to working directoryD
COPY ./ ./
#Build Angular application in PROD mode
RUN npm run build
#Download NGINX Image
FROM nginx:1.15.8-alpine
#Copy built angular files to NGINX HTML folder，$你的dist資料夾$
COPY --from=build /usr/src/ng-app/dist/test-api/ /usr/share/nginx/html
#設定要EXPOSE的Port
EXPOSE 80
EXPOSE 443
#設定Container的TimeZone
ENV TZ=Asia/Taipei
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
