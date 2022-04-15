import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { QuizList } from "../components";

// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
  height: "100%",
});

const ContentStyle = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="OnBrand Coding Session">
      <ContentStyle>
        <Box p={3}>
          <Typography variant="h4" fontWeight="bold">
            OnBrand Coding Session #1
          </Typography>

          <QuizList />
        </Box>
      </ContentStyle>
    </RootStyle>
  );
}
