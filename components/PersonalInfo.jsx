import { useSession } from "next-auth/react";
import React from "react";

const PersonalInfo = ({ logout }) => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4 justify-end">
      <h1 className="text-2xl font-semibold">{session.user.name}</h1>
      <button
        className="border-blue-800 border-2 py-2 px-4 rounded-lg text-blue-800/90 hover:bg-blue-800/90 hover:border-blue-400/50 hover:text-white/90"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default PersonalInfo;
