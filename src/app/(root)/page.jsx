"use client";

import HomepageBefore from "@/app/components/ui/HomepageBefore";
import HomepageAfter from "../components/ui/HomepageAfter";
import IKImage from "@/app/components/ui/IKImage";
import { getData } from "@/utils/storage";
import { useEffect, useState } from "react";

const page = () => {
  // const [token, setToken] = (useState < string) | (null > null);

  // useEffect(() => {
  //   // This code ONLY runs in the browser
  //   const data = getData < string > "token";
  //   setToken(data);
  //   console.log("token found in localStorage:", data);
  // }, []);

  return (
    <div>
      {/* <HomepageBefore /> */}

      {/* <IKImage src="pic1"/> */}
      <HomepageAfter />
    </div>
  );
};

export default page;
