"use client";

import { useState } from "react";
import Usertimeline from "./usertimeline";
import Login from "./login";
import { UserType } from "./usertype";

export default function Home() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  console.log(user);
  return (
    <>
    
      {
        
        isAuthenticated ? (
          <Usertimeline 
          userData={user}/>
        ) : (
          <Login 
          changeAuthStatus={setIsAuthenticated}
          setUser={setUser}
          />
        )
      }
    </>
  );
}
