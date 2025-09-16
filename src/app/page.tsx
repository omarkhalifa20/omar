import React from "react";

import Catslider from "@/components/sliders-comp/catslider";
import Miansec from "@/components/miansec/miansec";
import Productmain from "@/components/Products/Productmain";

import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";
export default async function Home() {
 const session = await getServerSession(options)

console.log(session);

  return (
    <>
      
        
        <Miansec/>
        <Catslider/>
        <Productmain/>
      
    </>
  );
}
