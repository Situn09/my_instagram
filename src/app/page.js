"use client";
import Auth from "@/components/Auth";
import Feed from "@/components/Feed";
import { GlobalContext } from "@/state/context/GlobalContext";
import { useContext, useState } from "react";

export default function Home() {
  // const [isAuthantication, setAuthantication] = useState(true);
  const { isAuthenticated, isOnboarded } = useContext(GlobalContext);
  console.log(isAuthenticated, isOnboarded);
  return isAuthenticated && isOnboarded ? <Feed /> : <Auth />;
}
