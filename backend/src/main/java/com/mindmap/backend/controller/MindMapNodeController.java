// NodeController.java
package com.mindmap.backend.controller;

import com.mindmap.backend.model.MindMapNode;
import com.mindmap.backend.repository.MindMapNodeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nodes")
public class MindMapNodeController {
    private final MindMapNodeRepository nodeRepository;

    public MindMapNodeController(MindMapNodeRepository nodeRepository) {
        this.nodeRepository = nodeRepository;
    }

    @GetMapping
    public List<MindMapNode> getAll() {
        return nodeRepository.findAll();
    }

    @PostMapping
    public MindMapNode create(@RequestBody MindMapNode node) {
        return nodeRepository.save(node);
    }
}
