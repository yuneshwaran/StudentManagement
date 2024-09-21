
package com.management.StudentManagement.control;

import com.management.StudentManagement.model.Student;
import com.management.StudentManagement.service.StaffLoginService;
import com.management.StudentManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StaffLoginService loginService;


    //Get login pass
    @GetMapping("/login/{id}")
    public String  getDob(@PathVariable long id){
        return loginService.getFormattedDob(id);
    }

    // Get all students
    @GetMapping("/student")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    // Get student by id
    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    // Add a new student
    @PostMapping("/student")
    public void addStudent(@RequestBody Student student) {
        studentService.addStudent(student);
    }

    // Update a student
    @PutMapping("/student/{id}")
    public void updateStudent(@PathVariable int id, @RequestBody Student student) {
        studentService.updateStudent(student);
    }

    // Delete a student
    @DeleteMapping("/student/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
    }
}
