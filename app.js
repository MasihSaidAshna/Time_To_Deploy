const app = require("express")(); 
const fs = require('fs');
const PORT = 8080;

const filePath = 'index.html';
const fileContent = fs.readFileSync(filePath, 'utf8');

app.get('/', (req, res) => {
    res.send(fileContent);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:8080`);
});
