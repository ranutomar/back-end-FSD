const form = document.getElementById("requestForm");
const container = document.getElementById("requestsContainer");


// GET all requests
async function getRequests() {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    container.innerHTML = "";

    requests.forEach(request => {

        const div = document.createElement("div");

        div.className = "request";

        div.innerHTML = `
            <h3>${request.studentName}</h3>
            <p><strong>Email:</strong> ${request.email}</p>
            <p><strong>Category:</strong> ${request.category}</p>
            <p><strong>Description:</strong> ${request.description}</p>
            <p><strong>Priority:</strong> ${request.priority}</p>

            <button onclick="editRequest(${request.id})">
                Edit
            </button>

            <button class="delete"
                onclick="deleteRequest(${request.id})">
                Delete
            </button>
        `;

        container.appendChild(div);
    });
}


// POST new request
form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const requestData = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    await fetch("/api/requests", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(requestData)
    });

    form.reset();

    getRequests();
});


// DELETE request
async function deleteRequest(id) {

    await fetch(`/api/requests/${id}`, {
        method: "DELETE"
    });

    getRequests();
}


// PUT / update request
async function editRequest(id) {

    const studentName = prompt("Enter student name:");
    const email = prompt("Enter email:");
    const category = prompt("Enter category:");
    const description = prompt("Enter problem description:");
    const priority = prompt("Enter priority:");

    if (
        !studentName ||
        !email ||
        !category ||
        !description ||
        !priority
    ) {
        return;
    }

    await fetch(`/api/requests/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            studentName,
            email,
            category,
            description,
            priority
        })
    });

    getRequests();
}


// Load requests when page opens
getRequests();