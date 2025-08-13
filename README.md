# Creatorverse - WEB103 Prework

## Project Description
Creatorverse is a React-based web application that allows users to manage and showcase their favorite content creators. Users can add, view, edit, and delete content creators with information including their name, URL, description, and optional image.

## Features Implemented

### Required Features
- [x] Use logical component structure in React to create the frontend of the app
- [x] Display at least five content creators on the homepage of the app
- [x] Each content creator item includes:
  - [x] their name
  - [x] a link to their channel or page
  - [x] a short description of their content
- [x] API calls use the async/await design pattern via Supabase
- [x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
- [x] Each content creator has their own unique URL
- [x] The user can edit a content creator to change their name, url, or description
- [x] The user can delete a content creator
- [x] The user can add a new content creator by entering a name, url, and description
- [x] The new content creator then appears in the displayed list

### Stretch Features
- [x] Display content creator items in a creative format, like cards instead of a list
- [x] Show an image of each content creator on their content creator card (optional imageURL field)

## Technologies Used
- React
- React Router for navigation
- Supabase for database and API
- Vite for build tooling

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser

## Video Walkthrough
[Add your video walkthrough link here - GIF, Loom, YouTube, or MP4 file]

## Project Structure
```
src/
├── components/
│   ├── CreatorCard.jsx    # Displays individual creator cards
│   └── CreatorForm.jsx    # Reusable form for add/edit
├── pages/
│   ├── ShowCreators.jsx   # Homepage - displays all creators
│   ├── ViewCreator.jsx    # Individual creator details
│   ├── AddCreator.jsx     # Add new creator form
│   └── EditCreator.jsx    # Edit existing creator
├── client.js             # Supabase configuration
└── App.jsx               # Main app with routing
```

## Sample Creators Included
The app currently features 5 sample content creators:
1. **Sporting Logically** - Basketball News Content Creator
2. **FlightReacts** - Basketball Content Creator  
3. **NeetCode** - Leetcode Prep
4. **Kenny For Real** - Basketball Content Creator
5. **Fireship** - Short, high-speed web dev tutorials and news
