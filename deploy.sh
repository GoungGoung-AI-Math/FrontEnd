#!/bin/bash

# 변수 설정
DOCKERHUB_USERNAME="kurigohan73"
IMAGE_NAME="nextjs-app"
EC2_USER="ec2-user"
EC2_HOST="13.209.22.119"
EC2_KEY_PATH=~/Desktop/aikey.pem
SSL_CERT_PATH=/Users/makisekurisu

# Docker 이미지 빌드
echo "Docker 이미지 빌드 중..."
docker build --no-cache -t $DOCKERHUB_USERNAME/$IMAGE_NAME .

# Docker 이미지 빌드 성공 여부 확인
if [ $? -ne 0 ]; then
    echo "Docker 이미지 빌드 실패"
    exit 1
fi

# Docker 이미지 태그
echo "Docker 이미지 태그 중..."
docker tag $DOCKERHUB_USERNAME/$IMAGE_NAME $DOCKERHUB_USERNAME/$IMAGE_NAME:latest

# Docker 이미지 푸시
echo "Docker 이미지 푸시 중..."
docker push $DOCKERHUB_USERNAME/$IMAGE_NAME:latest
if [ $? -ne 0 ]; then
    echo "Docker 이미지 푸시 실패"
    exit 1
fi

# SSH 키 파일 존재 여부 확인
if [ ! -f "$EC2_KEY_PATH" ]; then
    echo "SSH 키 파일을 찾을 수 없습니다: $EC2_KEY_PATH"
    exit 1
fi

# SSL 인증서 및 프라이빗 키 존재 여부 확인
if [ ! -f "$SSL_CERT_PATH/fullchain.pem" ] || [ ! -f "$SSL_CERT_PATH/privkey.pem" ]; then
    echo "SSL 인증서 파일을 찾을 수 없습니다: $SSL_CERT_PATH"
    exit 1
fi

# EC2 인스턴스에 SSL 인증서 복사 및 Docker 컨테이너 실행
echo "EC2 인스턴스에 SSL 인증서 복사 및 Docker 컨테이너 실행 중..."
scp -i $EC2_KEY_PATH -o StrictHostKeyChecking=no $SSL_CERT_PATH/fullchain.pem $EC2_USER@$EC2_HOST:/tmp/fullchain.pem
scp -i $EC2_KEY_PATH -o StrictHostKeyChecking=no $SSL_CERT_PATH/privkey.pem $EC2_USER@$EC2_HOST:/tmp/privkey.pem

ssh -i $EC2_KEY_PATH $EC2_USER@$EC2_HOST <<EOF
    # SSL 인증서 디렉토리 생성 및 파일 이동
    sudo mkdir -p /etc/letsencrypt/live/test.udongrang.com
    sudo mv /tmp/fullchain.pem /etc/letsencrypt/live/test.udongrang.com/
    sudo mv /tmp/privkey.pem /etc/letsencrypt/live/test.udongrang.com/

    # 기존 컨테이너 중지 및 제거
    sudo docker stop $IMAGE_NAME || true
    sudo docker rm $IMAGE_NAME || true

    # Docker 이미지 풀링 및 새로운 컨테이너 실행
    sudo docker pull $DOCKERHUB_USERNAME/$IMAGE_NAME:latest
    sudo docker run -d --name $IMAGE_NAME -p 3000:3000 \
        -v /etc/letsencrypt:/etc/letsencrypt:ro \
        $DOCKERHUB_USERNAME/$IMAGE_NAME:latest
EOF
