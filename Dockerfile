# 베이스 이미지로 Node.js 최신 LTS 버전 사용
FROM node:lts

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json 및 package-lock.json을 컨테이너에 복사
COPY package.json .
COPY package-lock.json .

# npm 종속성 설치
RUN npm install

# 애플리케이션 코드를 컨테이너에 복사
COPY . .

# src 디렉토리의 내용을 루트로 복사
RUN cp -r src/* .

# Next.js 애플리케이션 빌드
RUN npm run build

# 컨테이너 포트 설정
EXPOSE 3000

# 애플리케이션 시작 명령
CMD ["npm", "start"]
