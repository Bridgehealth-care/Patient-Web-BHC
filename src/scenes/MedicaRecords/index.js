import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMedicalRecordsHealthReport } from "../../data/mockData";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Header from "../../components/Header";
import PrintIcon from "@mui/icons-material/Print";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";

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
      field: "dcotorName",
      headerName: "Doctor Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "doctorid",
      headerName: "Doctor Id",
      flex: 1,
    },
    {
      field: "medicalreport",
      headerName: "Medical Report",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
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
          }
      },
    
      {
      field: "share",
      headerName: "Share",
      flex: 1,
      renderCell: ({ row: { share } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              share === "Print"
                ? colors.greenAccent[600]
                : share === "notAttended"
                ? colors.redAccent[700]
                : colors.yellowAccent[700]
            }
          >
            <ScreenShareIcon/>
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {share}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Medical Records" subtitle="All your Medical Records..." />
      <Box m="20px" display="flex" justifyContent="spaceBetween">
        <Box
          backgroundColor="green"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          borderRadius="6px"
          width="250px"
          sx={{ cursor: "pointer" }}
          height="40px"
        >
          Health Report
        </Box>
      

        <Box
          backgroundColor="green"
          width="250px"
          height="40px"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          borderRadius="6px"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Insurence
          </Typography>
        </Box>
        <Box
          backgroundColor="green"
          width="250px"
          height="40px"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          borderRadius="6px"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Prescription
          </Typography>
        </Box>
        <Box
          backgroundColor="green"
          width="250px"
          height="40px"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          borderRadius="6px"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Lab Test
          </Typography>
        </Box>
        <Box
          m="0 auto"
          p="5px"
          width="250px"
          height="40px"
          backgroundColor="green"
          display="flex"
          sx={{ cursor: "pointer" }}
          justifyContent="center"
          borderRadius="6px"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            Receipts
          </Typography>
        </Box>
      </Box>
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
        <DataGrid rows={mockDataMedicalRecordsHealthReport} columns={columns} />
      </Box>
    </Box>
  );
};

export default MedicalRecord;
