import CommonPageHero from "@/components/common/common-page-hero";
import { OurHistoryTimeline } from "@/components/our-history";
import React from "react";

const ourHistory = `
The Sexual and Reproductive Health and Rights (SRHR) Alliance hereinafter referred to as “The Alliance” was established at the Netherlands in 2010 by 5 Dutch organizations namely Rutgers WPF, AMREF Netherlands, Simavi, dance4life and Choice for youth and sexuality who funded 7 local partner organizations. In 2011, there was a Memorandum of Understanding (MoU) between Centre for the Study of Adolescents (CSA), African Medical Research Foundation (AMREF) Kenya, Network for
Adolescents and Youth of Africa (NAYA), Great Lakes University of Kisumu (GLUK), NAIROBITS, Support Activities in Poverty Eradication and Health (SAIPEH), and Africa Alive!. These organizations begun to implement the Unite for Body Rights Programme (UFBR) which was a five- year program (2011-2015) funded by the Dutch Ministry of Foreign Affairs (MoFA) and developed with the aim to work towards a society in which everyone is able to make safe and informed decisions concerning sexual and reproductive health and rights. The key priority areas included: Improved health and reproductive health services; Comprehensive Sexuality Education (CSE); Combating Sexual and Gender Based Violence (SGBV), and freedom of expression of sexual diversity and gender identity, which were linked to MDGs 3, 5 and 6, and the ICPD plan of action which called for all people to have access to comprehensive reproductive health care, including voluntary family planning, safe pregnancy and childbirth services, and the prevention and treatment of sexually transmitted infections.. Girls, boys, and marginalized groups have sexual and reproductive rights irrespective of their background.

In 2013 the membership of the Alliance grew from 5 to 8 international partners (dance4life, Stop AIDS Now!, The International Planned Parenthood Federation (IPPF), and Child Helpline International (CHI) and from 7 to 17 local partners (Clinton Health Access Initiative (CHAI), Child Line Kenya (CLK), Family Health Options Kenya (FHOK), Maximizing facts on AIDS (MAXFACTA), Nairobits Trust, National Empowerment Network of People Living with HIV/AIDS in Kenya (NEPHAK), UNESCO, Women Fighting AIDS in Kenya (WOFAK) and the World Starts With Me Alumni Youth Advocacy Network (WAYAN). The 17 organizations implemented a 3- year programme (2013-2015) Access, Services and Knowledge (ASK) programme also funded by the Dutch Ministry of Foreign Affairs with the aim of enhancing uptake of Sexual Reproductive Health (SRH) services among young people aged between 10-24 years, including underserved groups. The successes of these two programs combined with the need of SRHR among young people in Kenya and the implementing areas in particular, led to the implementation of the third MoFA funded program, Get Up Speak Out (GUSO) that focuses on empowering young people to voice their own SRHR.
`;

const SRHRHistory = () => {
  return (
    <>
      <CommonPageHero text="Our History" bgImg="" />

      <OurHistoryTimeline />
    </>
  );
};

export default SRHRHistory;
