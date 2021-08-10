package com.example.lehuapimongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Document("videos")
public class Video {
    @Id
    private String id;

    @NotBlank(message="Title is mandatory")
    private String title;

    @NotBlank(message="Price is mandatory")
    private String price;

    @NotBlank(message="Description is mandatory")
    private String description;

    @NotBlank(message="Type is mandatory")
    private String type;

    @NotBlank(message="Small Poster is mandatory")
    private String smallPoster;

    @NotBlank(message="Big Poster is mandatory")
    private String bigPoster;

    @NotBlank(message="Rent fee is mandatory")
    private String rentFee;

    @NotBlank(message="Buy fee is mandatory")
    private String buyFee;

    @NotBlank(message="IsFeatured is mandatory")
    private String isFeatured;

    Video(){}

    public Video(String id, String title, String price, String description, String type, String smallPoster, String bigPoster, String rentFee, String buyFee, String isFeatured) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.type = type;
        this.smallPoster = smallPoster;
        this.bigPoster = bigPoster;
        this.rentFee = rentFee;
        this.buyFee = buyFee;
        this.isFeatured = isFeatured;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSmallPoster() {
        return smallPoster;
    }

    public void setSmallPoster(String smallPoster) {
        this.smallPoster = smallPoster;
    }

    public String getBigPoster() {
        return bigPoster;
    }

    public void setBigPoster(String bigPoster) {
        this.bigPoster = bigPoster;
    }

    public String getRentFee() {
        return rentFee;
    }

    public void setRentFee(String rentFee) {
        this.rentFee = rentFee;
    }

    public String getBuyFee() {
        return buyFee;
    }

    public void setBuyFee(String buyFee) {
        this.buyFee = buyFee;
    }

    public String getIsFeatured() {
        return isFeatured;
    }

    public void setIsFeatured(String isFeatured) {
        this.isFeatured = isFeatured;
    }
}
