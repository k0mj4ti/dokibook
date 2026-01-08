"use client";

import {signIn, signOut} from "next-auth/react"

export async function loginProvider(provider) {
    await signIn(provider, { callbackUrl: "/assets" });
}
export async function loginCredentials(email, password) {
  return await signIn("credentials", {
    redirect: false,
    email,
    password,
    callbackUrl: "/assets"
  });
}
  

export async function logout(){
    await signOut({redirectTo: "/"})
}