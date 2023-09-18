import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledFooter = styled.footer`
  padding: 80px 0 24px;
  margin-top: 100px;
  background-color: ${props => props.theme.colors.headerBackground};
`;

export const FooterContainer = styled.div`
  @media screen and (${devices.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  /* justify-content: space-around; */
  /* margin-bottom: 16px; */
  /* gap: 60px; */
`;

export const EmploymentOptions = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 16px;
  margin: 0 auto 24px;
  padding: 8px 16px;
  /* margin-bottom: 16px; */
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  width: fit-content;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.mainTextColor};
  gap: 12px;
  margin-bottom: 24px;
`;

export const FooterLinkListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  cursor: pointer;
`;

export const FooterLinkListRef = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
