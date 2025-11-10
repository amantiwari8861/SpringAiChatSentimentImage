#!/bin/bash
# For Amazon Linux 2023

# chmod 400 MyWebServer.pem
ssh -i "MyWebServer.pem" ec2-user@ec2-54-82-118-135.compute-1.amazonaws.com
# sudo dnf install -y java-21-amazon-corretto

scp -i MyWebServer.pem -r ./SpringAiProject ec2-user@13.235.90.38:/home/ec2-user/

chmod +x mvnw
./mvnw clean package -DskipTests
java -jar target/SpringAiProject-0.0.1-SNAPSHOT.jar
# sudo dnf install -y nginx   
# sudo systemctl start nginx
# sudo systemctl enable nginx

sudo vi /etc/nginx/conf.d/springboot.conf

https://3.88.180.76:8080/api/v1/chat
https://api.iamandroid.in:8080/api/v1/chat
http://api.iamandroid.in/api/v1/chat
https://api.iamandroid.in/api/v1/chat


Elastic IPv4 : 65.2.77.44

ssh -i "MyWebServer.pem" ec2-user@ec2-65-2-77-44.ap-south-1.compute.amazonaws.com
sudo dnf install -y java-21-amazon-corretto
scp -i MyWebServer.pem -r ./SpringAiProject ec2-user@65.2.77.44:/home/ec2-user/
cd SpringAiProject
chmod +x mvnw
./mvnw clean package -DskipTests
java -jar target/SpringAiProject-0.0.1-SNAPSHOT.jar

making a sub domain names api under iamandroid.in
input an A record pointing to Elastic IP : 65.2.77.44

sudo dnf install -y nginx   
sudo systemctl start nginx
sudo systemctl enable nginx

sudo systemctl status nginx

sudo vi /etc/nginx/conf.d/springboot.conf
sudo nginx -t
sudo systemctl reload nginx
```
server {
    listen 80;
    server_name api.iamandroid.in;

    location / {
        proxy_pass http://localhost:8080;   # Your Spring Boot backend port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

sudo dnf install -y python3 python3-pip
sudo pip3 install certbot certbot-nginx
certbot --version

sudo systemctl status nginx
sudo ss -tuln | grep :80
sudo certbot --nginx -d api.iamandroid.in
https://api.iamandroid.in/api/v1
