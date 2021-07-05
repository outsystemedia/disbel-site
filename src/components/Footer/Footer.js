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
          <SocialIcons href="https://api.whatsapp.com/send?phone=5511981011181&text=Ol%C3%A1%20Marcos,%20me%20interesso%20pelos%20servi%C3%A7os%20de%20representa%C3%A7%C3%A3o%20da%20Disbel,%20podemos%20conversar?">
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
