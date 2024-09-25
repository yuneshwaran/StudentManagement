package com.management.StudentManagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Date;

@Entity
@Component
@Scope("prototype")
public class Staff {

    @Id
    private int id;
    private Date dob;
    private String password;


    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return id;
    }

    
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public Date getDob() {
        return dob;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
