import React from "react";
import styled from "styled-components";

const date = new Date();
const currentYear = date.getFullYear();

function AppFooter({ info }) {
  const { email, github } = info;
  return (
    <FooterContainer>
      <FooterColumn>{currentYear} Lee Minho All rights reserved.</FooterColumn>
      <FooterColumn>
        <FooterList>
          <FooterItem>
            <FooterLink href={github} target='_blank'>
              <i class='fab fa-github'></i>
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href={email}>
              <i class='fas fa-at'></i>
            </FooterLink>
          </FooterItem>
        </FooterList>
        <select name='' disabled>
          <option value='ko'>한국어</option>
          <option value='en'>English</option>
        </select>
      </FooterColumn>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 50;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 0px;
`;

const FooterColumn = styled.div`
  margin: 0 auto;
  display: flex;
`;

const FooterList = styled.ul`
  display: flex;
`;

const FooterItem = styled.li`
  margin-right: 15px;
`;

const FooterLink = styled.a`
  &:hover {
    color: #184059;
  }
`;

export default AppFooter;
