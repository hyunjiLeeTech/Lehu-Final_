package com.example.lehuapimongodb.services;

import com.example.lehuapimongodb.models.UserModel;
import com.example.lehuapimongodb.models.UserRepository;
import com.example.lehuapimongodb.models.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService

{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserModel addUser(UserModel user)
    {


        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        UserModel insertedUser = userRepository.insert(user);

        return insertedUser;
    }

    public List<UserModel> getUsers()
    {
        return userRepository.findAll();
    }

    public Optional<UserModel> getAUser(String id)
    {
        return userRepository.findById(id);
    }

    public List<UserModel> getAUserId(String email)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));
        List<UserModel> user = mongoTemplate.find(query, UserModel.class);

        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        UserModel foundUser = userRepository.findByEmail(email);

        String userEmail = foundUser.getEmail();
        String password = foundUser.getPassword();

        return new User(userEmail, password, new ArrayList<>());


    }


}