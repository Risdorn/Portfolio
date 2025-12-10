---
title: 'Sponsorship Influencer Coordination Platform (v1)'
description: A platform connecting sponsors and influencers for seamless campaign coordination, featuring secure authentication, campaign management, and basic data visualization.
publishDate: 'July 24 2024'
---

**Project Overview:**
The Sponsorship Influencer Coordination Platform (v1) provides a straightforward solution for sponsors and influencers to collaborate on campaigns. Sponsors can create advertising campaigns, while influencers browse, accept, or negotiate requests. With secure authentication, SQL-based data management, and basic visual analytics, the platform simplifies the sponsorship workflow while maintaining security and scalability.

**Project source code**: [https://github.com/Risdorn/Sponsorship-Coordination-Platform-v1](https://github.com/Risdorn/Sponsorship-Coordination-Platform-v1)

## Objectives

1. Enable sponsors and influencers to coordinate campaigns efficiently.
2. Implement secure login and data persistence for reliable user management.
3. Provide basic campaign insights through visualizations.

## Features

1. **Sponsor Campaign Management**:

    - Sponsors can create and manage advertising campaigns.
    - Campaign details and statuses are easily accessible.

2. **Influencer Coordination**:

    - Influencers can browse campaigns, accept opportunities, or negotiate terms.
    - Streamlines communication and fosters collaboration.

3. **Secure Login**:

    - Authentication via Flask-Login and bcrypt ensures account security.
    - User credentials are safely hashed and stored.

4. **Data Persistence and Pagination**:

    - SQLAlchemy ORM manages and persists application data.
    - Pagination handles large datasets efficiently for better user experience.

5. **Data Visualization and Mock Data**:

    - Matplotlib provides basic campaign performance visualizations.
    - Faker generates test data to facilitate development and testing.

## Technology Stack

- **Frontend**: HTML, Bootstrap
- **Backend**: Flask
- **Database**: Flask-SQLAlchemy (SQLAlchemy ORM)
- **Authentication**: Flask-Login, Flask-Bcrypt
- **Visualization**: Matplotlib
- **Data Generation**: Faker

## Outcome

The platform successfully provides a simple yet effective environment for campaign management and sponsor-influencer coordination. By combining secure authentication, structured data management, and visual insights, it improves the efficiency of sponsorship deals and lays the foundation for more advanced versions.
