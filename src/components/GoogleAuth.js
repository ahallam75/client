import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "428039557998-do12i87vaeurd9b8u5rdglm0mcjt4q0k.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
