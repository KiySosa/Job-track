const jobs = [];

const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

const jobForm = document.querySelector("#job-form");
const companyInput = document.querySelector("#company");
const positionInput = document.querySelector("#position");
const statusInput = document.querySelector("#status");
const notesInput = document.querySelector("#notes");
const applicationsList = document.querySelector("#applications-list");

savedJobs.forEach(function (job) {
    jobs.push(job);
});

function displayJob(job, index) {
    const jobCard = document.createElement("div");

    jobCard.innerHTML = `
        <h3>${job.company}</h3>
        <p>${job.position}</p>
        <p>${job.status}</p>
        <p>${job.notes}</p>
        <button class="delete-btn">Delete</button>
    `;

    const deleteButton = jobCard.querySelector(".delete-btn");

    applicationsList.appendChild(jobCard);

deleteButton.addEventListener("click", function () {
    jobs.splice(index, 1);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    renderJobs();
});
}

function renderJobs() {
    applicationsList.innerHTML = "";

    jobs.forEach(function (job, index) {
        displayJob(job, index);
    });
}

jobForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const job = {
        company: companyInput.value,
        position: positionInput.value,
        status: statusInput.value,
        notes: notesInput.value
    };

    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    renderJobs();

    console.log(jobs);
});

renderJobs();