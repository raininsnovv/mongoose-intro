const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(require("./routes/students.route"));

mongoose
  .connect(
    "mongodb+srv://raininsnovv:Nukaktebeskazat_1@cluster0.muvlnn7.mongodb.net/test",
    {}
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
