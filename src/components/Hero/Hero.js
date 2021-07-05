import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, ButtonBack, ButtonFront, Button } from './HeroStyles';



import { GridContainer, Img } from './ImgStyles';
import { projects } from './constants';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <div>
            <GridContainer>
              {projects.map((p, i) => {
                return (
                  <Img src={p.image} />
                );
              })}
            </GridContainer>
          </div>
        </SectionTitle>
        <SectionText>
        Fazendo negócios à 20 anos, representamos uma série de empresas altamente conceituadas.
        </SectionText>
        <ButtonBack><ButtonFront><Button onClick={props.handleClick} href="https://api.whatsapp.com/send?phone=5511981011181&text=Ol%C3%A1%20Marcos,%20me%20interesso%20pelos%20servi%C3%A7os%20de%20representa%C3%A7%C3%A3o%20da%20Disbel,%20podemos%20conversar?">Entre em contato</Button></ButtonFront></ButtonBack>
      </LeftSection>
    </Section>
  </>
);

export default Hero; 