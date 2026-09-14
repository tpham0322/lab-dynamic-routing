import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          My Blog
        </p>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Latest Posts
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Explore articles about React, TypeScript, and web development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Post #{post.id}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {post.title}
            </h2>

            <p className="mt-3 line-clamp-3 text-slate-600 dark:text-slate-400">
              {post.content}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              className="mt-5 inline-block font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}