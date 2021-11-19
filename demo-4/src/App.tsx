import * as React from "react";
import { inject } from "mobx-react";

@inject("todoStore")
class App extends React.Component<{}, {}> {
  render() {
    console.log("props",this.props);
    return <div>this is App</div>;
  }
}
export default App;
