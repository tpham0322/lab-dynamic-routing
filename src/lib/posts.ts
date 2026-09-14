export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable components and manage application state efficiently. React is commonly used to build modern single-page applications.",
  },
  {
    id: 2,
    slug: "understanding-react-router",
    title: "Understanding React Router",
    content:
      "React Router allows applications to create multiple views and navigate between them without requiring a full page reload. Dynamic routes can use URL parameters to determine which content should be displayed.",
  },
  {
    id: 3,
    slug: "why-use-typescript",
    title: "Why Use TypeScript?",
    content:
      "TypeScript adds static typing to JavaScript. It can help developers catch errors earlier, improve code organization, and provide better tooling and autocomplete when working on larger applications.",
  },
  {
    id: 4,
    slug: "building-better-components",
    title: "Building Better Components",
    content:
      "Reusable components are an important part of React development. Components should generally have a clear purpose and should be designed so they can be reused throughout an application.",
  },
];