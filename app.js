const jobs = [];


const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
const jobForm = document.querySelector("#job-form");
const companyInput = document.querySelector("#company");
const positionInput = document.querySelector("#position");
const statusInput = document.querySelector("#status");
const notesInput = document.querySelector("#notes");
const applicationsList = document.querySelector("#applications-list");


if (savedJobs) {
    savedJobs.forEach(function (job) {
        jobs.push(job);
    });
}


function displayJob(job) {
    const jobCard = document.createElement("div");

    jobCard.innerHTML = `
        <h3>${job.company}</h3>
        <p>${job.position}</p>
        <p>${job.status}</p>
        <p>${job.notes}</p>
    `;

    applicationsList.appendChild(jobCard);
}

function renderJobs() {
    applicationsList.innerHTML = "";

    jobs.forEach(function (job) {
        displayJob(job);
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

    renderJobs(jobs);

    console.log(jobs);
});