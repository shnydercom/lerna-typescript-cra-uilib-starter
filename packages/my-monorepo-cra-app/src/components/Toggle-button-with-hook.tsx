import React from "react";
import { Button } from "my-monorepo-ui-lib";
import { useState } from "react";

export const ToggleButtonWithHook = () => {
  //this is a "useState"-hook. In react 17, that's the default way to handle
  //your component's life cycle. Tutorials which show this.setState(...) are older than that
  const [isToggled, setToggled] = useState(true);
  return (
    <Button
      primary={true}
      backgroundColor={isToggled ? "darkblue" : "green"}
      label={
        isToggled ? "have you changed something in the UI-lib?" : "run 'yarn libbuild' and see your changes in this App"
      }
      onClick={() => setToggled(!isToggled)}
    ></Button>
  );
};
