# Getting Started with Cloud Deployment 🌐

---

## ☁️ What is Cloud?

| Feature              | Description                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**       | Cloud refers to using remote servers hosted on the internet to store, manage, and process data, instead of local servers or personal computers.                 |
| **Benefits**         | Cost-efficient, scalable, high availability, automatic updates, pay-as-you-go.                                                                                  |
| **Service Models**   | - IaaS (Infrastructure as a Service): e.g., AWS EC2<br>- PaaS (Platform as a Service): e.g., Heroku<br>- SaaS (Software as a Service): e.g., Gmail, Google Docs |
| **Deployment Types** | - Public Cloud: Shared (AWS, Azure)<br>- Private Cloud: Owned by single org<br>- Hybrid Cloud: Combination of both                                              |

---

## 💻 What is EC2 (Elastic Compute Cloud)?

| Feature           | Description                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Definition**    | EC2 is a **web service** provided by AWS that lets you rent **virtual machines (instances)** to run your applications. |
| **Use Cases**     | Web servers, databases, batch processing, backend services.                                                            |
| **Billing**       | Pay-per-use based on hours, storage, and networking.                                                                   |
| **Customization** | Choose OS (Ubuntu, Amazon Linux, Windows), CPU, Memory, Storage.                                                       |
| **Scalable**      | Easily start, stop, scale or terminate instances based on demand.                                                      |

---

## 🚀 Steps to Launch an EC2 Instance (AWS)

| Step | Action                                                                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣   | Go to [AWS Console](https://console.aws.amazon.com/) and sign in.                                                                                   |
| 2️⃣   | Open the **EC2 Dashboard**. Click on “**Launch Instance**”.                                                                                         |
| 3️⃣   | **Choose AMI (Amazon Machine Image)** — Select OS (e.g., Ubuntu, Amazon Linux).                                                                     |
| 4️⃣   | **Choose Instance Type** — e.g., `t2.micro` (Free Tier eligible).                                                                                   |
| 5️⃣   | **Configure Instance** — Number of instances, network settings (default VPC is okay for now).                                                       |
| 6️⃣   | **Add Storage** — Accept default or customize (e.g., 8 GB SSD).                                                                                     |
| 7️⃣   | **Add Tags** — Optional (e.g., Name = “MyServer”).                                                                                                  |
| 8️⃣   | **Configure Security Group** — Add rules:<br> - SSH (Port 22) from My IP<br> - HTTP (Port 80) from Anywhere (0.0.0.0/0)<br> - HTTPS (443) if needed |
| 9️⃣   | **Review & Launch** — Click "Launch". Select or create a **Key Pair** (.pem file) to connect.                                                       |
| 🔟   | Done! EC2 instance will start in a few seconds. Use the **Public IPv4** or **DNS** to access.                                                       |

---

## 🛠️ Connect to EC2 (Linux instance)

```bash
chmod 400 my-key.pem   # secure your key
ssh -i my-key.pem ec2-user@<your-public-ip>
```

- Replace `ec2-user` with:
  - `ubuntu` for Ubuntu
  - `ec2-user` for Amazon Linux

---

## 📌 Additional Notes

- EC2 runs 24/7 unless you stop or terminate it manually.
- You can install **Node.js, Java, or Docker** once logged in.
- Use **Elastic IP** for a static public IP.
- **AWS Free Tier** offers **750 hours/month** of `t2.micro`.

## host basic html page

1. Login to AWS console
2. create ec2 machine
3. configure security group(ssh -22 for admin only) (80 for normal traffic)
4. connect to ec2 machine
5. install httpd webserver in machine (used to run web app)

- `sudo su`
- `yum update -y`
- `yum install httpd -y`
- `cd /var/www/html`
- create website to ec2 machine
- `service httpd start`

6.access website from browser using ec2 public ip or DNS

```bash
ssh -i testec2.pem ec2-user@3.111.32.17
```

```bash
ssh -i src/main/resources/cloud/testec2.pem ec2-user@3.111.32.17
sudo dnf install -y java-21-amazon-corretto
sudo yum install -y java-21-amazon-corretto
chmod +x mvnw
./mvnw clean package -DskipTests
java -jar target/SpringAiProject-0.0.1-SNAPSHOT.jar
https://3.88.180.76:8080/api/v1/chat
ERR_SSL_PROTOCOL_ERROR if u go on https
add an A records in domain DNS with name api and ip address 3.88.180.76
https://api.iamandroid.in:8080/api/v1/chat

```bash
sudo dnf install -y nginx   # For Amazon Linux 2023
# OR
sudo yum install -y nginx   # For Amazon Linux 2
```

sudo systemctl start nginx
sudo systemctl enable nginx

sudo vi /etc/nginx/nginx.conf
include /etc/nginx/conf.d/*.conf;

go to security groups and add new inbound rule for 8080 for everyone

scp -i src/main/resources/cloud/testec2.pem ./myapp.jar ec2-user@13.232.180.98:/home/ec2-user/
java -jar myapp.jar
nohup java -jar myapp.jar > app.log 2>&1 &
tail -f app.log
scp -i mykey.pem myapp.jar ec2-user@<ip-address>:/opt/apps/
