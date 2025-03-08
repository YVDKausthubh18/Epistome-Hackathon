const problems = [
    { id: 1, title: "Smart Dustbin", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdfiKjEvvTlRCKc17BqUE75uJOfVhAo_kZFg50jATq76NPOCA/viewform?usp=sharing", count: 0 },
    { id: 2, title: "AI-Based Attendance System", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdfiKjEvvTlRCKc17BqUE75uJOfVhAo_kZFg50jATq76NPOCA/viewform?usp=sharing", count: 0 },
    { id: 3, title: "Energy Efficient Street Lights", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdfiKjEvvTlRCKc17BqUE75uJOfVhAo_kZFg50jATq76NPOCA/viewform?usp=sharing", count: 0 }
];

function renderProblems() {
    const problemList = document.getElementById("problem-list");
    problemList.innerHTML = "";
    problems.forEach(problem => {
        const problemDiv = document.createElement("div");
        problemDiv.className = "problem-statement";
        problemDiv.innerHTML = `
            <strong>${problem.title}</strong> - Registrations: <span id="count-${problem.id}">${problem.count}</span>
            <a class="btn" href="${problem.formLink}" target="_blank" onclick="increaseCount(${problem.id})">Click Here</a>
        `;
        problemList.appendChild(problemDiv);
    });
}

function increaseCount(problemId) {
    const problem = problems.find(p => p.id === problemId);
    if (problem) {
        problem.count++;
        document.getElementById(`count-${problemId}`).textContent = problem.count;
    }
}

window.onload = renderProblems;
