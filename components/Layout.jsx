import { useSession } from "next-auth/react";
import Nav from "@/components/Nav";
import PersonalInfo from "./PersonalInfo";
import Login from "./Login";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center w-screen h-screen bg-blue-900">
        <Login />
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen bg-blue-900">
      <Nav />
      <div className="px-8 py-4 m-4 ml-0 rounded-xl flex-grow items-center bg-gray-50">
        <PersonalInfo />
        <main>{children}</main>
      </div>
    </div>
  );
}
