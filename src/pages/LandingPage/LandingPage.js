import React from "react";
import Navbar from "../../components/Navbar/NavLanding";
import { HeaderWrapper, MainContent, PageWrapper, Row,
  Column, BottomContain, Image, Cover } from "./LandingPage.style";
import landingPageImg from '../../assets/pictures/Education-cover.jpeg';
import { FooterContainer } from '../../components/Footer/FooterContainer'
import AppButton from '../../components/Button/Button.js'

function LandingPage() {
  return (
    <PageWrapper>
        <HeaderWrapper>
            <Navbar />
        </HeaderWrapper>
            <MainContent>
          
                <img className="hero_img" src={landingPageImg} alt="hero"/>
              
                <Row>
               
                    <Column className="text">
                    <h4>Sen-Gen-Education</h4>  
                    <h3>It's never too late to upgrade</h3>
                    <p>Sen-Gen Education, provides broad opportunities for education, for senior citizens, in the domain of their own expertise. Becuase, Evolution is the only inevitable.</p>
                    <div className="mid_button"><AppButton color="secondary">Know more</AppButton></div>
                    </Column>
                </Row>
                <Row className="row2">
           
                    <Column className="text">
                    <h4>Earn Certificates from Global Universities</h4>
                    <h3>Highly Accreditted</h3>
                    <p>Want to know, what's happening internationally?</p>
                    <p>Get exposure to world class universities and professors, and socialize with people of similar interests.</p>
                    <div className="mid_button"><AppButton color="secondary">Get Started!</AppButton></div>
                    </Column>
                </Row>
              </MainContent> 
              <BottomContain>
                <FooterContainer />
              </BottomContain>
    </PageWrapper>
  );
}

export default LandingPage;