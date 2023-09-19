import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const StyledFooter = styled.footer`
  padding: 80px 0 12px;
  margin-top: 100px;

  background-color: ${props => props.theme.colors.notMainBackground};
  color: ${props => props.theme.colors.notMainTextColor};

  transition: color ${baseTransition}, background-color ${baseTransition};

  @media screen and (${devices.onlymobile}) {
    padding: 40px 0 16px;
  }
`;

export const FooterContainer = styled.div`
  @media screen and (${devices.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const EmploymentOptions = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: fit-content;

  margin: 0 auto 24px;
  padding: 8px 16px;
  gap: 16px;

  border-radius: 24px;
  background-color: ${props => props.theme.colors.footerElementsBgd};

  @media screen and (${devices.onlymobile}) {
    font-size: 18px;
    margin-bottom: 36px;
  }
`;

export const EmploymentLocation = styled.p`
  @media screen and (${devices.onlymobile}) {
    font-size: 20px;
  }

  font-size: 24px;
`;

export const EmploymentText = styled.p`
  @media screen and (${devices.onlymobile}) {
    font-size: 14px;
  }

  font-size: 18px;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
  margin-bottom: 24px;

  @media screen and (${devices.onlymobile}) {
    gap: 8px;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 48px;

  @media screen and (${devices.onlymobile}) {
    gap: 12px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 16px;

  @media screen and (${devices.onlymobile}) {
    font-size: 12px;
  }
`;
