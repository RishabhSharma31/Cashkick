import React from "react";
import { Box, styled } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import Typography from "../../atoms/Typography";
import { MOLECULE_TEXT } from "../../../Constants";

export interface CreditDetailsCardProps {
  termCap: string; 
  availableCredit: string; 
  maxInterestRate: string;
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
  textAlign: "center",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 1,
}));

const CalendarIcon = styled(CalendarMonthOutlinedIcon)(({theme}) => ({
  fontSize: 40,
  color: theme.palette.custom.purple, 
}));

const AttachMoneyIcon = styled(AttachMoneyOutlinedIcon)(({theme}) => ({
  fontSize: 40,
  color: theme.palette.custom.skyBlue, 
}));

const PercentageIcon = styled(PercentOutlinedIcon)(({theme}) => ({
  fontSize: 40,
  color: theme.palette.custom.yellow, 
}));

const CreditDetailsCard: React.FC<CreditDetailsCardProps> = ({
  termCap,
  availableCredit,
  maxInterestRate,
}) => {
  return (
    <CardContainer>
      {/* Term Cap */}
      <DetailContainer>
        <IconContainer>
          <CalendarIcon />
        </IconContainer>
        <Typography variant="h3" text={MOLECULE_TEXT.termCap} />
        <Typography variant="h2" text={termCap} />
      </DetailContainer>

      {/* Available Credit */}
      <DetailContainer>
        <IconContainer>
          <AttachMoneyIcon />
        </IconContainer>
        <Typography variant="h3" text={MOLECULE_TEXT.availableCredit} />
        <Typography variant="h2" text={availableCredit} />
      </DetailContainer>

      {/* Max Interest Rate */}
      <DetailContainer>
        <IconContainer>
          <PercentageIcon />
        </IconContainer>
        <Typography variant="h3" text={MOLECULE_TEXT.maxInterestRate} />
        <Typography variant="h2" text={maxInterestRate} />
      </DetailContainer>
    </CardContainer>
  );
};

export default CreditDetailsCard;
