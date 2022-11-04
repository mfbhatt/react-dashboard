import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import { useQuery } from '@apollo/client';

 import { GET_USERS_QUERY } from "./../../common/constants";

const Team = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
    },
    {
      field: "lastName",
      headerName: "Last Name",
    },
    {
      field: "fullName",
      headerName: "Full Name",
    }
  ];

  const { loading, error, data } = useQuery(GET_USERS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
   
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {!loading? (<DataGrid checkboxSelection rows={data.getAllUsers} columns={columns} />): (<div>loading...</div>)}
      </Box>
    </Box>
  );
};

export default Team;