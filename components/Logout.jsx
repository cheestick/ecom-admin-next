import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      className="border-blue-100  border-2 py-2 px-8 rounded-lg text-md text-blue-900/90 hover:bg-blue-100/90 hover:border-blue-300/50 hover:text-blue-500/90"
      onClick={signOut}
    >
      Logout
    </button>
  );
};

export default Logout;
