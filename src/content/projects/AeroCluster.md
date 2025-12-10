---
title: 'AeroCluster: Vision Transformer Drone Swarm Framework'
description: AeroCluster is a robust, fault-tolerant framework enabling real-time deployment of Vision Transformers on resource-limited drone swarms, supporting object detection, depth estimation, and autonomous navigation.
publishDate: 'May 1 2025'
isFeatured: True
---

**Project Overview:**
AeroCluster is a scalable, resilient framework designed for managing drone swarms equipped with Vision Transformers (ViTs). By adopting a distributed master-sensing architecture, AeroCluster enables compute-intensive vision tasks such as object detection and depth estimation while maintaining real-time coordination across the swarm. The framework dynamically balances workloads, handles drone failures, and ensures low-latency decision-making, allowing drones to navigate complex environments efficiently.

## Objectives

1. Enable real-time deployment of Vision Transformers on drones with limited computational resources.
2. Maintain continuous operation and decision-making in drone swarms, even during node failures.
3. Provide scalable load balancing and task reassignment based on drone health metrics.
4. Ensure robust navigation and vision processing using distributed inference and master-sensing coordination.

## Features

1. Master-Sensing Architecture:

- Master drone coordinates the swarm and fuses inference outputs from sensing drones.
- Sensing drones run ViT models for object detection and depth estimation.

2. Health-Driven Task Reassignment:

- Each drone computes a real-time health metric based on battery, RAM, and VRAM.
- Tasks are reassigned dynamically to drones with the highest available health.

3. Fault Tolerance and Leader Election:

- In case of a master failure, the next healthiest drone assumes leadership via a decentralized handoff protocol.
- Model replication ensures that ViT inference continues uninterrupted.

4. Real-Time Coordination and Low-Latency Communication:

- Multiple communication channels handle commands, model data, health updates, and fleet-wide messaging.
- Ensures minimal latency in navigation, inference, and swarm coordination.

5. Scalability:

- Supports seamless integration of new drones and additional ViT-based models.
- Maintains performance and load balancing regardless of swarm size or workload density.

## Technology Stack

- **Frameworks**: ROS 2 (Humble), Aerostack2
- **ML Models**: DETR (object detection), DPT MiDaS (depth estimation), quantized Vision Transformers
- **Simulation**: Gazebo (GZ Garden)
- **Programming**: Python, C++
- **Architecture**: Distributed master-sensing with fault-tolerant load balancing
- **Communication**: Publish-subscribe channels over ROS 2

## Outcome

AeroCluster demonstrates robust, scalable, and low-latency management of drone swarms running Vision Transformers. Evaluations in Gazebo simulated environments show:

- **Memory Efficiency**: RAM usage stays below 1GB, even with real-time addition of drones.
- **Inferencing Latency**: Single-model inference completes in 51ms, dual-model inference in 86ms, with post-fusion latency of 27ms.
- **VRAM Usage**: Efficiently supports multiple quantized ViT models alongside DETR and DPT without exceeding a 4GB memory budget.
- **Scalability**: System integrates new drones and additional tasks in real-time without performance degradation.

The framework ensures continuous operation under drone failures, provides real-time vision-based decision-making, and balances workloads dynamically across the swarm. By open-sourcing the code, AeroCluster enables reproducible research and further experimentation with autonomous drone swarm systems.
