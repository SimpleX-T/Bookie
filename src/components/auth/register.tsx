import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

interface RegisterProps {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>();
  const navigate = useNavigate();

  const registerUser = (data: RegisterProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      navigate("/books");
    }, 2500);
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary">
          Create Your Bookie Account
        </h1>
        <p className="text-sm text-text mt-2">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-400 hover:text-primary transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(registerUser)} className="space-y-6">
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-text mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", { required: "Full name is required" })}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isLoading}
          />
          {errors.fullname && (
            <p className="mt-1 text-xs text-red-400">
              {errors.fullname.message}
            </p>
          )}
        </div>

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
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isLoading}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-text mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
            placeholder="********"
            className="w-full px-4 py-3 border border-border rounded-md text-text placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isLoading}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-400">
              {errors.confirmPassword.message}
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
            "Create Account"
          )}
        </button>
      </form>
    </>
  );
}
