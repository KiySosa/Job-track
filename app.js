const jobs = [];

const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
let editingIndex = null;

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
        <button class="edit-btn">Edit</button>
    `;

    const deleteButton = jobCard.querySelector(".delete-btn");
    const editButton = jobCard.querySelector(".edit-btn");

    applicationsList.appendChild(jobCard);

deleteButton.addEventListener("click", function () {
    jobs.splice(index, 1);


    localStorage.setItem("jobs", JSON.stringify(jobs));

    renderJobs();
});
editButton.addEventListener("click", function () {
        editingIndex = index;
        companyInput.value = job.company; 
        positionInput.value = job.position;
        statusInput.value = job.status;
        notesInput.value = job.notes;
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

    if (editingIndex !== null) {
        jobs[editingIndex] = job;
        editingIndex = null;
    } else {
        jobs.push(job);
    }

    localStorage.setItem("jobs", JSON.stringify(jobs));

    renderJobs();

    console.log(jobs);
});

renderJobs();