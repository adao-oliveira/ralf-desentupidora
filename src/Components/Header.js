import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg-home.svg'
import HeaderContent from './HeaderContent'
import Navigation from './Navigation'

function Header() {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
min-height: 70vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
        @media screen and (max-width: 1347px){
            padding: 5rem 14rem;
        }
        @media screen and (max-width: 1186px){
            padding: 5rem 8rem;
        }
        @media screen and (max-width: 990px){
            padding: 5rem 10px;
        }
    }
    @media screen and (min-width: 740px) {
        .header-content{
            min-height: 80vh;
        }
    }
`;

export default Header;
