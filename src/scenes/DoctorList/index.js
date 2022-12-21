import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataDocs } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
const DoctorList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "docid", headerName: "Doctor Id", flex: 1 },
    {
      field: "sex",
      headerName: "Profile Picture",
      renderCell: ({ row: { sex } }) => {
        return (
          <Box
            width="90%"
            m="0 auto"
            p="10px"
            display="flex"
            justifyContent="center"
            borderRadius="50%"
          >
            {sex === "Female" && (
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src="https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer-thumbnail.png"
              ></img>
            )}
            {sex === "Male" && (
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              ></img>
            )}
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "time", headerName: "Time", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },

    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },
    {
      field: "specialization",
      headerName: "Specialization",
      flex: 1,
    },
    {
      field: "fees",
      headerName: "Fees",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "Done"
                ? colors.greenAccent[600]
                : status === "notAttended"
                ? colors.redAccent[700]
                : colors.yellowAccent[700]
            }
            borderRadius="4px"
          >
            {status === "Done" && <VerifiedIcon />}

            {status === "Active" && <PendingActionsIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="18px">
      <Header title="DOCTORS" subtitle="List of Doctors you have visited..." />
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
            color: colors.greenAccent[500],
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            display: "none",

            backgroundColor: colors.blueAccent[700],
          },

          "& .css-1j9kmqg-MuiDataGrid-toolbarContainer": {
            display: "none",
          },
        }}
      >
        <DataGrid
          rows={mockDataDocs}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default DoctorList;
