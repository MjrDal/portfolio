import { auth } from "@/auth";
import { DropDownMenu } from "../drop-down-menu/DropDownMenu";
import { NavBar } from "./Nav";

export const Header = async () => {
  const session = await auth();
  return (
    <header className="font-sans w-full flex justify-center items-center h-28 relative">
      <NavBar />
      <div className=" absolute right-4">
        <DropDownMenu session={session} />
      </div>
      {session ? <div>session</div> : <div>pas de sesssion</div>}
      {JSON.stringify(session?.user.role)}
    </header>
  );
};
