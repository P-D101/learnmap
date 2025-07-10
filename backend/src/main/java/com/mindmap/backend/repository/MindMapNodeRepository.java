// NodeRepository.java
package com.mindmap.backend.repository;

import com.mindmap.backend.model.MindMapNode;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface MindMapNodeRepository extends Neo4jRepository<MindMapNode, String> {}
