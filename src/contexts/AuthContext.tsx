"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LoggedUserInfo } from "@/interfaces/loggedUserInfo";
import { hasFiftyMinutesPassed } from "@/utils/dates";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const routerInstance = useRouter();
  const pathname = usePathname();
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  const getUserSessionInfo = () => {
    return typeof window !== 'undefined' && JSON.parse(sessionStorage.getItem("userSessionInfo")!) ? JSON.parse(sessionStorage.getItem("userSessionInfo")!) : null
  }

  const isUserInfoStored: boolean =
    typeof window !== 'undefined'
    && sessionStorage.getItem("userSessionInfo") !== null
    && sessionStorage.getItem("userSessionInfo") !== undefined;

  const initializeStorage = (sessionInfo: LoggedUserInfo) => {
    if (typeof window !== 'undefined') {
      if (!isUserInfoStored) {
        sessionStorage.setItem("userSessionInfo", JSON.stringify(sessionInfo));
        routerInstance.replace("/");
      }
    }
  }

  const logout = typeof window !== 'undefined' ?
    () => {
      sessionStorage.removeItem("userSessionInfo"), pathname !== '/' ? routerInstance.replace("/") : routerInstance.refresh();
    }
    : () => { }

  useEffect(() => {
    setIsUserLogged(typeof window !== undefined && getUserSessionInfo() ?
      hasFiftyMinutesPassed(getUserSessionInfo().tokenExpirationDate) ? false : true
      :
      false
    )
  }, [routerInstance, pathname])

  return (
    <AuthContext.Provider
      value={{
        initializeStorage,
        isUserLogged,
        logout,
        getUserSessionInfo,
        isUserInfoStored,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
