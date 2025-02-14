import React from 'react';
import styled from 'styled-components';
import config from '../../config';
import Dial from '../Dial';
import Countdown, {CountdownRenderProps} from 'react-countdown';
import Button from '../Button';

interface LaunchCountdownProps {
  deadline: Date;
  description: string;
  descriptionLink: string;
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({deadline, description, descriptionLink}) => {
  const percentage =
    ((Date.now() - config.baseLaunchDate.getTime()) / (deadline.getTime() - config.baseLaunchDate.getTime())) * 100;

  const countdownRenderer = (countdownProps: CountdownRenderProps) => {
    const {days, hours, minutes, seconds} = countdownProps;
    const h = String(days * 24 + hours);
    const m = String(minutes);
    const s = String(seconds);
    return (
      <StyledCountdown>
        {h.padStart(2, '0')}:{m.padStart(2, '0')}:{s.padStart(2, '0')}
      </StyledCountdown>
    );
  };
  return (
    <StyledCard>
        <StyledCountdownWrapper>
          <StyledCountdownTitle>{description}</StyledCountdownTitle>
          <Countdown date={deadline} renderer={countdownRenderer} />
        </StyledCountdownWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 450px;
  margin:0 auto;
  background-color: rgba(0,0,0,0.5);
  border: 0px solid ${(props) => props.theme.color.grey[900]};
  box-sizing: border-box;
  padding: 36px;
  border-radius: 48px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;

`;

const StyledCountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const StyledCountdownTitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 0;
`;

const StyledCountdown = styled.p`
  font-size: 40px;
  color: #fff;
  margin: 0;
`;

const StyledDescriptionButton = styled.button`
  background-color: #271c20;
  align-items: center;
  border: 0;
  border-radius: 24px;
  margin-top: 32px;
  box-shadow: 0px 2px 10px #d5d5d544;
  color: ${(props) => props.theme.color.grey[500]};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 64px;
  justify-content: center;
  outline: none;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.color.grey[300]};
  }
`;

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

export default LaunchCountdown;
