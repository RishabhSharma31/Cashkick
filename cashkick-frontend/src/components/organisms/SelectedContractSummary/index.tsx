import React from 'react';
import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';

export interface SelectedContractCardProps {
  term: string;
  selectedContracts: number;
  payBackAmount: string;
  ratePercentage: string;
  rateAmount: string;
  totalPayout: string;
  onSubmit: () => void;
}

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  color: '#FFFFFF',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
}));

const LabelBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '4px',
});

const SliderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const Divider = styled('hr')({
  border: 'none',
  borderTop: '1px solid #333',
  margin: '8px 0',
});

const SelectedContractSummaryCard: React.FC<SelectedContractCardProps> = ({
  term,
  selectedContracts,
  payBackAmount,
  ratePercentage,
  rateAmount,
  totalPayout,
  onSubmit,
}) => {
  return (
    <CardContainer>
      <Typography variant="h2" text='Summary' />
      <LabelBox>
        <Typography variant="h3" text='Term' />
        <Typography variant="h4" text={term} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Selected contracts' />
        <Typography variant="h4" text={`${selectedContracts}`} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Pay back amount' />
        <Typography variant="h4" text={payBackAmount} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Rate %' />
        <Typography variant="h4" text={`(${ratePercentage}) ${rateAmount}`} />
      </LabelBox>
      <Divider />
      <LabelBox>
        <Typography variant="h3" text='Total Payout' />
        <Typography variant="h4" text={totalPayout} />
      </LabelBox>
      <ButtonComponent
        propVariant="contained"
        onClickEvent={onSubmit}
        buttonText="Submit Your Credit"
        type="contained"
      />
    </CardContainer>
  );
};

export default SelectedContractSummaryCard;
