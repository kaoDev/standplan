import * as React from "react";
import { injectGlobal } from "emotion";
import { Plan } from "./components/plan.js";

/*Das styling der Tabelle soll natürlich noch in die jeweiligen Komponenten.
Ich wollte nur mal "injectGlobal" ausprobieren*/
injectGlobal({
  td: {
    border: "1px white solid",
    padding: "15px"
  },
  th: {
    border: "1px white solid",
    padding: "15px"
  },
  "tr: hover": {
    backgroundColor: "#33ccb3"
  }
});

export class App extends React.Component {
  render() {
    return <Plan stateManager={this.stateManager} />;
  }
}
