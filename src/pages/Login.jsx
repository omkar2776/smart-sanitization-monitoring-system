import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (name && email && password) {
      localStorage.setItem("staffName", name);
      localStorage.setItem("staffEmail", email);
      localStorage.setItem("isStaffLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="text-blue-700" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-blue-900">
            Staff Login
          </h1>

          <p className="text-slate-500 mt-2">
            Smart Sanitation Monitoring System
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Staff Name
            </label>

            <div className="relative">
              <User
                className="absolute left-3 top-3 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-300 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Staff Email
            </label>

            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-slate-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-slate-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-300 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
          >
            <LogIn size={20} />
            Login to Dashboard
          </button>

        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Authorized municipal staff only
        </p>

      </div>
    </div>
  );
}

export default Login;