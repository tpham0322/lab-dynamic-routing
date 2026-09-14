import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/blog");
  };

  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `transition ${
      isActive
        ? "font-semibold text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
    }`;

  return (
    <nav className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/blog"
          className="text-xl font-bold text-slate-900 dark:text-white"
        >
          My Blog
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink to="/blog" className={getNavLinkClass}>
            Blog
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                to="/admin"
                className={getNavLinkClass}
              >
                Admin
              </NavLink>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}