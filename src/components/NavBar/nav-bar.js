import { ReactComponent as Logo } from "../../assets/logo.svg";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';


const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  text-align: center;
  background-color: ${colors.yellow[300]};
  gap: 50px;

  @media screen and (max-width: 360px){
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: ${colors.yellow[300]};
    gap: 50px;
    max-width:360px;
   };

`;

const StyledList = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 360px){
     position:absolute;
     align-items:center;
     width:100%;
     height: 5vh;
     justify-content:center;
     flex-direction:row;
     background-color:${colors.yellow[300]};
     top:80px;
     left:${((open)=>open? "0px":"-500px")};
   };
 
`;

const StyledLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  font-weight: 500;
  padding: 5px;

  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
    border-radius: 10px;
  }

`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.black};
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 360px){
     
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    text-decoration: none;
   }
`;

 const MobileIcon = styled.div`
   display:none;

   @media screen and (max-width: 360px){
     
     display:flex;
     align-items:center;
     left:20px;
    &:hover{
      cursor:pointer;
    }

   }
`  


export default function Navbar() {

  const [showMenu,setShowMenu] = useState(false);

  return (
    <StyledNav>
      <StyledLogo>
        <Logo size={40}/>
        <div>Alexander Nieves</div>
      </StyledLogo>
      
      <StyledList >
        <StyledLink open={showMenu} href="/">Home</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/portfolio">Portfolio</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
      </StyledList>

      <Icon>
        <StyledLink href="https://twitter.com/alexand73785230" target="_blank">
          <BsTwitter />
        </StyledLink>
        <StyledLink href="https://github.com/AlexanderNievesC" target="_blank">
          <AiFillGithub  />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/alexander-nieves-6669bb136/"
          target="_blank"
        >
          <AiFillLinkedin />
        </StyledLink>
        <MobileIcon onclick={()=>(setShowMenu(!showMenu))} >
        <FaBars  />
        </MobileIcon>
      </Icon>
      
    </StyledNav>
  );
}
