import {
  Box,
  Button,
  Card,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { tokens } from "../../theme";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { files } from "../../data/mockData";

function DepartmentFile() {
  const { item, item2 } = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("department :" + item + " subDepartment :" + item2);

  return (
    <Box mm="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={`${item}`} subtitle={`Welcome to ${item2}`} />
      </Box>
      <Box>
        {files
        .filter((file) => (file.department === item && file.subDepartment === item2 ) )
        .map((file, index) => (
          <Box
            key={index}
            sx={{ backgroundColor: "", width: "60%", borderBottom: 1, m: 3 }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItemText primary={file.filename} />
              <Button
                sx={{
                  mb: 0.3,
                  color: colors.grey[200],
                  backgroundColor: colors.primary[400],
                  ":hover": {
                    backgroundColor: colors.blueAccent[500],
                  },
                }}
              >
                Download
              </Button>
            </Container>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DepartmentFile;
