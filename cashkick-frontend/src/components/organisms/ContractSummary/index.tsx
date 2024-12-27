import React from 'react';
import { Box, Slider, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import theme from '../../../../themes';
import { SUMMARY_CARD, BUTTON_LABELS } from '../../../Constants';

export interface SummaryCardProps {
  term: string;
  selectedContracts: number;
  sliderValue: number;
  maxAmount: string;
  payBackAmount: string;
  ratePercentage: string;
  rateAmount: string;
  totalPayout: string;
  onSliderChange: (value: number) => void;
  onReset: () => void;
  onReview: () => void;
}

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  color: theme.palette.common.white,
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

const SummaryCard: React.FC<SummaryCardProps> = ({
  term,
  selectedContracts,
  sliderValue,
  maxAmount,
  payBackAmount,
  ratePercentage,
  rateAmount,
  totalPayout,
  onSliderChange,
  onReset,
  onReview,
}) => {
  return (
    <CardContainer>
      <Typography variant="h2" text={SUMMARY_CARD.summary}/>
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.term}/>
        <Typography variant="h4" text={term} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.selectedContracts} />
        <Typography variant="h4" text={`${selectedContracts}`} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.slideToAutoselect}/>
        <ButtonComponent
          propVariant="outlined"
          onClickEvent={onReset}
          buttonText={BUTTON_LABELS.reset}
          type='reset'
        />
      </LabelBox>
      <SliderContainer>
        <Slider
          value={sliderValue}
          onChange={(e, value) => onSliderChange(value as number)}
          aria-label="Auto-select Slider"
          sx={{
            color: theme.palette.secondary.main,
          }}
        />
      </SliderContainer>
      <Typography variant="h3" text={`${sliderValue.toFixed(2)} selected of ${maxAmount}`} />
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.payBackAmount} />
        <Typography variant="h4" text={payBackAmount} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.rate} />
        <Typography variant="h4" text={`(${ratePercentage}) ${rateAmount}`} />
      </LabelBox>
      <Divider />
      <LabelBox>
        <Typography variant="h3" text={SUMMARY_CARD.totalPayout} />
        <Typography variant="h4" text={totalPayout} />
      </LabelBox>
      <ButtonComponent
        propVariant="contained"
        onClickEvent={onReview}
        buttonText={BUTTON_LABELS.reviewCredit}
        type='contained'
      />
    </CardContainer>
  );
};

export default SummaryCard;
