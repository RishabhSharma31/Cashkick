import React from "react";
import { Box } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import Typography from "../../atoms/Typography";

export interface CreditDetailsCardProps {
  termCap: string; 
  availableCredit: string; 
  maxInterestRate: string;
}

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  detailBox: {
    flex: 1,
    backgroundColor: "#1C1C28",
    borderRadius: "12px",
    padding: 3,
    textAlign: "center",
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 1,
  },
  iconStyle: {
    fontSize: 40,
    color: "#A996F2", 
  },
  titleText: {
    color: "#A0A3BD",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  valueText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "8px",
    color: "#FFFFFF",
  },
};

const CreditDetailsCard: React.FC<CreditDetailsCardProps> = ({
  termCap,
  availableCredit,
  maxInterestRate,
}) => {
  return (
    <Box sx={styles.cardContainer}>
      {/* Term Cap */}
      <Box sx={styles.detailBox}>
        <Box sx={styles.iconBox}>
          <CalendarMonthOutlinedIcon sx={{ ...styles.iconStyle, color: "#A996F2" }} />
        </Box>
        <Typography cssDesign={styles.titleText} text="Term cap" />
        <Typography cssDesign={styles.valueText} text={termCap} />
      </Box>

      {/* Available Credit */}
      <Box sx={styles.detailBox}>
        <Box sx={styles.iconBox}>
          <AttachMoneyOutlinedIcon sx={{ ...styles.iconStyle, color: "#75D1E0" }} />
        </Box>
        <Typography cssDesign={styles.titleText} text="Available credit" />
        <Typography cssDesign={styles.valueText} text={availableCredit} />
      </Box>

      {/* Max Interest Rate */}
      <Box sx={styles.detailBox}>
        <Box sx={styles.iconBox}>
          <PercentOutlinedIcon sx={{ ...styles.iconStyle, color: "#E6C08C" }} />
        </Box>
        <Typography cssDesign={styles.titleText} text="Max interest rate" />
        <Typography cssDesign={styles.valueText} text={maxInterestRate} />
      </Box>
    </Box>
  );
};

export default CreditDetailsCard;