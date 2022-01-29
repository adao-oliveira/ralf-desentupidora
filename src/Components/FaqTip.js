import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import questions from '../assets/data/questions'
import Question from './Question'
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Dicas infalíveis para evitar <span>entupimentos</span></h3>

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
    h3 {
        margin-top: 18rem;
    }
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
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
