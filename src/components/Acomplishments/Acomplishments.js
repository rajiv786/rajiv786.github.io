import React from 'react';
import Link from 'next/link';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [ 
  { number: 5, text: 'Blog on Technology', link:'https://www.google.com/',url:'link'},
  { number: 10, text: 'MERN Stack Projects',link:'',url:'link' },
  { number: 20, text: 'Javascript Project as learning',link:'value2',url:'link'},
  { number: 200, text: 'Qwiklabs lab Completed',link:'value3',url:'link' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <Link href={card.link}><BoxText>{card.url}</BoxText></Link>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
