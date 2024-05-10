import React from "react";
import { Button } from "../global/button";
import { FcGoogle } from "react-icons/fc";

const SocialAuthForm = () => {
  return (
    <div className="space-y-4">
      <Button className="w-full" variant={"outline"}>
        <FcGoogle size={20} className="mr-2" />
        Continuar com Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
