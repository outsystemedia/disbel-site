import Link from 'next/link';
import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
   {/* <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>disbel</span>
        </a>
      </Link>
    </Div1>  */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Representações</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Nossos serviços</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre nós</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://api.whatsapp.com/send?phone=5511981011181&text=Ol%C3%A1%20Marcos,%20me%20interesso%20pelos%20servi%C3%A7os%20de%20representa%C3%A7%C3%A3o%20da%20Disbel,%20podemos%20conversar?">
          <AiOutlineWechat size="3rem" />
        </SocialIcons>
        {/*<SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>*/}
      </Div3>
    </Container>
);

export default Header;
