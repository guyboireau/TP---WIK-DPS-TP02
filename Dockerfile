FROM node:16.17 as builder
COPY . . 
RUN npm install && npx tsc && useradd -r guy   
USER guy

FROM node:16.17
COPY --from=builder . .
CMD node build/index.js
