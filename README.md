# Recipe Finder 

A recipe search app built with React that lets you browse meals from around the world, view full recipe details, and save your favorites.

Built as a learning project to practice React fundamentals — hooks, state management, routing, and API integration.

## Live Demo

[View on Vercel →](#) *(replace with your deployment URL)*

## Features

- **Search recipes** by name using TheMealDB API
- **Browse recipe cards** in a responsive grid layout
- **View full details** — ingredients, instructions, and meal images
- **Save favorites** with localStorage persistence (survives page refresh)
- **Toggle between** search results and saved favorites
- **Responsive design** that works on mobile and desktop

## Tech Stack

- React (Vite)
- React Router
- TheMealDB API (free, no key required)
- localStorage for persistence
- CSS (custom styling)

## Project Structure

```
src/
├── App.jsx            # Main app with routing setup
├── SearchBar.jsx      # Controlled search input
├── RecipeCard.jsx     # Individual recipe card with save button
├── pages/
│   ├── SearchPage     # Search + results grid
│   ├── FavoritesPage  # Saved recipes display
│   └── RecipeDetail   # Full recipe info via useParams
└── index.css          # All styles
```

## Run Locally

```bash
git clone https://github.com/clxrie/recipe-finder.git
cd recipe-finder
npm install
npm run dev
```


## What I Learned

- **useState & useEffect** — managing async data fetching and syncing state with localStorage
- **React Router** — `BrowserRouter`, `Routes`, `useParams`, nested routes with `Outlet`
- **Lifting state up** — passing favorites state from App down through props
- **Controlled components** — search input bound to state
- **Conditional rendering** — toggling between search and favorites views
- **API integration** — fetching, loading states, and error handling

