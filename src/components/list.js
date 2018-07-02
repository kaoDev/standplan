import * as React from "react";
import styled from "react-emotion";
import {ListEntry} from "./listEntry.js"

const ListWrap = styled("table")({
    border: "1px solid white",
    backgroundColor: "lightgrey",
    borderCollapse: "collapse"
});
const searchExhibitor = (exhibitors, exhId) => {
    const exhibitor = exhibitors.find(({ id }) => exhId === id) || {};
    return exhibitor;
  };


export const List = ({stands, exhibitors }) => (
    <ListWrap>
     <tr>
      <th>Stand Nr.</th>
      <th>Größe [m²]</th>
      <th>Name</th>
      <th>Branche</th>
     </tr>
    {stands.filter(stand => stand.type === "stand").map((stand, index) => {
      const exhibitor = searchExhibitor(exhibitors, stand.exhibitor);
      return <ListEntry key={index} standNr={stand.name} standWidth={stand.width} standHeight={stand.height} exhName={exhibitor.name} exhField={exhibitor.field}/>;
    })}
</ListWrap>
);