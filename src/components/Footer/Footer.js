import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Ligue</LinkTitle>
          <LinkItem href="tel:1126266039">(11) 2626-6039</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:disbel@disbelonline.com">
            disbel@disbelonline.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://google.com">
            <AiOutlineWechat size="3rem" />
          </SocialIcons>
          {/*<SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>*/}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    
  );
};

export default Footer;
