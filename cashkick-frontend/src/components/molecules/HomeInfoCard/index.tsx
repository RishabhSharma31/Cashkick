import React from "react";
import { Box, Stack, Chip, CircularProgress, styled } from "@mui/material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Typography from "../../atoms/Typography";
import theme from "../../../../themes";
import { MOLECULE_TEXT } from "../../../Constants";

export interface DueOutstandingCardProps {
  dueDate: string;
  dueAmount: string;
  outstandingAmount: string;
  dueInDays: string;
  progressValue: number;
}

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 2,
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
}));

const DetailContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "12px",
  padding: 3,
}));

const CircularProgressContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
}));

const CircularTextContainer = styled(Box)(({ theme }) => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ReceiptIcon = styled(ReceiptLongOutlinedIcon)(({theme}) => ({
  fontSize: 40,
  color: "#E57399",
}));

const ChipTag = styled(Chip)(({ theme }) => ({
  backgroundColor: "#F9B5C3",
  color: "#2C1C28",
  fontWeight: "bold",
}));

const DueOutstandingCard: React.FC<DueOutstandingCardProps> = ({
  dueDate,
  dueAmount,
  outstandingAmount,
  dueInDays,
  progressValue,
}) => {
  return (
    <CardContainer>
      {/* Due Box */}
      <DetailContainer>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <ReceiptIcon />
          </Box>
          <ChipTag label={`Due in ${dueInDays}`} size="small" />
        </Stack>
        <Typography variant="h3" text={`Due - ${dueDate}`}/>
        <Typography variant="h2" text={dueAmount} />
      </DetailContainer>

      {/* Outstanding Box */}
      <DetailContainer>
        <CircularProgressContainer>
          <CircularProgress
            variant="determinate"
            value={progressValue}
            size={60}
            thickness={4}
            sx={{ color: theme.palette.secondary.main }}
          />
          <CircularTextContainer>
            <Typography variant="h3" text={`${progressValue}%`}/>
          </CircularTextContainer>
        </CircularProgressContainer>
        <Typography variant="h3" text={MOLECULE_TEXT.outstandingAmount} />
        <Typography variant="h2" text={outstandingAmount} />
      </DetailContainer>
    </CardContainer>
  );
};

export default DueOutstandingCard;
