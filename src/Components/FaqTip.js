import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import questions from '../assets/data/questions'
import Question from './Question'
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h2>Dicas infalíveis para evitar entupimentos</h2>

                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
                
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    h2 {
        text-align: center;
        color: var(--blue-primary);
        margin-top: -6rem;
    }
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 2rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;

export default FAQSection;
