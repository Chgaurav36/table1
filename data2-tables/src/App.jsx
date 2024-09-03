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
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
    {
      srNo: 1,
      stage: "Fencing",
      activity: "Confirmation from BD",
      status: true,
      uploadDocument: "VIEW",
      action: "Save",
    },
  ];

  return (
    <TableContainer  component={Paper}>
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
                <TableRow>{row.status ? "✓" : ""}</TableRow>
                <TableRow>{row.status ? "✓" : ""}</TableRow>
                <TableRow>{row.status ? "✓" : ""}</TableRow>
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
