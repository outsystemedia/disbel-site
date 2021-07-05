import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Parceiros'},
  { number: 20, text: 'Anos de Mercado', },
  { number: 500, text: 'Clientes Satisfeitos', },
  { number: 100, text: 'Cidades Atendidas', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Nossas Conquistas</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
