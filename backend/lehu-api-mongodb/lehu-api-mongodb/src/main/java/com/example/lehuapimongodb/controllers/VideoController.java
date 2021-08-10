package com.example.lehuapimongodb.controllers;

import com.example.lehuapimongodb.CustomizedResponse;
import com.example.lehuapimongodb.models.Video;
import com.example.lehuapimongodb.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//@CrossOrigin(origins="https://lehu-final.herokuapp.com/")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class VideoController {
    @Autowired
    private VideoService service;

    @GetMapping("/videos")
    public ResponseEntity getVideos(){
        var customizedResponse = new CustomizedResponse(0, "A list of videos", service.getVideos());

        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/{id}")
    public ResponseEntity getAVideo(@PathVariable("id") String id){
        CustomizedResponse customizedResponse = null;

        try{
            customizedResponse = new CustomizedResponse(0, "Movie with id " + id, Collections.singletonList(service.getAVideo(id)));
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(customizedResponse, HttpStatus.OK);

    }

    @GetMapping("/videos/movies")
    public ResponseEntity getVideosMovie(){
        var customizedResponse = new CustomizedResponse(0, " A list of movies", service.getMovieVideos());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }


    @GetMapping("/videos/shows")
    public ResponseEntity getVideosShow(){
        var customizedResponse = new CustomizedResponse(0, " A list of shows", service.getShowVideos());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/title")
    public ResponseEntity getVideosByTitle(@RequestParam(value="title") String t){
        var customizedResponse = new CustomizedResponse(0, " A list of videos with string", service.getVideosWithTitle(t));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/movies/title")
    public ResponseEntity getMoviesByTitle(@RequestParam(value="title") String t){
        var customizedResponse = new CustomizedResponse(0, " A list of movies with string", service.getMoviesWithTitle(t));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/shows/title")
    public ResponseEntity getShowsByTitle(@RequestParam(value="title") String t){
        var customizedResponse = new CustomizedResponse(0, " A list of shows with string", service.getShowsWithTitle(t));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/movies/isFeatured")
    public ResponseEntity getFeaturedMovies(@RequestParam(value="isFeatured") String f){
        var customizedResponse = new CustomizedResponse(0, " A list of featured movies", service.getFeaturedMovies(f));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @GetMapping("/videos/shows/isFeatured")
    public ResponseEntity getFeaturedShows(@RequestParam(value="isFeatured") String f){
        var customizedResponse = new CustomizedResponse(0, " A list of featured shows", service.getFeaturedShows(f));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @PostMapping(value = "/videos", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity addMovie(@Valid @RequestBody Video video){
        CustomizedResponse customizedResponse = null;

        try{
            service.insertIntoVideos(video);
            customizedResponse = new CustomizedResponse(0, " Video is added successfully", null);
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @PutMapping(value="/videos/{id}", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity editMovie(@PathVariable("id") String id, @Valid @RequestBody Video newVideo){
        CustomizedResponse customizedResponse = null;

        try{
            customizedResponse = new CustomizedResponse(0, " Video with ID: " + id + " was updated successfully", Collections.singletonList(service.editVideo(id, newVideo)));
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, e.getMessage(), null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @DeleteMapping("/videos/{id}")
    public ResponseEntity deleteAMovie(@PathVariable("id") String id){
        CustomizedResponse customizedResponse = null;

        try{
            Optional<Video> video = service.getAVideo(id);
            service.deleteAVideo(id);
            customizedResponse = new CustomizedResponse(0, " Video with ID: " + id + " was deleted successfully", null);
        }catch(Exception e){
            customizedResponse = new CustomizedResponse(1, "Video with Id: " + id + " is not found on the database", null);

            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }


        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public CustomizedResponse handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        CustomizedResponse customizedResponse = new CustomizedResponse(1, "At least one field missing", null);

        return customizedResponse;
    }
}
