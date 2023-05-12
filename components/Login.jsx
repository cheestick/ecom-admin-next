import React from "react";

const Login = ({ login }) => {
  return (
    <div className="text-center w-full">
      <button
        className="bg-white p-2 px-4 rounded-lg"
        onClick={() => login("google")}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
