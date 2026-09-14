import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main className="animate-fade-in">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Public Blog */}
            <Route path="/blog" element={<Blog />} />

            {/* Dynamic Blog Route */}
            <Route
              path="/blog/:slug"
              element={<BlogPost />}
            />

            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;