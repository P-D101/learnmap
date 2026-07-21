package com.mindmap.backend.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Node;
//import org.springframework.data.neo4j.core.schema.Relationship;



@Node
public class Edge {

    @Id @GeneratedValue 
    private Long id;

    private String sourceNodeId;
    private String targetNodeId;
    private String name;

    // Constructors, getters, setters

    public Edge() {
    }
    public Edge(String sourceNodeId, String targetNodeId, String name) {
        this.sourceNodeId = sourceNodeId;
        this.targetNodeId = targetNodeId;
        this.name = name;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getSourceNodeId() {
        return sourceNodeId;
    }
    public void setSourceNodeId(String sourceNodeId) {
        this.sourceNodeId = sourceNodeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTargetNodeId() {
        return targetNodeId;
    }
    public void setTargetNodeId(String targetNodeId) {
        this.targetNodeId = targetNodeId;
    }
    
}
