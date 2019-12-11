import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";

import store from "./store"

const GlobalStyle = createGlobalStyle`
body {
  line-height: 1.4;
  color: #333;
  font-family: arial;
  font-size: 12px;
  background: white;
}
input,
textarea,
select {
  font-size: 12px;
  font-size: 100%;
  font-family: arial;
  font-family: inherit;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
form {
  margin: 0;
}
h4,
h5,
h6 {
  font-size: 1em;
}
ul,
ol {
  padding-left: 0;
  list-style-type: none;
}
/*image with no-border*/
a img {
  border: 0;
}
img {
  border: 0;
}

`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>123</div>
    </Provider>
  );
};

export default App;
