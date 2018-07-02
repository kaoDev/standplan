import * as React from "react";
import {Stand} from "./stand.js";
import styled from "react-emotion";
import { List } from './list.js';
import { StandDetail } from './standDetail.js';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import standsJson from "./stands.json";
import exhibitorsJson from "./exhibitors.json";

const PlanWrap = styled("div")({
    display:"flex",
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
  flex:"none",
  flexWrap: "wrap",
  maxWidth: "1200px",
  padding: "0 10px",
  margin: "auto",
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

   unMounts = new Subject();   
  componentDidMount() {
    this.props.stateManager.ModalOpen
    .pipe(takeUntil(this.unMounts))
    .subscribe(ModalOpen => {
      this.setState({ ModalOpen });
    });  
    this.props.stateManager.ModalTarget
    .pipe(takeUntil(this.unMounts))
    .subscribe(ModalTarget => {
      this.setState({ ModalTarget });
    });  
  }

  componentWillUnmount() {
  this.unMounts.next();
  }
  //Modal functions
  toggleModal = () => {
    this.props.stateManager.ModalOpen.next(!this.props.stateManager.ModalOpen.getValue());
    console.log(this.props.stateManager.ModalOpen);
  };
  
  updateModalTarget = (x) => {
    this.props.stateManager.ModalTarget.next(x);
    this.props.stateManager.ModalOpen.next(!this.props.stateManager.ModalOpen.getValue());
    console.log(x);
  }
  
  
  render() {
    const { stands, exhibitors, ModalOpen, ModalTarget } = this.state;

    return(
    <Wrapper> 
      <StandDetail show={ModalOpen} onClose={this.toggleModal} target={ModalTarget}/> 
      <PlanWrap>
        {stands.map((stand, index) => {
          return <Stand clickFunction={this.updateModalTarget("1")} standNr={stand.name} type={stand.type} key={index} standId={stand.id} standWidth={stand.width} standHeight={stand.height}/>
        })}
      </PlanWrap>
      <List exhibitors={exhibitors} stands={stands}/>
      <button onClick={this.toggleModal}>Click Me</button>
    </Wrapper> 
    )
}
};