import React from 'react'
import styled from 'styled-components'
import Secondarybutton from './SecondaryButton'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import '../styles/efect.css'

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left cascade>
                <div className="left-content">
                    <div className="left-text-container">
                        <h2>Precisa de uma desentupidora em <span>Campinas?</span></h2>
                        <Link to="/orcamento">
                            <p className="white">
                                <Secondarybutton name={'Fazer orçamento'} />
                            </p>
                        </Link>
                    </div>
                </div>
            </Fade>
            {/* <Fade right>
                <div className="right-content d-none d-md-block">
                    <img src="https://freepikpsd.com/file/2019/10/desentupidora-png-2-Transparent-Images.png" alt="" className="phone" />
                </div>
            </Fade> */}
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        margin-top: 150px;
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h2{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 2rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 60%;
            margin-top: 20rem;
        }
    }
`;

export default HeaderContent;
