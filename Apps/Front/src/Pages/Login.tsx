import { useState } from "react";
import { LoginComponenet } from "../components/Account/Login/LoginComponent";
import { Context as LoginNumberConfirmation } from "../Modals/Context";
import { LoginCode } from "../components/Account/Login/LoginCode";

export function Login() {
  const [triggerContex, setTriggerContex] = useState<boolean>(false);
  const handleCloseContext = () => setTriggerContex(false);

  const openContext = () => setTriggerContex(true);
  return (
    <div>
      <div>
        <div>
          <LoginComponenet
            onConfirmPasswordOnClick={openContext}
            resetState={triggerContex}
          />
          <LoginNumberConfirmation
            showContext={triggerContex}
            onClose={handleCloseContext}
          >
            <LoginCode />
          </LoginNumberConfirmation>
        </div>
      </div>
    </div>
  );
}
