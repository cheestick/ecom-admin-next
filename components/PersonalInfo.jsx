import { useSession } from "next-auth/react";
import Logout from "./Logout";

const PersonalInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-4 justify-end">
      <h1 className="text-2xl font-semibold">{session.user.name}</h1>
      <Logout />
    </div>
  );
};

export default PersonalInfo;
