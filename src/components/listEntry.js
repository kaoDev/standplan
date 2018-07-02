import * as React from "react";
import styled from "react-emotion";




  

export const ListEntry = ({standWidth, standHeight, standNr, exhName, exhField}) => (
    <tr>
    <td>{standNr}</td>
    <td>{standHeight*standWidth}</td>
    <td>{exhName}</td>
    <td>{exhField}</td>
  </tr> 
);
