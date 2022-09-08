const { findByIdAndRemove } = require("../models/Student.model");
const Student = require("../models/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find({}).then((data) => {
      res.json(data);
    });
    // код вывода студентов
  },

  postStudents: (req, res) => {
    const { name, phone, age } = req.body;
    Student.create({
      name,
      phone,
      age,
    }).then(() => {
      res.json("Student added");
    });
    // код создания студентов
  },

  deleteStudentsId: (req, res) => {
    console.log(req.params.id);
    Student.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Student deleted");
      })
      .catch((e) => res.json(e.message));
  },

  patchStudentsId: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, { name: req.body.name }).then(
      (data) => {
        res.json(data);
      }
    );
  },
};
