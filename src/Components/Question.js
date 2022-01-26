import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import { Fade } from 'react-reveal';

function FaqServies({ title, description }) {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () => {
        setToggle(!toggle);
    }

    return (
        <Fade left cascade>
            <QuestionStyled>
                <div className="q-con">
                    <div className="question toggle-title">
                        <input type='checkbox' />
                        <label onClick={btnToggler}>{title}</label>
                        <button>
                            {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                    </div>
                    <div className='answer'>
                        {toggle && <p>{description}</p>}
                    </div>
                </div>
            </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
background-color: #fff;
margin: 1rem 0;
padding: 1rem 1rem;
border-radius: 24px;
transition: all .4s ease-in-out;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

.question input, .question .answer {
    display: none
}

.question label {
  display: inline-block;
  font-weight: bold;
  margin-bottom: 5px;
  width: 100%
}

.question input:checked ~ .answer {
  display: block
}

p{
    transition: all .4s ease-in-out;
}

label{
    color: #09456c;
    transition: all .4s ease-in-out;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;

}
    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        button{
            background: transparent;
            outline: none;
            cursor: pointer;
            border: none;
        }
    }
`;

export default FaqServies;
