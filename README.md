# 🚀 Mitimes Developer Assessment Submission

Welcome to my technical submission for the **Senior Developer** role at [Mitimes](https://au.mitimes.com/) 👋  
This project demonstrates API interaction, async control flow, and clean, modern JavaScript (Node.js) development — all designed with simplicity, clarity, and performance in mind.

---

## 🧩 Assessment Requirements

✅ Command-line executable project  
✅ Fetches secret token from `https://au.mitimes.com/careers/apply/secret`  
✅ Sends authorized POST request to `https://au.mitimes.com/careers/apply`  
✅ Uses `Authorization` header with secret token  
✅ Posts a JSON body with `name`, `email`, `job_title`, etc.  
✅ Logs response status & body to the console

### 🧪 Optional Enhancements (Also Addressed)

✅ Include `final_attempt: true` in the final POST payload  
✅ Add an `extra_information` object with fields like:
- `skills`
- `experience`
- `motivation`
- (or any custom attributes that represent the developer)

---

## 🛠️ Tech Stack

| Tech            | Purpose                             |
|-----------------|-------------------------------------|
| `Node.js`       | JavaScript runtime environment      |
| `fetch` (via Node 18+) | For HTTP requests          |
| `ES6+` Features | Async/Await, Template literals, etc |

---

## 📦 How to Run

> ⚠️ **Pre-requisites**:  
> Ensure you have **Node.js v18 or higher** installed, which includes native `fetch` support.

### 🧑‍💻 Clone this repo

```bash
git clone https://github.com/Karan-21/Mitimes-Assessment.git
cd Mitimes-Assessment
```

### 📂 File structure
```bash
├── main.js        # Main script file
└── README.md      # This file 📝
```

### 🚀 Run the script
```bash
node main.js
```

### ✅ Output
You will see output like:
```bash
=> Before Final Submission: -
Status Code: 201
Response Body:
 {
  message: "Nice work! Just remember to add 'final_attempt': true to complete :)",
  received: true,
  status_code: 201
}

=> After Final Submission: -
Status Code: 201
Response Body:
{
  message: 'Thanks! Keep an eye on karngupta21@gmail.com inbox for an email from us :)',
  received: true,
  status_code: 201
}
```

## ✨ Code Highlights

### 🔄 1. Fetch Wrapper Utility
A reusable function that wraps the fetch API. It simplifies HTTP calls by handling method, headers, and body formatting. Helps avoid repetition and keeps the code clean and modular.

```js
async function fetchRequest(url, { method = 'GET', data, headers = {} } = {}) {
  ...
}
```

### 🔐 2. Retrieve Secret Token
Sends a GET request to the secret URL to fetch the required Authorization token. This token is then used to authenticate the main application POST request.

```js
const secretResponse = await fetchRequest(`${BASE_URL}/apply/secret`);
const token = secretResponse.result;
```

### 📤 3. Prepare Application Payload
Defines the JSON body of the POST request with required applicant fields. This simulates submitting real application data to the Mitimes API.

```js
const payload = {
            name: "Karan Gupta",
            email: "karngupta21@gmail.com",
            job_title: "Senior Full Stack Software Engineer",
            final_attempt: true,
            extra_information: {
                why_hire_me: "With 4+ years full-stack experience and leadership skills, I have a proven track record of delivering robust applications that enhance user experience and drive business growth. My expertise in modern web technologies, coupled with a strong foundation in DevOps, positions me to make significant contributions to Mitimes mission of transforming legal timekeeping with innovative technology, fostering a healthy, productive workplace.",
                technical_skills: [
                "JavaScript", "Node.js", "React", "TypeScript",
                "Docker", "CI/CD", "AWS", "PostgreSQL", "GitLab",
                "REST APIs", "Testing with Jest and Cypress"
                ],
                leadership_experience: "Experienced in mentoring, code reviews, and leading technical direction in agile teams.",
                communication: "Strong communicator bridging developers and product management to deliver user-first solutions.",
                work_style: "Proactive team player, quick learner of new technologies, thrives in fast-paced, cross-functional environments.",
                motivation: "Passionate about building clean, maintainable, and scalable software that improves productivity and wellbeing."
            }
};
```

### 📮 4. Submit Application Request
Posts the application data to the careers endpoint with the token in the Authorization header. Handles both the method and body in a clean, readable format.

```js
const applyResponse = await fetchRequest(`${BASE_URL}/apply`, {
  method: 'POST',
  headers: { Authorization: token },
  data: payload
});
```

### 📋 5. Output Results to Console
Prints the server's response to the terminal — including the status and body — so the developer (or reviewer) gets instant feedback on the submission outcome.

```js
console.log(`Status Code: ${applyResponse.status_code}`);
console.log(`Response Body:\n`, applyResponse);
```

### 🏆 6. Screenshot for the Final Output
![screenshot](https://private-user-images.githubusercontent.com/64781870/462810889-0a31ef57-d63d-4e7f-9a14-c37ef2779336.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE3MzcyMjksIm5iZiI6MTc1MTczNjkyOSwicGF0aCI6Ii82NDc4MTg3MC80NjI4MTA4ODktMGEzMWVmNTctZDYzZC00ZTdmLTlhMTQtYzM3ZWYyNzc5MzM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA1VDE3MzUyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNjZWE4MjIxZWQ1MDkyMTkzOTdiZDVhOGM5ZTI0ZDgyNzAxZTBkYWFhZTcxM2EwNjk4NzVkMDg1N2U2MjRjYzYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.eIvM2ImnUKu-JvYMntGGR5eB366HU9RLPVHLdvFoWdU)


### 🏁 Final Words
Thank you for reviewing my submission! I’m genuinely excited about the opportunity to work at Mitimes and contribute to your impactful work in legal tech and timekeeping automation.
