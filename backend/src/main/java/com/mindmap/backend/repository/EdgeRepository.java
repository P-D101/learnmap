package com.mindmap.backend.repository;
import com.mindmap.backend.model.Edge;
import org.springframework.data.neo4j.repository.Neo4jRepository;
//import org.springframework.stereotype.Repository;

public interface EdgeRepository extends Neo4jRepository<Edge, Long> {
    // Basic CRUD is inherited
}
