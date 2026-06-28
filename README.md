# ON Next Web - Premium Frontend

This is the frontend component of **ON Next Web** built using [Next.js](https://nextjs.org).

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Updated Navigation & Layout

We have removed the static **Resource Library** page from the frontend layout. The links have been removed from:
- Header Navigation Menu ([Navbar.tsx](file:///e:/New%20folder/onw/src/components/Navbar.tsx))
- Footer Directory Menu ([Footer.tsx](file:///e:/New%20folder/onw/src/components/Footer.tsx))
- XML Sitemap Configurator ([sitemap.ts](file:///e:/New%20folder/onw/src/app/sitemap.ts))

---

## 🧠 AI Search, Recommendations & SEO Integration

This project has been updated with premium AI search and recommendation capabilities powered by the backend API:

### 1. NLP AI Search
- **Endpoint**: `GET /api/search?q=<query>`
- **Features**: Performs Natural Language Processing (NLP) tokenization, filters stop-words, expands queries with domain synonyms (e.g. searching "web" matches "website", "nextjs", "react"), and ranks all services, projects, and blog items by similarity score.

### 2. Adaptive Recommendation System
- **Endpoint**: `GET /api/recommendations?itemId=<id>&userId=<userId>`
- **Algorithms**: Combines content-based filtering (tag overlap & textual cosine similarity) and collaborative filtering (user history intersection similarity) to suggest the most relevant content.

### 3. Online Feedback Loop (Reinforcement Learning)
- **Endpoint**: `POST /api/feedback`
- **Body**: `{ "userId": "user123", "currentId": "itemIdA", "nextId": "itemIdB", "action": "click"|"view"|"like"|"dislike" }`
- **Mechanism**: Implements online Q-learning updates to build a transition probability matrix. Actions yield dynamic rewards (`like` = +1.5, `click` = +1.0, `dislike` = -0.5) that adjust recommendation rankings in real-time based on user behaviors.

### 4. Search Crawler & AI Discovery Optimization
- **Endpoint**: `GET /api/seo/ai-capabilities`
- **Objective**: Returns a structured `ProfessionalService` JSON-LD schema. Perfect for Google search rankings and ingestion by AI web agents (ChatGPT, Claude, Perplexity) to recommend ON Next Web for digital agency services.
