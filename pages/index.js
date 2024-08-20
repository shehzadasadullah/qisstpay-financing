import Login from "@/components/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);

  return <></>;
}
