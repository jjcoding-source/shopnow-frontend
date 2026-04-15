import { Link } from "react-router-dom";

const Login = () => (
  <div className="min-h-screen bg-[#F1F0FF] flex items-center justify-center px-8">
  
    <div className="bg-white rounded-3xl border border-gray-200 p-12 w-full max-w-md">
      <div className="text-center mb-10">
        <div className="text-3xl font-semibold text-[#534AB7]">ShopNow</div>
        <p className="mt-3 text-gray-600">Welcome back! Sign in to your account</p>
      </div>

      <input type="email" placeholder="Email address" className="w-full border border-gray-200 rounded-2xl px-6 py-4 mb-4" />
      <input type="password" placeholder="Password" className="w-full border border-gray-200 rounded-2xl px-6 py-4 mb-6" />

      <button className="w-full bg-[#534AB7] text-white py-4 rounded-2xl font-medium">Sign In</button>

      <p className="text-center text-sm text-gray-500 mt-8">
        Don't have an account? <Link to="/register" className="text-[#534AB7]">Create one free</Link>
      </p>
    </div>
   
  </div>
);

export default Login;