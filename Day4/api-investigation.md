# 🌐 Day 4 — API Analysis using DNS, Traceroute & CURL

## 📘 Overview
This activity focuses on understanding how web requests work at both the **network level** (DNS & traceroute) and the **application level** (HTTP requests, headers, and caching).  
The objective is to analyze how data travels, how responses are structured, and how caching optimizes network usage.

---

## 🔹 Task 1: Perform DNS Lookup and Traceroute

### 🧠 Concept
- **DNS Lookup (`nslookup`)** resolves a domain name (e.g., `dummyjson.com`) into its corresponding IP addresses (IPv4 and IPv6).  


- **Traceroute (`traceroute`)** traces the path that packets take from your local machine to the destination server, showing intermediate hops.


### 💡 Purpose
- Understand **how a domain maps to its IPs**.
- Visualize **the network path** and latency between each hop.

📸 *Attach screenshots of `nslookup` and `traceroute` commands here.*
![alt text](<Screenshot from 2025-11-07 16-16-05.png>)
---
![alt text](<Screenshot from 2025-11-07 16-16-34.png>)
## 🔹 Task 2: Analyze Requests using CURL

### 🧠 Concept
`curl` is a command-line tool used to send HTTP requests and inspect responses.  
Here, it helps observe the **request method, status codes, headers, and response data.**

### 💡 Observation
- Used endpoint: `https://dummyjson.com/products?limit=5&skip=10`
- Displays key details such as:
  - Response headers (`Content-Type`, `Date`, `ETag`)
  - Server info (`Cloudflare`)
  - Product data in JSON format

📸 *Attach screenshot of `curl -v https://dummyjson.com/products?limit=5&skip=10` output.*
![alt text](<Screenshot from 2025-11-07 16-17-08.png>)
---
![alt text](<Screenshot from 2025-11-07 16-18-25.png>)
## 🔹 Task 3: Modify and Compare HTTP Headers

### 🧠 Concept
HTTP headers provide metadata about a request or response.  
By modifying them, we can simulate different client behaviors or test server responses.

### 💡 Steps Performed
- **Removed the `User-Agent` header** → simulates requests without browser identity.  
- **Added a fake `Authorization` header** → tests server behavior when unauthorized tokens are passed.  
- Observed and compared responses to identify **header-based behavior changes**.

📸 *Attach screenshots showing both modified header requests and their responses.*
![alt text](<Screenshot from 2025-11-07 16-19-21.png>)
---
![alt text](<Screenshot from 2025-11-07 16-23-44.png>)
![alt text](<Screenshot from 2025-11-07 16-24-07.png>)
## 🔹 Task 4: Pagination and Observe Caching with ETag
![alt text](<Screenshot from 2025-11-07 16-24-55.png>)
![alt text](<Screenshot from 2025-11-07 16-25-19.png>)
![alt text](<Screenshot from 2025-11-07 16-25-50.png>)
### 🧠 Concept
**ETag (Entity Tag)** is a unique identifier assigned to a resource version.  
It helps implement **client-side caching** — avoiding unnecessary data transfers when content hasn’t changed.

### 💡 Steps Performed
1. Sent a request and noted the `ETag` value from response headers.  
2. Re-sent the request with `If-None-Match: <etag>`.  
3. Server returned **`304 Not Modified`**, indicating cached data was still valid.

### ✅ Outcome
- Reduced bandwidth usage.
- Confirmed that caching with `ETag` and `If-None-Match` works as expected.

📸 *Attach screenshots showing ETag in first request and 304 Not Modified in second.*

---
![alt text](<Screenshot from 2025-11-07 16-26-52.png>)
## 🧠 Summary

| Task | Concept | Key Learning |
|------|----------|---------------|
| DNS Lookup | Domain-to-IP resolution | Learned how DNS maps hostnames to IPs |
| Traceroute | Network path visualization | Understood hops and latency to the server |
| CURL Request | Inspect API responses | Observed headers, body, and status codes |
| Header Modification | Custom header testing | Analyzed how servers react to header changes |
| Caching (ETag) | Reuse unchanged responses | Demonstrated efficient caching via 304 response |

---
### POSTMAN Screenshots

![alt text](<Screenshot from 2025-11-07 16-28-52.png>)

![alt text](<Screenshot from 2025-11-07 16-29-31.png>)

![alt text](<Screenshot from 2025-11-07 16-29-44.png>)

![alt text](<Screenshot from 2025-11-07 16-42-20.png>)

**Author:** *Chandramohan*  
**Date:** *Day 4 — API Requests, Headers & Caching Analysis*  
**Tools Used:** `curl`, `nslookup`, `traceroute`, `Postman`, `Terminal`

