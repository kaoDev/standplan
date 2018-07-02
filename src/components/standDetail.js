import * as React from "react";
import styled from "react-emotion";

//Trapsarent Overlay style
const BackDrop = styled ("div")({
    position: "fixed",
    top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "100px"
});

const Modal = styled ("div")({
    backgroundColor: "white",
    padding: "30px",
    maxWidth: "600px",
    minHeight: "300px",
    margin: "0 auto"
});

const Header = styled("h1")({
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "crimson"
  });

export class StandDetail extends React.Component {
    render () {
        // Render nothing if "show" is false
        if(!this.props.show) {
            return null;
        }
        return(
            <BackDrop>
                <Modal>
                <Header>Stand X: Aussteller X</Header>  
                <button onClick={this.props.onClose}> close </button>
                </Modal>
            </BackDrop>

        )
    }
}