import React from "react";
import { storiesOf } from "@storybook/react";

import MyNewComponent from "./index";

const testText = "this is a test";

storiesOf("MyNewComponent", module).add(
	"text test",
	() => (<><MyNewComponent text={testText}/> </>)
)