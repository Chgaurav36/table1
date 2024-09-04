import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import { Upload, Delete } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "2px solid black", // adds border to cells
  padding: theme.spacing(1),
  textAlign: "center", // Center-align all text by default
}));

const ActivityTableCell = styled(StyledTableCell)(({ theme }) => ({
  textAlign: "left", // Left-align text in the Activity column
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    borderBottom: "1px solid black",
  },
}));

const BlackCheckbox = styled(Checkbox)({
  color: "#000", // Set color to black
  "&.Mui-checked": {
    color: "#000", // Set checked color to black
  },
});

const BlackButton = styled(Button)({
  backgroundColor: "#000", // Set background color to black
  color: "#fff", // Set text color to white
  "&:hover": {
    backgroundColor: "#333", // Set hover color to a darker black
  },
});

function createData(
  srNo,
  stages,
  activity,
  status,
  upload,
  action,
  rowSpan = 1
) {
  return { srNo, stages, activity, status, upload, action, rowSpan };
}

const rows = [
  createData(1, "Fencing", "Confirmation From BD", true, "Upload", "Save", 3),
  createData(1, "", "Flat Vacant", true, "VIEW", "Save"),
  createData(1, "", "Gate Location As Per Vastu", false, "Upload", "Save"),
  createData(
    2,
    "Electric Disconnection",
    "All Members Vacant",
    false,
    "Upload",
    "Save",
    4
  ),
  createData(2, "", "All Members Light Bill", false, "Upload", "Save"),
  createData(2, "", "Society Light Bill", false, "Upload", "Save"),
  createData(2, "", "Application", false, "Upload", "Save"),
  createData(
    3,
    "Water Disconnection",
    "All Members Vacant",
    false,
    "Upload",
    "Save",
    3
  ),
  createData(3, "", "Water Bill", false, "Upload", "Save"),
  createData(3, "", "Application", false, "Upload", "Save"),
  createData(
    4,
    "MGL Disconnection",
    "All Members Vacant",
    false,
    "Upload",
    "Save",
    3
  ),
  createData(4, "", "All Members MGL Bill", false, "Upload", "Save"),
  createData(4, "", "Application", false, "Upload", "Save"),
  createData(
    5,
    "Meter Cabin",
    "Temporary Meter Location",
    false,
    "Upload",
    "Save",3
  ),
  createData(5, "", "All Members MGL Bill", false, "Upload", "Save"),
  createData(5, "", "Application", false, "Upload", "Save"),
 
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"#d1d1d1"}}>
          <TableRow>
            <StyledTableCell sx={{ width: "5%" }}>Sr. No.</StyledTableCell>
            <StyledTableCell sx={{ width: "19%" }}>Stages</StyledTableCell>
            <ActivityTableCell sx={{ width: "19%" }}>
              Activity
            </ActivityTableCell>
            <StyledTableCell sx={{ width: "19%" }}>Status</StyledTableCell>
            <StyledTableCell sx={{ width: "19%" }}>
              Upload Document
            </StyledTableCell>
            <StyledTableCell sx={{ width: "19%" }}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {index === 0 || rows[index - 1].srNo !== row.srNo ? (
                <>
                  <StyledTableCell rowSpan={row.rowSpan}>
                    {row.srNo}
                  </StyledTableCell>
                  <StyledTableCell rowSpan={row.rowSpan}>
                    {row.stages}
                  </StyledTableCell>
                </>
              ) : null}
              <ActivityTableCell>{row.activity}</ActivityTableCell>
              <StyledTableCell>
                <BlackCheckbox checked={row.status} />
              </StyledTableCell>
              <StyledTableCell>
                
                {row.upload === "VIEW" ? (
                  <>
                    <Link href="#" underline="hover" style={{color:"black" }}>
                      VIEW
                    </Link>
                    <IconButton aria-label="delete" size="small" color="error">
                      <Delete fontSize="inherit" />
                    </IconButton>
                  </>
                ) : (
                  <IconButton aria-label="upload" size="small">
                  <Link href="#" underline="hover" sx={{ marginRight: "8px", fontSize:"15px", color:"black" }}>
                  Upload
                </Link>
                    <Upload fontSize="inherit" />
                  </IconButton>
                )}
              </StyledTableCell>
              <StyledTableCell>
                <BlackButton variant="contained" size="small">
                  Save
                </BlackButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
