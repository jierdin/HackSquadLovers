import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';
import ProfileHover from "profile-hover";
// import CredentialProver from "./CredentialProver";
// import {Route} from "react-router-dom";
var QRCode = require('qrcode.react');

class CredentialCard extends Component {
  constructor(props) {
    super(props);
  }
    state = {
        isOpen: true
    };


  render() {
      return (
      <div style={{width: '400px', margin: '20px'}}>

          <Card>
              <Card.Title>
                  <ProfileHover address={this.props.address} showName={false} />
                  <h3>{this.props.name}</h3>
              </Card.Title>
              <Card.Body>
                  {this.state.isOpen ?   <Button id="credentialButton" onClick={ ()=>
                  {
                      console.log("hwlloe!");
                      let newState = this.state.isOpen;
                      newState = !newState;
                      this.setState ({ isOpen:newState });
                  }
                  }> Reveal Credential </Button>
                      :  <div id="credentialActive">
                          <QRCode value={"https://etherscan.io/address/" + this.state.address}/>
                          <Button id="credentialButton" onClick={ ()=>
                          {
                              console.log("hwlloe!");
                              let newState = this.state.isOpen;
                              newState = !newState;
                              this.setState ({ isOpen:newState });
                          }
                          }> Hide Credential </Button>
                      </div>}
              </Card.Body>
          </Card>
      </div>
    );
  }
}


export default CredentialCard;
