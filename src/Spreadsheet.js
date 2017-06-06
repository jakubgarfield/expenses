import React, { Component } from 'react';

class Spreadsheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: undefined,
    }
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        clientId: this.props.clientId,
        scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly"
      }).then(() => {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen((signedIn) => { this.setState({ signedIn: signedIn }) });
        this.setState({ signedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
      });
    });
  }

  render() {
    const loading = (<p>Loading ...</p>);
    const userSigned = (<button onClick={() => { window.gapi.auth2.getAuthInstance().signOut(); }}>Sign Out</button>);
    const userNotSigned = (<button onClick={() => { window.gapi.auth2.getAuthInstance().signIn(); }}>Sign In</button>);

    switch (this.state.signedIn) {
      case false:
        return userNotSigned;
      case true:
        return userSigned;
      default:
        return loading;
    }
  }
}

export default Spreadsheet;