const express = require('express');
const app = express();
const port = 3000;
const qpdf =  require("node-qpdf2");



const upload = require('./upload');

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file.filename);
  const pdf = {
    input: "uploads/" + req.file.filename,
    output: "uploads/" + "enc-" + req.file.filename,
    password: "1234",
  }
  qpdf.encrypt(pdf)
  res.json({ message: 'File uploaded successfully!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
