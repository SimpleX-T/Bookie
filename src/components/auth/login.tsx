import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  email: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const navigate = useNavigate();

  const login = (data: LoginProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      navigate("/books");
    }, 2000);
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">Login to Bookie</h1>
        <p className="text-sm text-text mt-2">
          New reader?{" "}
          <Link
            to="/auth/register"
            className="text-blue-400 hover:text-primary transition-colors duration-200"
          >
            Register here
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(login)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-300/20"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-text mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            placeholder="********"
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-300/20"
            disabled={isLoading}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-md cursor-pointer hover:opacity-90  transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <FaSpinner className="animate-spin text-secondary text-lg" />
          ) : (
            "Sign In"
          )}
        </button>

        <p className="text-center text-sm text-text">
          Forgot password?{" "}
          <Link
            to="/auth/forgot-password"
            className="text-blue-300 hover:text-primary transition-colors duration-200"
          >
            Reset it here
          </Link>
        </p>
      </form>
    </>
  );
}
