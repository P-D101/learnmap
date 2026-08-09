# Interactive Mind-Mapping Web Application

> **Project Status:** Experimental 

> **Note:** This repository is purely experimental and was intended to be a POC. The code is currently untested and may require environment updates or debugging to run successfully locally.

 A full-stack, graph-based study tool designed to combine visual mind maps, note-taking, and spaced repetition. Users can create, connect, and manage knowledge nodes visually on an interactive canvas.

> **Notice:** The commit history for this repository was intentionally reset to start fresh for security and repository cleanup purposes. All previous development history has been consolidated into the initial commit.



## Tech Stack

* **Frontend:** React, React Flow
* **Backend:** Java, Spring Boot, REST APIs
* **Database:** Neo4j (Spring Data Neo4j)

## Architecture & Features

* **Frontend Canvas:** Features custom node rendering, drag-and-drop mechanics, and node detail cards supporting topics, notes, links, and due dates.
* **Backend API:** Structured with a clean Controller-Service-Repository pattern, exposing REST endpoints (`/nodes`, `/nodes/{id}`) for CRUD operations.
* **Graph Integration:** Modeled with Spring Data Neo4j to manage complex relationship data structures.

## How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone [url]
   ```
2. **Database:** 
   Start local Neo4j via Docker. Ensure you provide your database credentials via local environment variables (e.g., `NEO4J_PASSWORD`), as `application.properties` uses placeholders for security.
   
4. **Backend:** 
   Navigate to the Spring Boot directory and run:
   ```bash
   ./mvnw spring-boot:run
   ```
5. **Frontend:** 
   Navigate to the React directory and run:
   ```bash
   npm install
   npm start
   ```
