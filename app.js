const jobs = [];
const jobForm = document.querySelector("#job-form");

const companyInput = document.querySelector("#company");

const positionInput = document.querySelector("#position");

const statusInput = document.querySelector("#status");

const notesInput = document.querySelector("#notes");

jobForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(companyInput.value);
    
    const job = {
    company: companyInput.value,
    position: positionInput.value,
    status: statusInput.value,
    notes: notesInput.value,
};


jobs.push(job);
console.log(jobs);
});