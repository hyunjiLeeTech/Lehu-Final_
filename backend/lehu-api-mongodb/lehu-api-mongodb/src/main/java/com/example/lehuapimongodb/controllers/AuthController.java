package com.example.lehuapimongodb.controllers;

import com.example.lehuapimongodb.CustomizedResponse;
import com.example.lehuapimongodb.models.UserModel;
import com.example.lehuapimongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@CrossOrigin(origins="https://lehu-final.herokuapp.com/")
//@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/auth", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity login(@RequestBody UserModel user) {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            var userInfo = userService.getAUserId(user.getEmail());
            var response = new CustomizedResponse(0, "You login Successfully", userInfo);

            return new ResponseEntity( response, HttpStatus.OK);

        }
        catch (BadCredentialsException ex) {
            var response = new CustomizedResponse(1, "You username/password were entered incorrectly..", null);

            return new ResponseEntity( response, HttpStatus.UNAUTHORIZED);
        }
    }
}
