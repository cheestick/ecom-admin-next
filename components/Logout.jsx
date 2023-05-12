import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      className="border-blue-800 border-2 py-2 px-4 rounded-lg text-blue-800/90 hover:bg-blue-800/90 hover:border-blue-400/50 hover:text-white/90"
      onClick={signOut}
    >
      Logout
    </button>
  );
};

export default Logout;
