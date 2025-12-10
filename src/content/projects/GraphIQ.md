---
title: 'GraphIQ: Agentic AI Knowledge Graph'
description: GraphIQ is an agentic AI system that ingests documents, constructs knowledge graphs, and enables context-aware question answering using both vector search and structured graph reasoning.
publishDate: 'Dec 25 2025'
isFeatured: True
---

**Project Overview:**
GraphIQ is an agentic AI platform designed to extract and structure knowledge from unstructured documents. It ingests PDFs or text files, breaks them into meaningful chunks, summarizes content, extracts entities and relationships, and stores the information in a Neo4j knowledge graph. The system supports context-aware question answering via vector search and structured graph reasoning, exposing APIs for interactive exploration and chat-based interactions.

**Project source code**: [https://github.com/Risdorn/GraphIQ](https://github.com/Risdorn/GraphIQ)

## Objectives

1. Build an AI system capable of transforming unstructured documents into a structured knowledge graph.
2. Enable context-aware question answering using both vector embeddings and graph reasoning.
3. Provide a seamless API interface for exploration, visualization, and chatbot interaction.

## Features

1. **Document Ingestion and Summarization**:

    - PDFs and text files are automatically parsed, chunked, and summarized.
    - Extracted entities and relationships form the backbone of the knowledge graph.

2. **Graph-Based Knowledge Representation**:

    - Neo4j stores structured relationships between entities for efficient querying.
    - Enables complex graph-based reasoning for contextual responses.

3. **Vector Search and AI Agents**:

    - Vector embeddings allow semantic search across documents.
    - Agentic workflows combine Openrouter and Gemini LLMs for intelligent query handling.

4. **Interactive Chat and Graph Exploration**:

    - Frontend components include a chatbot interface and graph visualization pane.
    - Users can query the knowledge graph naturally and visualize relationships dynamically.

5. **API Integration**:

    - FastAPI backend exposes endpoints for both chat and graph queries.
    - Supports integration with external applications and services.

## Technology Stack

- **Frontend**: React (TypeScript), PNPM, custom components for chat and graph visualization
- **Backend**: FastAPI, Python
- **Database**: Neo4j (GraphDB), FAISS (VectorDB)
- **AI Integration**: Openrouter LLMs, Gemini AI for embeddings and generation
- **Utilities**: Pydantic schemas, agent workflows, context chunking, and prompts

## Outcome

GraphIQ enables organizations to transform unstructured data into actionable knowledge, providing a powerful tool for document understanding, reasoning, and interactive exploration. By combining vector search with graph-based reasoning, it offers precise, context-aware answers, bridging the gap between raw data and human-like understanding.
