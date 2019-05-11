FROM node:9.6.1
ADD ./frontend/ /opt/frontend
WORKDIR /opt/frontend/
RUN cat /opt/frontend/requirements.txt | xargs npm install -g
RUN yarn install
