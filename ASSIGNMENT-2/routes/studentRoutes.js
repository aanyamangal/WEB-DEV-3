const express = require("express")
const router = express.Router();
let students = require("../data/students.js");

router.get("/", (req,res)=>{
    res.status(200).json(students)
});

router.get("/:id", (req,res) =>{
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if(!student){
        return res.status(404).json({
            message: "Student not found",
            success: false
        })
    }
    res.status(200).json({
        message: "Student Found",
        success: true,
        data: student
    })
});

router.post("/", (req,res)=>{
    const {id, name, age, course} = req.body;
    const student = {
        id,
        name,
        age,
        course
    };
    students.push(student);
    res.status(201).json({
        message: "Student Added",
        success: true,
        student: student
    });
});
router.put("/:id", (req,res)=> {
    const id = Number(req.params.id);
    const student = students.find( s => s.id === id);
    if(!student){
        return res.status(404).json({
            message: "Student not found",
            success: false
        })
    }

    student.name = req.body.name;
    student.age= req.body.age;
    student.course = req.body.course;

    res.status(200).json({
        message:"Student updated",
        success: true,
        student: student
    });
});
router.delete("/:id", (req,res)=>{
    const id = Number(req.params.id);
    const index = students.findIndex( s => s.id === id);
    if(index === -1){
        return res.status(404).json({
            message: "student not found",
            success : false
        })
    }
    const deletedStudent = students[index];
    students.splice(index, 1);
    res.status(200).json({
        success: true,
        message: "student deleted ",
        student: deletedStudent[0]
    });
});
module.exports = router;
