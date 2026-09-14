import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist.
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