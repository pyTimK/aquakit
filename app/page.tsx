"use client";

import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import SignInPage from "./sign_in";
import { useEffect, useState } from "react";
import MainPage from "./main";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import useLocalStorage from "@/hooks/useLocalStorage";
import { StorageNames } from "./constants";

export default function Home() {
  return (
    <>
      <Wrapper />
      <ToastContainer theme="colored" autoClose={2} closeButton={false} />
    </>
  );
}

const Wrapper = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (new_user) => {
      setUser(new_user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>LLOADING</p>;
  }

  if (user === null) {
    return <SignInPage />;
  }

  return <MainPage user={user} />;
};
