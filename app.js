const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ status: "online", proyecto: "Taller DevOps USM" });
});

// Provocamos Code Smells intencionales para el Quality Gate de SonarQube
function smells() {
    let a = 1; let b = 2; let c = 3;
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});