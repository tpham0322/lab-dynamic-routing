# Lab 4: Dynamic Routing

A small React blog application demonstrating dynamic routing, route parameters, authentication, protected routes, and conditional navigation using React Router.

## Features

- Mock blog posts stored in memory
- Dynamic blog post routes using slugs
- Individual blog post pages
- Authentication using React Context API
- Protected Admin Dashboard
- Login and Logout functionality
- Conditional navigation based on authentication
- 404 page for invalid routes and missing posts
- Simple page transition animation
- Responsive UI using Tailwind CSS

## Technologies Used

- React
- TypeScript
- React Router
- React Context API
- Tailwind CSS
- Vite

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── posts.ts
├── pages/
│   ├── Admin.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Routes

| Route | Description | Access |
|---|---|---|
| `/` | Redirects to the blog | Public |
| `/blog` | Displays all blog posts | Public |
| `/blog/:slug` | Displays an individual blog post | Public |
| `/login` | Login page | Public |
| `/admin` | Admin dashboard | Protected |
| `*` | 404 Not Found page | Public |

## Authentication

Authentication is simulated using React Context.

The `AuthContext` provides:

- `isAuthenticated`
- `login()`
- `logout()`

No real user authentication or backend is required for this project.

When a user is not authenticated and attempts to access `/admin`, they are redirected to the login page.

When logged in, the navigation bar displays:

- Admin
- Log Out

When logged out, the navigation bar displays:

- Log In

## Dynamic Routing

Blog posts use a dynamic URL based on their slug.

Examples:

```text
/blog/react-context-api
/blog/learning-react-router
/blog/typescript-basics
```

The `BlogPost` component uses React Router's `useParams()` hook to retrieve the slug:

```tsx
const { slug } = useParams<{ slug: string }>();
```

The slug is then used to find the corresponding post in the mock data.

If no matching post is found, the application displays:

```text
Post not found
```

## Styling

The application uses Tailwind CSS for all component styling.

No separate component CSS files are used. Tailwind classes are applied directly within the React components.

A simple fade-in animation is also included for page transitions.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd <project-folder>
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL provided by Vite.

## How to Use

1. Open the application.
2. Navigate to the Blog page.
3. Select a blog post to view its details.
4. Click Log In.
5. After logging in, the Admin link appears in the navbar.
6. Navigate to the Admin Dashboard.
7. Click Log Out to return to the unauthenticated state.
8. Try accessing `/admin` while logged out to see the protected-route redirect.

## Learning Objectives

This project demonstrates:

- Creating dynamic routes with React Router
- Using URL parameters with `useParams`
- Navigating between pages with `Link` and `Navigate`
- Creating an authentication context
- Protecting routes from unauthenticated users
- Conditionally rendering navigation options
- Managing application state with React Context
- Building responsive interfaces with Tailwind CSS

## Author

Truong Pham