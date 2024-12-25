import React from "react";
import { Box, Stack, Chip, CircularProgress } from "@mui/material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Typography from "../../atoms/Typography";
import theme from "../../../../themes";


export interface DueOutstandingCardProps {
  dueDate: string;
  dueAmount: string;
  outstandingAmount: string;
  dueInDays: string;
  progressValue: number;
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
  },
  iconStyle: {
    fontSize: 40,
    color: "#E57399",
  },
  chipStyle: {
    backgroundColor: "#F9B5C3",
    color: "#2C1C28",
    fontWeight: "bold",
  },
  circularProgressWrapper: {
    position: "relative",
    display: "inline-flex",
  },
  circularTextWrapper: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};

const DueOutstandingCard: React.FC<DueOutstandingCardProps> = ({
  dueDate,
  dueAmount,
  outstandingAmount,
  dueInDays,
  progressValue,
}) => {
  return (
    <Box sx={styles.cardContainer}>
      {/* Due Box */}
      <Box sx={styles.detailBox}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <ReceiptLongOutlinedIcon sx={styles.iconStyle} />
          </Box>
          <Chip label={`Due in ${dueInDays}`} sx={styles.chipStyle} size="small" />
        </Stack>
        <Typography variant="h3" text={`Due - ${dueDate}`}/>
        <Typography variant="h2" text={dueAmount} />
      </Box>

      {/* Outstanding Box */}
      <Box sx={styles.detailBox}>
        <Box sx={styles.circularProgressWrapper}>
          <CircularProgress
            variant="determinate"
            value={progressValue}
            size={60}
            thickness={4}
            sx={{ color: theme.palette.secondary.main }}
          />
          <Box sx={styles.circularTextWrapper}>
            <Typography variant="caption" text={`${progressValue}%`}/>
          </Box>
        </Box>
        <Typography variant="h3" text="Outstanding amount" />
        <Typography variant="h2" text={outstandingAmount} />
      </Box>
    </Box>
  );
};

export default DueOutstandingCard;
