import { redirect } from "next/navigation";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  redirect("/");
  return <div>Logging you in</div>;
};
export default page;
