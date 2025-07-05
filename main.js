const BASE_URL = `https://au.mitimes.com/careers`

/**
 * Utility to perform HTTP requests using native fetch
 * Supports GET and POST with optional data and headers
 */
const fetchRequest = async (url, { method = 'GET', data = null, headers = {} } = {}) => {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);

    return response.json();
}

/**
 * Main async function to execute the assessment logic
 */
(async () => {
    try {

        // STEP 1: Fetch the secret authorization token
        const secretResponse = await fetchRequest(`${BASE_URL}/apply/secret`);
        const token = secretResponse.result;

        if (!token) {
            throw new Error('Authorization token not received.');
        }

        // STEP 2: Construct the payload
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

        // STEP 3: Send the application POST request
        const applyResponse = await fetchRequest(`${BASE_URL}/apply`, {
            method: 'POST',
            headers: { Authorization: token },
            data: payload
        });

        // STEP 4: Log results
        console.log(`Status Code: ${applyResponse.status_code}`);
        console.log(`Response Body:\n`, applyResponse);
    } 
    
    catch (error) {
        console.error('Error:', error.message);
    }
})();
