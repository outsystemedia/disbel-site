import React from 'react';
import { DiFirebase, DiDatabase, DiMeteor } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Nossos Serviços</SectionTitle>
    <SectionText>
      Representamos uma série de empresas altamente conceituadas, para oferecer ao mercado distribuidor e de conservação as melhores oportunidades.
      Fazer negócios, esta é a nossa proposta! Entre em contato para saber todas as empresas parceiras!
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Distribuição</ListTitle>
          <ListParagraph>
            Enviamos para todo <br />
            o Brasil!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Facilidade</ListTitle>
          <ListParagraph>
            Entre em contato e faça <br />
            seu pedido conforme suas nessecidades. Simples e rápido! <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMeteor size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Agilidade</ListTitle>
          <ListParagraph>
            Tanto nosso atendimento <br />
            quanto nossa entrega  <br />
            são de extrema eficiência
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
