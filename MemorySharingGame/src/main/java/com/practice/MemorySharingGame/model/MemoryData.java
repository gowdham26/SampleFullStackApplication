package com.practice.MemorySharingGame.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class MemoryData {
    @Id
    private long id;
    private long sharedFromNumber;
    private long sharedToNumber;
    private String textContent;
    private String urlLink;
    private String guessPerson;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getSharedFromNumber() {
        return sharedFromNumber;
    }

    public void setSharedFromNumber(long sharedFromNumber) {
        this.sharedFromNumber = sharedFromNumber;
    }

    public long getSharedToNumber() {
        return sharedToNumber;
    }

    public void setSharedToNumber(long sharedToNumber) {
        this.sharedToNumber = sharedToNumber;
    }

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public String getUrlLink() {
        return urlLink;
    }

    public void setUrlLink(String urlLink) {
        this.urlLink = urlLink;
    }

    public String getGuessPerson() {
        return guessPerson;
    }

    public void setGuessPerson(String guessPerson) {
        this.guessPerson = guessPerson;
    }
}
