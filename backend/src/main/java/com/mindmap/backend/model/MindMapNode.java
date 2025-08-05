// Node.java
package com.mindmap.backend.model;

import java.util.UUID;
//import com.mindmap.backend.model.Position;

//import org.springframework.data.neo4j.core.schema.CompositeProperty;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
//import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
@Node("Node")
public class MindMapNode {

    @Id
    private String id;  // You can keep String and generate UUID manually
    

    private String mainTopic;
    private boolean practiceDone;
    private String pastPapers;
    private int dueInDays;
    private String relatedLinks;
    private String colorTag;
    private String blurbNotes;

    private String description;
    private String imageUrl;

    private LocalDate dateCreated;
    private String mindMapName;
    private double x;
    private double y;
    //@CompositeProperty
    //private Position position; 

    public MindMapNode() {
        this.id = UUID.randomUUID().toString();
    }

    public MindMapNode(String id, String mainTopic, boolean practiceDone, String pastPapers, int dueInDays,
                       String relatedLinks, String colorTag, String blurbNotes,
                       String description, String imageUrl, LocalDate dateCreated,
                       String mindMapName) {
        this.id = id;
        //this.id = UUID.randomUUID().toString();
        //this.position = position;

        this.x = x;
        this.y = y;        
        this.mainTopic = mainTopic;
        this.practiceDone = practiceDone;
        this.pastPapers = pastPapers;
        this.dueInDays = dueInDays;
        this.relatedLinks = relatedLinks;
        this.colorTag = colorTag;
        this.blurbNotes = blurbNotes;
        this.description = description;
        this.imageUrl = imageUrl;
        this.dateCreated = dateCreated;
        this.mindMapName = mindMapName;
    }

    // Getters and setters here...

    /*public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }*/

    public double getX() {
        return x;
    }
    public void setX(double x) {
        this.x = x;
    }
    public double getY() {
        return y;
    }
    public void setY(double y) {
        this.y = y;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMainTopic() {
        return mainTopic;
    }

    public void setMainTopic(String mainTopic) {
        this.mainTopic = mainTopic;
    }

    public boolean isPracticeDone() {
        return practiceDone;
    }

    public void setPracticeDone(boolean practiceDone) {
        this.practiceDone = practiceDone;
    }

    public String getPastPapers() {
        return pastPapers;
    }

    public void setPastPapers(String pastPapers) {
        this.pastPapers = pastPapers;
    }

    public int getDueInDays() {
        return dueInDays;
    }

    public void setDueInDays(int dueInDays) {
        this.dueInDays = dueInDays;
    }

    public String getRelatedLinks() {
        return relatedLinks;
    }

    public void setRelatedLinks(String relatedLinks) {
        this.relatedLinks = relatedLinks;
    }

    public String getColorTag() {
        return colorTag;
    }

    public void setColorTag(String colorTag) {
        this.colorTag = colorTag;
    }

    public String getBlurbNotes() {
        return blurbNotes;
    }

    public void setBlurbNotes(String blurbNotes) {
        this.blurbNotes = blurbNotes;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getMindMapName() {
        return mindMapName;
    }

    public void setMindMapName(String mindMapName) {
        this.mindMapName = mindMapName;
    }
}


