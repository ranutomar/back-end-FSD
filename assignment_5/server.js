const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, "requests.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/requests", (req, res) => {
    const data = fs.readFileSync(filePath, "utf8");
    res.json(JSON.parse(data));
});

app.get("/api/requests/:id", (req, res) => {
    const requests = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const request = requests.find(
        r => r.id === Number(req.params.id)
    );

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

app.post("/api/requests", (req, res) => {
    const requests = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);

    fs.writeFileSync(
        filePath,
        JSON.stringify(requests, null, 2)
    );

    res.status(201).json(newRequest);
});

app.put("/api/requests/:id", (req, res) => {
    const requests = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const index = requests.findIndex(
        r => r.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[index] = {
        ...requests[index],
        ...req.body
    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(requests, null, 2)
    );

    res.json(requests[index]);
});

app.delete("/api/requests/:id", (req, res) => {
    const requests = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const filtered = requests.filter(
        r => r.id !== Number(req.params.id)
    );

    fs.writeFileSync(
        filePath,
        JSON.stringify(filtered, null, 2)
    );

    res.json({ message: "Request deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});