// Node.java
package com.mindmap.backend.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("Node")
public class MindMapNode {
    @Id
    private String id;
    private String label;

    public MindMapNode() {}
    public MindMapNode(String id, String label) {
        this.id = id;
        this.label = label;
    }
    // getters/setters

public String getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setLabel(String label) {
        this.label = label;
    }

}
