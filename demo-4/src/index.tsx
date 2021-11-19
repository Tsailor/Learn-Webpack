import * as React from "react";
import * as ReactDOM from "react-dom";
// import  React from "react";
// import  ReactDOM from "react-dom";
import { Button } from "antd";
import App from "./App";
import styles from "./styles.less";
import css from "./index.css";
import { Provider } from "mobx-react";
// import todoStore from "./store/todoStore";
import store from "./store";
const Index = () => {
  return (

    <Provider {...store}>
      <div className={css.content}>
        <div className={styles.header}>
          <h3>hello Hreader</h3>
        </div>
        <App />
        <Button type="primary">Primary Button</Button>
      </div>
    </Provider>
  );
};
ReactDOM.render(<Index />, document.querySelector("#root"));
