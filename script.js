/* =========================================
   PEER MENTOR SUPPORT PORTAL - SCRIPT.JS
   ========================================= */

// ===== LOGIN FUNCTION =====
function loginUser() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user && pass) {
    localStorage.setItem("user", user);
    alert(`Welcome ${user}! 🎉`);
    window.location.href = "home.html";
  } else {
    alert("⚠️ Please enter both username and password!");
  }
}

// ===== LOGOUT FUNCTION =====
function logoutUser() {
  localStorage.removeItem("user");
  alert("You have successfully logged out!");
  window.location.href = "index.html";
}

// ===== AUTO DISPLAY USER NAME ON HOME =====
window.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");
  const welcomeText = document.getElementById("welcomeUser");
  if (user && welcomeText) {
    welcomeText.textContent = `Welcome, ${user}! 👋`;
  }
});

// ===== SHOW MENTOR INFORMATION =====
function showMentorInfo(name) {
  const mentorDiv = document.getElementById("mentor-info");
  let content = "";

  if (name === "Riya") {
    content = `
      <h2>👩‍💻 Riya – Web Development Mentor</h2>
      <p>Riya guides students through <b>HTML, CSS, JavaScript, and React</b> with interactive, hands-on practice sessions. 
      She helps you build strong fundamentals and create your own projects.</p>
      <a href="https://roadmap.sh/frontend" class="glow-btn" target="_blank">Frontend Roadmap</a>
      <a href="https://roadmap.sh/react" class="glow-btn" target="_blank">React Roadmap</a>
      <a href="https://developer.mozilla.org/en-US/docs/Learn" class="glow-btn" target="_blank">MDN Web Docs</a>
    `;
  } else if (name === "Arjun") {
    content = `
      <h2>👨‍💻 Arjun – Java & DSA Mentor</h2>
      <p>Arjun focuses on <b>Core Java, OOP concepts, and Data Structures & Algorithms</b> for placement readiness. 
      He provides problem-solving strategies and project-based learning guidance.</p>
      <a href="https://roadmap.sh/java" class="glow-btn" target="_blank">Java Roadmap</a>
      <a href="https://www.geeksforgeeks.org/data-structures/" class="glow-btn" target="_blank">DSA Topics</a>
      <a href="https://leetcode.com/explore/" class="glow-btn" target="_blank">LeetCode Practice</a>
    `;
  } else if (name === "Sneha") {
    content = `
      <h2>🤖 Sneha – Machine Learning Mentor</h2>
      <p>Sneha specializes in <b>Python, Data Analysis, Machine Learning, and AI tools</b>. 
      She helps students create ML models and provides real-world project ideas.</p>
      <a href="https://roadmap.sh/ai" class="glow-btn" target="_blank">AI Roadmap</a>
      <a href="https://www.kaggle.com/learn" class="glow-btn" target="_blank">Kaggle Learning</a>
      <a href="https://www.tensorflow.org/resources/learn-ml" class="glow-btn" target="_blank">TensorFlow Learning</a>
    `;
  } else if (name === "Rahul") {
    content = `
      <h2>🧠 Rahul – Cybersecurity Mentor</h2>
      <p>Rahul helps students understand <b>network security, ethical hacking, and system defense techniques</b>. 
      His roadmap includes hands-on labs and certifications guidance.</p>
      <a href="https://roadmap.sh/cyber-security" class="glow-btn" target="_blank">Cybersecurity Roadmap</a>
      <a href="https://tryhackme.com/" class="glow-btn" target="_blank">TryHackMe Labs</a>
      <a href="https://www.hackthebox.com/" class="glow-btn" target="_blank">HackTheBox Challenges</a>
    `;
  } else if (name === "Priya") {
    content = `
      <h2>📊 Priya – Data Science Mentor</h2>
      <p>Priya provides guidance on <b>Data Visualization, Python Libraries, and Statistics for Data Science</b>. 
      She helps students transition into industry-ready analysts.</p>
      <a href="https://roadmap.sh/data-science" class="glow-btn" target="_blank">Data Science Roadmap</a>
      <a href="https://www.kaggle.com/datasets" class="glow-btn" target="_blank">Kaggle Datasets</a>
      <a href="https://www.coursera.org/browse/data-science" class="glow-btn" target="_blank">Coursera Courses</a>
    `;
  } else {
    content = `<p>Select a mentor to view their roadmap and resources.</p>`;
  }

  mentorDiv.innerHTML = content;
  mentorDiv.classList.add("fade-up");
}

// ===== RESOURCE ENHANCEMENT =====
function showResources() {
  const resourceDiv = document.getElementById("resources-section");
  resourceDiv.innerHTML = `
    <div class="card fade-up">
      <h3>💻 Coding Practice Platforms</h3>
      <p>Enhance your coding skills through competitive programming and challenges.</p>
      <button class="glow-btn" onclick="window.open('https://leetcode.com', '_blank')">LeetCode</button>
      <button class="glow-btn" onclick="window.open('https://www.hackerrank.com', '_blank')">HackerRank</button>
      <button class="glow-btn" onclick="window.open('https://www.codewars.com', '_blank')">CodeWars</button>
    </div>

    <div class="card fade-up">
      <h3>📘 Placement & Career Prep</h3>
      <p>Prepare for interviews and improve your soft skills with top resources.</p>
      <button class="glow-btn" onclick="window.open('https://interviewbit.com', '_blank')">InterviewBit</button>
      <button class="glow-btn" onclick="window.open('https://www.linkedin.com/learning/', '_blank')">LinkedIn Learning</button>
      <button class="glow-btn" onclick="window.open('https://www.geeksforgeeks.org/placement-preparation/', '_blank')">Placement Guide</button>
    </div>

    <div class="card fade-up">
      <h3>🌐 Roadmaps & Career Paths</h3>
      <p>Explore structured paths for different tech careers and subjects.</p>
      <button class="glow-btn" onclick="window.open('https://roadmap.sh/', '_blank')">Developer Roadmaps</button>
      <button class="glow-btn" onclick="window.open('https://github.com/ossu', '_blank')">Open Source University</button>
      <button class="glow-btn" onclick="window.open('https://www.freecodecamp.org/learn', '_blank')">FreeCodeCamp</button>
    </div>
  `;
}

// ===== SMOOTH SCROLL EFFECT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
