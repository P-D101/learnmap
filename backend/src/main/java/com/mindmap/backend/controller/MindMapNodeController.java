// NodeController.java
package com.mindmap.backend.controller;

import com.mindmap.backend.model.MindMapNode;
import com.mindmap.backend.repository.MindMapNodeRepository;
import org.springframework.web.bind.annotation.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import com.mindmap.backend.model.Position;
//import com.mindmap.backend.model.*;



import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/nodes")
@CrossOrigin(origins = "*")  // Allow frontend requests
public class MindMapNodeController {
    private MindMapNodeRepository nodeRepository;

    public MindMapNodeController(MindMapNodeRepository nodeRepository) {
        this.nodeRepository = nodeRepository;
    }

    @GetMapping
    public List<MindMapNode> getAllNodes() {
        return nodeRepository.findAll();
    }

    @PostMapping
    public MindMapNode createNode(@RequestBody MindMapNode node) {
        System.out.println("POST /nodes called with node: " + node);
        if (node.getId() == null || node.getId().isEmpty()) {
            node.setId(java.util.UUID.randomUUID().toString());//node.setId(null);  // Ensure ID is null for new nodes    
        }
        //if (node.getPosition() == null) {
             // If position is not provided, set a default random position on view port 
          // node.setPosition(new Position(100,100)); // Ensure position is set if not provide
        //}
    System.out.println("Saving node: " + node);

        return nodeRepository.save(node);
    }

    @GetMapping("/{id}")
    public Optional<MindMapNode> getNodeById(@PathVariable String id) {
        return nodeRepository.findById(id);
                //.map(ResponseEntity::ok)
                //.orElse(ResponseEntity.notFound().build());
    }
    

    @DeleteMapping("/{id}")
    public void deleteNode(@PathVariable String id) {
        nodeRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public MindMapNode updateNode(@PathVariable String id, @RequestBody MindMapNode updatedNode) {
        //return nodeRepository.save(updatedNode);  // Assumes front-end sends full node with same ID
        
        
        //new code to handle update
        Optional<MindMapNode> optionalNode = nodeRepository.findById(id);
        if (optionalNode.isPresent()) {
            MindMapNode existingNode = optionalNode.get();

            // Update fields (you can refactor this as needed)
            existingNode.setMainTopic(updatedNode.getMainTopic());
            existingNode.setPracticeDone(updatedNode.isPracticeDone());
            existingNode.setPastPapers(updatedNode.getPastPapers());
            existingNode.setDueInDays(updatedNode.getDueInDays());
            existingNode.setRelatedLinks(updatedNode.getRelatedLinks());
            existingNode.setColorTag(updatedNode.getColorTag());
            existingNode.setBlurbNotes(updatedNode.getBlurbNotes());
            existingNode.setDescription(updatedNode.getDescription());
            existingNode.setImageUrl(updatedNode.getImageUrl());
            existingNode.setDateCreated(updatedNode.getDateCreated());
            existingNode.setMindMapName(updatedNode.getMindMapName());

            //existingNode.setPosition(updatedNode.getPosition());

            return nodeRepository.save(existingNode);
        } else {
            throw new RuntimeException("Node with id " + id + " not found");
        }
    }
    }


