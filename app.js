const jobs = [];

const jobForm = document.querySelector("#job-form");
const companyInput = document.querySelector("#company");
const positionInput = document.querySelector("#position");
const statusInput = document.querySelector("#status");
const notesInput = document.querySelector("#notes");
const applicationsList = document.querySelector("#applications-list");

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

    renderJobs(jobs);

    console.log(jobs);
});