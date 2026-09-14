import { useAuth } from "../contexts/AuthContext";

export function Admin() {
  const { logout } = useAuth();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Admin Area
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
          Welcome to the Admin Dashboard
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          You are viewing a protected page that requires authentication.
        </p>

        <button
          onClick={logout}
          className="mt-6 rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}