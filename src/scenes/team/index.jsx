import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import configData from './../../config.json';

import useFetch from '../../hooks/useFetch';

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


  const { data, loading, error, reFetchData } = useFetch(configData.SERVER_URL);

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
        {!loading? (<DataGrid checkboxSelection rows={data} columns={columns} />): (<div>loading...</div>)}
      </Box>
    </Box>
  );
};

export default Team;