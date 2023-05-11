import { useSession, signIn, signOut } from "next-auth/react";

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
    <div className="flex items-center w-screen h-screen bg-blue-900">
      <div className="text-center w-full">
        <h1>Logged In as {session.user.email}</h1>
        <button
          className="bg-white p-2 px-4 rounded-lg"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
