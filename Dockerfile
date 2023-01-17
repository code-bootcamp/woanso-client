# 나만의 가짜 컴퓨터 만드는 설명서

# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 깔려있는 이미지 다운로드하는 방식)
FROM node:14

# 2. 패키지 먼저 설치하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install 

# 3. 패키지 먼저 설치하고 변경된 소스코드 복사하기
COPY . /myfolder/
RUN yarn build

# 3. 도커 안에서 프로그램 실행하기(yarn start를 CMD으로 하는 이유는 도커가 RUN까지만 이미지 파일로 저장하기 때문이다. RUN으로 하면 yarn start도 이미지로 저장하면 비효율적)
CMD yarn start
