package com.mindmap.backend.controller;
import java.util.List;

import org.springframework.web.bind.annotation.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import java.util.List;
import com.mindmap.backend.repository.EdgeRepository;
import com.mindmap.backend.model.Edge;
import java.util.Optional;


@RestController

@RequestMapping("/edges")
public class EdgeController {

    private final EdgeRepository edgeRepository;

    public EdgeController(EdgeRepository edgeRepository) {
        this.edgeRepository = edgeRepository;
    }

    @PostMapping
    public Edge createEdge(@RequestBody Edge edge) {
        return edgeRepository.save(edge);
    }

    // Get all edges
    @GetMapping
    public List<Edge> getAllEdges() {
        return edgeRepository.findAll();
    }

    // Get edge by ID
    @GetMapping("/{id}")
    public Optional<Edge> getEdgeById(@PathVariable Long id) {
        return edgeRepository.findById(id);
    }

    // Update edge (e.g., name)
    @PutMapping("/{id}")
    public Edge updateEdge(@PathVariable Long id, @RequestBody Edge edgeDetails) {
        Edge edge = edgeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Edge not found with id " + id));
        edge.setName(edgeDetails.getName());
        // Update other fields as needed
        return edgeRepository.save(edge);
    }

    // Delete edge by ID
    @DeleteMapping("/{id}")
    public void deleteEdge(@PathVariable Long id) {
        edgeRepository.deleteById(id);
    }
}
