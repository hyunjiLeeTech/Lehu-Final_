package com.example.lehuapimongodb;

import java.util.List;

public class CustomizedResponse<T> {
    private Integer errCode;
    private String message;
    private List<T> body;

    public CustomizedResponse(){

    }

    public CustomizedResponse(Integer errCode, String message, List<T> body) {
        this.errCode = errCode;
        this.message = message;
        this.body = body;
    }

    public Integer getErrCode() {
        return errCode;
    }

    public void setErrCode(Integer errCode) {
        this.errCode = errCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<T> getBody() {
        return body;
    }

    public void setBody(List<T> body) {
        this.body = body;
    }
}
