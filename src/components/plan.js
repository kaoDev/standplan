import * as React from "react";
import { Stand } from "./stand.js";
import styled from "react-emotion";
import { List } from "./list.js";
import { StandDetail } from "./standDetail.js";
import standsJson from "./stands.json";
import exhibitorsJson from "./exhibitors.json";

const PlanWrap = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexShrink: "no",
  width: "300px",
  border: "2px solid black"
});
const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  flex: "none",
  flexWrap: "wrap",
  maxWidth: "1200px",
  padding: "0 10px",
  margin: "auto"
});

export class Plan extends React.Component {
  //Statemanagement
  state = {
    ModalOpen: false,
    ModalTarget: null,
    stands: standsJson,
    exhibitors: exhibitorsJson,
    currentStand: ""
  };

  //Modal functions
  toggleModal = () => {
    this.setState(state => ({ ModalOpen: !state.ModalOpen }));
  };

  updateModalTarget = ModalTarget => {
    this.setState({ ModalTarget, ModalOpen: true });
    console.log(ModalTarget);
  };

  render() {
    const { stands, exhibitors, ModalOpen, ModalTarget } = this.state;

    return (
      <Wrapper>
        <StandDetail
          show={ModalOpen}
          onClose={this.toggleModal}
          target={ModalTarget}
        />
        <PlanWrap>
          {stands.map((stand, index) => {
            return (
              <Stand
                clickFunction={this.updateModalTarget}
                standNr={stand.name}
                id={stand.id}
                type={stand.type}
                key={index}
                standId={stand.id}
                standWidth={stand.width}
                standHeight={stand.height}
              />
            );
          })}
        </PlanWrap>
        <List exhibitors={exhibitors} stands={stands} />
        <button onClick={this.toggleModal}>Click Me</button>
      </Wrapper>
    );
  }
}
