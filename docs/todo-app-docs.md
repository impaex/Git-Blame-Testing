# Todo App Documentation

## Overview

This is a fully functional React-based todo application built with Vite. It provides a clean, modern interface for managing daily tasks with support for both light and dark color schemes.

## Features

- **Add New Todos**: Create new tasks with a simple text input
- **Mark as Completed**: Toggle completion status with checkboxes
- **Delete Todos**: Remove tasks you no longer need
- **Real-time Statistics**: View total, completed, and active todo counts
- **Responsive Design**: Adapts to different screen sizes
- **Dark/Light Mode**: Automatically adjusts based on system preferences
- **Keyboard Support**: Press Enter to quickly add todos

## Architecture

### Project Structure

```
todo-app/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application-specific styles
│   ├── main.jsx        # Application entry point
│   ├── index.css       # Global styles
│   └── assets/         # Images and other assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

### Technology Stack

- **React 19.1.1**: Modern UI library for building the interface
- **Vite 7.1.7**: Fast build tool and development server
- **ESLint**: Code quality and consistency checking
- **CSS3**: Styling with dark/light mode support

## How It Works

### State Management

The application uses React's `useState` hook to manage two pieces of state:

1. **todos**: An array of todo objects, each containing:
   - `id`: Unique identifier (timestamp-based)
   - `text`: The todo description
   - `completed`: Boolean indicating completion status

2. **inputValue**: Current text in the input field

### Core Functionality

#### Adding Todos

When a user types in the input field and clicks "Add" or presses Enter:

1. The `addTodo()` function is called
2. It validates that the input is not empty (after trimming whitespace)
3. Creates a new todo object with a unique ID (using `Date.now()`)
4. Adds it to the todos array
5. Clears the input field

```javascript
const addTodo = () => {
  if (inputValue.trim() !== '') {
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
    setInputValue('')
  }
}
```

#### Toggling Completion

When a user clicks the checkbox:

1. The `toggleTodo(id)` function is called
2. It maps through the todos array
3. Finds the matching todo by ID
4. Toggles its `completed` status
5. Updates the state with the modified array

```javascript
const toggleTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ))
}
```

#### Deleting Todos

When a user clicks the "Delete" button:

1. The `deleteTodo(id)` function is called
2. It filters out the todo with the matching ID
3. Updates the state with the filtered array

```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}
```

### UI Components

#### Input Section

- Text input field with placeholder text
- "Add" button that triggers todo creation
- Keyboard event listener for Enter key

#### Todo List

- Displays all todos or an empty state message
- Each todo item shows:
  - Checkbox for completion status
  - Todo text (with strikethrough when completed)
  - Delete button

#### Statistics Bar

Real-time counters showing:
- **Total**: All todos
- **Completed**: Checked todos
- **Active**: Unchecked todos

Calculated using array filter methods:
```javascript
todos.length                          // Total
todos.filter(t => t.completed).length // Completed
todos.filter(t => !t.completed).length // Active
```

### Styling

The app uses CSS with:

- **Dark Mode** (default): Dark background (#242424) with light text
- **Light Mode**: White background with dark text
- Automatic switching based on `prefers-color-scheme` media query
- Smooth transitions on hover and focus states
- Responsive layout with max-width container

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the app directory:**
   ```bash
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality with ESLint

## Usage Guide

### Adding a Todo

1. Type your task in the input field
2. Either click the "Add" button or press Enter
3. The new todo appears in the list below

### Completing a Todo

1. Click the checkbox next to any todo
2. The text becomes strikethrough and slightly faded
3. The "Completed" counter increments

### Deleting a Todo

1. Click the red "Delete" button next to any todo
2. The todo is immediately removed from the list
3. All counters update automatically

### Viewing Statistics

The statistics bar at the bottom always displays:
- Total number of todos
- Number of completed todos
- Number of active (uncompleted) todos

## Browser Compatibility

The app works on all modern browsers supporting:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS custom properties
- Media queries for dark/light mode

## Performance

- **Fast startup**: Vite provides instant server start
- **Hot Module Replacement**: Changes appear instantly during development
- **Optimized builds**: Production builds are minified and optimized
- **Efficient rendering**: React only updates changed components

## Limitations

- **No persistence**: Todos are stored in memory and lost on page refresh
- **No backend**: All data is managed client-side
- **Single user**: No authentication or multi-user support
- **No categorization**: All todos are in a single list
- **No due dates**: No time-based features

## Future Enhancements

Potential improvements could include:
- Local storage or database persistence
- Todo editing capabilities
- Categories or tags
- Due dates and reminders
- Priority levels
- Search and filter functionality
- Drag-and-drop reordering
- Todo history and undo functionality

## Overview

This is a fully functional React-based todo application built with Vite. It provides a clean, modern interface for managing daily tasks with support for both light and dark color schemes.

## Features

- **Add New Todos**: Create new tasks with a simple text input
- **Mark as Completed**: Toggle completion status with checkboxes
- **Delete Todos**: Remove tasks you no longer need
- **Real-time Statistics**: View total, completed, and active todo counts
- **Responsive Design**: Adapts to different screen sizes
- **Dark/Light Mode**: Automatically adjusts based on system preferences
- **Keyboard Support**: Press Enter to quickly add todos