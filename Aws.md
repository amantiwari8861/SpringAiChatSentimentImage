# Getting Started with AWS

## **1. AWS (Amazon Web Services)**

* **Definition:** AWS is a **cloud computing platform** provided by Amazon. It offers on-demand computing resources like servers, storage, databases, networking, and many other services over the internet.
* **Key Features:**

  * **Scalability:** You can scale up or down based on demand.
  * **Pay-as-you-go:** You only pay for the resources you use.
  * **Global Infrastructure:** AWS has data centers worldwide called **Regions** and **Availability Zones (AZs)**.
  * **Managed Services:** Services like RDS (Database), S3 (Storage), Lambda (Serverless computing), EC2 (Virtual servers), etc.

**Analogy:** Think of AWS as renting a virtual computer or network resources whenever you need them, instead of buying physical hardware.

---

### **2. VPC (Virtual Private Cloud)**

* **Definition:** A **VPC** is like a **private network inside AWS** where you can launch your AWS resources (EC2 instances, databases, etc.) in a controlled, secure environment.
* **Key Features:**

  * **Isolation:** You can control who can access resources inside the VPC.
  * **Subnetting:** Divide your VPC into **subnets** (private or public) to organize resources.
  * **Routing & Security:** Use **route tables**, **security groups**, and **network ACLs** to control traffic.
  * **Connectivity:** You can connect your VPC to the internet, on-premises networks, or other VPCs via **VPNs**, **Direct Connect**, or **VPC Peering**.

**Analogy:** Imagine AWS as a big apartment building (AWS cloud), and your VPC is your own locked apartment where you control who comes in and out.

---

✅ **Relationship:** Every AWS account can have multiple VPCs, and each VPC can host multiple resources securely. VPC ensures that your cloud environment is private and organized, even though it's hosted on AWS.

---

- to secure key `chmod 400 "MyWebServer.pem"`
- to connect `ssh -i "MyWebServer.pem" ec2-user@ec2-54-91-120-203.compute-1.amazonaws.com`
- `sudo dnf update -y`
- `sudo dnf install git -y`
- `rm -rf AiFrontend`

# Git and Github

- Git -> local version control system (VCS)
- Github -> a platform where we can host our code

## Setup Git and Github

- install git for windows/linux
- open terminal
- type `git -v` to check git version
- `git config --global user.email "youremail@gmail.com"`
- `git config --global user.name "your name"`
- `git init` -> to initialize the empty repository
- `git add -A`  -> add all files to track by Git
- `git commit -a -m "any message"` -> commit is just like a savepoint where you can rollback
- make account on github
- make a repository on github and copy repository url
- `git remote add origin your-repository-url` -> telling git that here you have to push the codes
- `git push -u origin master` -> final command to push codes on github
