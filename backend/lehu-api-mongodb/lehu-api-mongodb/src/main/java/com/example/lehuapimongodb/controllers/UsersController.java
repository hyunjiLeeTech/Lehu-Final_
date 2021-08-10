package com.example.lehuapimongodb.controllers;

import com.example.lehuapimongodb.CustomizedResponse;
import com.example.lehuapimongodb.models.UserModel;
import com.example.lehuapimongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins="https://lehu-final.herokuapp.com/")
//@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class UsersController

{

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity getUsers()
    {
        CustomizedResponse customizedResponse = null;

        try{
            customizedResponse = new CustomizedResponse(0, " A list of all users ", userService.getUsers());
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity getAUsers(@PathVariable("id") String id)
    {
        CustomizedResponse customizedResponse = null;

        try{
            customizedResponse = new CustomizedResponse(0, " User with id  : " + id, Collections.singletonList(userService.getAUser(id)));
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(customizedResponse, HttpStatus.OK);

    }

    @PostMapping(value = "/users", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity createUsers(@Valid @RequestBody UserModel user)
    {
        CustomizedResponse customizedResponse = null;

        if(user.getDob() == null || user.getGender() == null || user.getPassword() == null || user.getFirstName() == null || user.getLastName() == null || user.getEmail() == null){
            customizedResponse = new CustomizedResponse(1, "At least one field missing", null);
            return new ResponseEntity(customizedResponse, HttpStatus.BAD_REQUEST);
        }

        if(!(user.getGender().equals("Female") || user.getGender().equals("Male") ||user.getGender().equals("Prefer not to say"))){
            customizedResponse = new CustomizedResponse(1, "Invalid gender type", null);
            return new ResponseEntity(customizedResponse, HttpStatus.BAD_REQUEST);
        }

        try{
            customizedResponse = new CustomizedResponse(0, " User created successfully", Collections.singletonList(userService.addUser(user)));
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }


        return new ResponseEntity(customizedResponse, HttpStatus.OK);


    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public CustomizedResponse handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        CustomizedResponse customizedResponse = new CustomizedResponse(1, "At least one field missing or invalid", null);

        return customizedResponse;
    }
}