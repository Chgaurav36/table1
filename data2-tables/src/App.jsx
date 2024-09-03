import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function PreExecutionTable() {
  const rows = [
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 2,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: false,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 3,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: false,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 4,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 5,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 6,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 7,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 8,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 9,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 10,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 11,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 12,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 13,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 14,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 15,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 16,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1300 }} aria-label="pre-execution table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. No.</TableCell>
            <TableCell>Stages</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Upload Document</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.srNo}>
              <TableCell>{row.srNo}</TableCell>
              <TableCell>{row.stage}</TableCell>
              <TableCell>
                <TableRow>{row.activity}</TableRow>
                <TableRow>{row.activity}</TableRow>
                <TableRow>{row.activity}</TableRow>
              </TableCell>
              <TableCell>
                <TableRow>
                  {row.status ? <Checkbox defaultChecked /> : <Checkbox />}
                </TableRow>
                <TableRow>
                  {row.status ? <Checkbox defaultChecked /> : <Checkbox />}
                </TableRow>
                <TableRow>
                  {row.status ? <Checkbox defaultChecked /> : <Checkbox />}
                </TableRow>
              </TableCell>
              <TableCell>{row.uploadDocument}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PreExecutionTable;
