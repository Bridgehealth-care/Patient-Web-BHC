import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMedicalRecords } from "../../data/mockData";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Header from "../../components/Header";
import PrintIcon from "@mui/icons-material/Print";

const MedicalRecord = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.6 },
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
      headerName: "Doctor Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "presciptionname",
      headerName: "Presciption Name",
      flex: 1,
    },
    {
      field: "medicalreport",
      headerName: "Medical Report",
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
            borderRadius="4px"
            backgroundColor={
              status === "Print"
                ? colors.greenAccent[600]
                : status === "notAttended"
                ? colors.redAccent[700]
                : colors.yellowAccent[700]
            }
          >
            {status === "view" && <PrintIcon />}
            {status === "notAttended" && <DoNotDisturbAltIcon />}
            {status === "Pending" && <PendingActionsIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Medical Records" subtitle="All your Medical Records..." />
      <Box
        m="50px 0 0 0"
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
         
          rows={mockDataMedicalRecords}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default MedicalRecord;
