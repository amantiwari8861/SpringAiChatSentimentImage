#!/bin/bash
# For Amazon Linux 2023

# chmod 400 MyWebServer.pem
ssh -i "MyWebServer.pem" ec2-user@ec2-54-82-118-135.compute-1.amazonaws.com
# sudo dnf install -y java-21-amazon-corretto
# chmod +x mvnw
# ./mvnw clean package -DskipTests
java -jar target/SpringAiProject-0.0.1-SNAPSHOT.jar
# sudo dnf install -y nginx   
# sudo systemctl start nginx
# sudo systemctl enable nginx

sudo vi /etc/nginx/conf.d/springboot.conf

https://3.88.180.76:8080/api/v1/chat
https://api.iamandroid.in:8080/api/v1/chat
http://api.iamandroid.in/api/v1/chat
https://api.iamandroid.in/api/v1/chat
