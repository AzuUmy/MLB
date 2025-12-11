import { useState } from "react";
import { LoginComponenet } from "../components/Account/Login/LoginComponent";
import { Context as LoginNumberConfirmation } from "../Modals/Context";

export function Login() {
  const [triggerContex, setTriggerContex] = useState<boolean>(false);
  const handleCloseContext = () => setTriggerContex(false);

  const openContext = () => setTriggerContex(true);

  return (
    <div>
      <div>
        <div>
          <LoginComponenet onConfirmPasswordOnClick={openContext} />
          <LoginNumberConfirmation
            showContext={triggerContex}
            onClose={handleCloseContext}
          >
            <h1>hello login confirmation</h1>
          </LoginNumberConfirmation>
        </div>
      </div>
    </div>
  );
}
