import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center w-screen h-screen bg-blue-900">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen bg-blue-900">
      <Nav />
      <div className="px-8 py-4 m-4 ml-0 rounded-xl flex-grow items-center bg-gray-50">
        <div className="flex gap-4 justify-end">
          <h1 className="text-2xl font-semibold">{session.user.name}</h1>
          <button
            className="border-blue-800 border-2 py-2 px-4 rounded-lg text-blue-800/90 hover:bg-blue-800/90 hover:border-blue-400/50 hover:text-white/90"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
