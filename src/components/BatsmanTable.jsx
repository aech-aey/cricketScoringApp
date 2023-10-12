import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox
} from "@mui/material";

const BatsmanTable = ({
  playerData,
  checkedBatsman,
  handleBatsmanCheckboxChange
}) => {
  return (
    <div>
      <Table
        style={{
          backgroundColor: "black",
          maxWidth: "100%",
          tableLayout: "fixed"
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell className="batsmanTable hbt">Facing</TableCell>
            <TableCell className="batsmanTable hbt">Name</TableCell>
            <TableCell className="batsmanTable hbt">Runs</TableCell>
            <TableCell className="batsmanTable hbt">Balls</TableCell>
            <TableCell className="batsmanTable hbt">Fours</TableCell>
            <TableCell className="batsmanTable hbt">Sixes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerData.map((batsman, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox
                  checked={
                    (checkedBatsman === "firstBatsman" && index === 0) ||
                    (checkedBatsman === "secondBatsman" && index === 1)
                  }
                  onChange={(e) =>
                    handleBatsmanCheckboxChange(
                      e,
                      index === 0 ? "firstBatsman" : "secondBatsman"
                    )
                  }
                  style={{ color: "white" }}
                />
              </TableCell>
              <TableCell
                className="nameb"
                style={{ color: "#4791db", fontWeight: "600" }}
              >
                {batsman.name}
              </TableCell>
              <TableCell className="batsmanTable">{batsman.runs}</TableCell>
              <TableCell className="batsmanTable">{batsman.balls}</TableCell>
              <TableCell className="batsmanTable">{batsman.four}</TableCell>
              <TableCell className="batsmanTable">{batsman.six}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BatsmanTable;
