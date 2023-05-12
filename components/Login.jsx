import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="text-center w-full">
      <button
        className="bg-white p-2 px-4 rounded-lg"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
