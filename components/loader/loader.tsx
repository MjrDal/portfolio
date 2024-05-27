"use client";

import { useRouter } from "next/navigation";

export default function Loader() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/home");
  }, 2000);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div id="loader">
        <div id="group">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
