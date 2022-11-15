import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Seasoned and independent Front End Developer with 9 months of experience in blending the art of design with the skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
        </SectionText>
        <Link href="#tech" passHref>
        <Button>Learn More</Button>
        </Link>
       
      </LeftSection>
    </Section>
  </>
);

export default Hero;