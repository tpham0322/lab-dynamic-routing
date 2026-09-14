import { Link, useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Post not found
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          The blog post you're looking for doesn't exist.
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        to="/blog"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
      >
        ← Back to Blog
      </Link>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Blog Post
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          {post.title}
        </h1>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
}