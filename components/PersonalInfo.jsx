import { useSession } from "next-auth/react";
import Logout from "./Logout";

const PersonalInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4 justify-between items-center">
      <h1 className="text-lg font-semibold">Hello, {session.user.name}</h1>
      <Logout />
    </div>
  );
};

export default PersonalInfo;
