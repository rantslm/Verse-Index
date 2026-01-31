# Mini-Project 3

## Project Overview

This project is a backend API that provides topical Bible verses based on curated themes such as life events or emotional states. The application integrates with an external Bible API, stores the data in a MySQL database, and exposes REST endpoints for interacting with the data. All functionality is demonstrated using API tools such as Hoppscotch.

### External Data Source: Bible API

This project integrates with the **Bible API** by wldeh, a free and publicly accessible REST API that provides Bible verses and chapters in JSON format. (https://github.com/wldeh/bible-api)

- No API key or authentication is required
- Supports multiple Bible versions (e.g., ASV, KJV)
- Provides verse-level and chapter-level access
- Serves public-domain Bible translations

The Bible API is used during the application startup process to fetch specific verses based on predefined topics. These verses are then stored locally in the MySQL database so the application does not rely on the external API for every request.

To obtain a specific verse, send a request to the following endpoint:
`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`
Replace ${version}, ${book}, ${chapter}, and ${verse} with the appropriate values.

Example: Fetch John 3:16 in the King James Version (KJV):
`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/john/chapters/3/verses/16.json`

### Core Functionality

- Fetch Bible verses from an external Bible API during application startup
- Populate and persist topics and verses in a MySQL database
- Provide REST API endpoints for retrieving topics and verses
- Allow users to save favorite topics or verses
- Track user interaction history (e.g., viewed topics or verses)
- Support full CRUD (Create, Read, Update, Delete) operations on core resources

### User Capabilities

Users of the system can:

- Create or select a user session
- View a list of available topics
- Retrieve verses associated with a topic
- Save (favorite) topics or verses
- View their saved favorites
- View a history of their interactions

### Application Architecture (Visual Layout)

The application is structured as two backend services:

- **Content Service (Port 3001)**
  - Manages topics and verses
  - Integrates with the external Bible API
  - Handles content-related database operations

- **User Service (Port 3002)**
  - Manages users, favorites, and history
  - Handles user-specific data and interactions

All interaction with the system is performed through REST API requests using Hoppscotch.

---


## Logical and Physical Models

- **Users:** Represent people using the system.
- **Topics:** Curated categories such as confidence, guidance, worried, etc.
- **Verses:** Individual Bible verses fetched from an external Bible API and stored locally.
- **Favorites:** Saved/bookmarked topics or verses for a user.
- **History:** Records of user interactions (e.g., viewing a topic or verse).

## Logical Model

### Entities
- User  
- Topic  
- Verse  
- Favorite  
- History  

### Relationships
- A **User** can have **many Favorites**, but each **Favorite** belongs to **one User**.
- A **User** can have **many History** records, but each **History** record belongs to **one User**.
- A **Topic** can reference **many Verses**, but each **Verse** belongs to **one Topic**.
- A **Favorite** references **one Topic or one Verse**.
- A **History** record references **one Topic or one Verse**.

### Relationship Summary
- USER 1:M FAVORITE (saves)
- USER 1:M HISTORY (tracks)
- TOPIC 1:M VERSE (categorizes)
- FAVORITE M:1 USER (belongs to)
- HISTORY M:1 USER (belongs to)
- FAVORITE → TOPIC or VERSE (polymorphic reference)
- HISTORY → TOPIC or VERSE (polymorphic reference)

