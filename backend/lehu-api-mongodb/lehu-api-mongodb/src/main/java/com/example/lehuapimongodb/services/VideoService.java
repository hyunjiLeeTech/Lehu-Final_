package com.example.lehuapimongodb.services;

import com.example.lehuapimongodb.models.Video;
import com.example.lehuapimongodb.models.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    private VideoRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Video> getVideos(){
        return repository.findAll();
    }

    public Optional<Video> getAVideo(String id) throws Exception{
        Optional<Video> video = repository.findById(id);

        if(!video.isPresent()){
            throw new Exception("Video with " + id + " is not found");
        }

        return video;
    }

    public List<Video> getMovieVideos(){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("1"));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getShowVideos(){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("2"));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getVideosWithTitle(String t){
        Query query = new Query();
        query.addCriteria(Criteria.where("title").regex("^.*"+t+".*$", "i"));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getMoviesWithTitle(String t){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("1")).addCriteria(Criteria.where("title").regex("^.*"+t+".*$", "i"));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getShowsWithTitle(String t){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("2")).addCriteria(Criteria.where("title").regex("^.*"+t+".*$", "i"));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getFeaturedMovies(String f){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("1")).addCriteria(Criteria.where("isFeatured").is(f));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public List<Video> getFeaturedShows(String f){
        Query query = new Query();
        query.addCriteria(Criteria.where("type").is("2")).addCriteria(Criteria.where("isFeatured").is(f));
        List<Video> videos = mongoTemplate.find(query, Video.class);
        return videos;
    }

    public void insertIntoVideos(Video video){
        repository.insert(video);
    }

    public Video editVideo(String id, Video newVideoData){
        //get the resource based on the id
        Optional<Video> video = repository.findById(id);



        //validation code to validate the id
        video.get().setTitle(newVideoData.getTitle());
        video.get().setPrice(newVideoData.getPrice());
        video.get().setDescription(newVideoData.getDescription());
        video.get().setType(newVideoData.getType());
        video.get().setSmallPoster(newVideoData.getSmallPoster());
        video.get().setBigPoster(newVideoData.getBigPoster());
        video.get().setRentFee(newVideoData.getRentFee());
        video.get().setBuyFee(newVideoData.getBuyFee());
        video.get().setIsFeatured(newVideoData.getIsFeatured());

        //update the found resource with the new data

        //commit the update by saving it
        Video updateVideo = repository.save(video.get());

        return updateVideo;
    }

    public void deleteAVideo(String id){
        repository.deleteById(id);
    }
}
