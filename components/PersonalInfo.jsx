import { useSession } from "next-auth/react";
import Logout from "./Logout";
import Image from "next/image";

const PersonalInfo = () => {
  const { data: session } = useSession();

  return (
    <section className="flex gap-4 justify-between items-center">
      <div className="flex gap-2 flex-row-reverse items-center">
        <h1 className="text-lg font-semibold">Hello, {session.user.name}</h1>
      </div>
      <section className="flex gap-2 items-center bg-blue-400/30 pl-4 pr-1 py-1 rounded-full">
        <h2 className="text-md">{session?.user?.name.split(" ").at(0)}</h2>
        <Image
          src={session?.user?.image}
          alt="user avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </section>
    </section>
  );
};

export default PersonalInfo;
