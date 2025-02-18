import styled from "styled-components"
import DetailsBar from "./DetailsBar"
import InputSide from "./InputSide"

export default function ContactForm() {

    const PageWrapper = styled.div`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
        background-color: whitesmoke;
        padding-bottom: 50px;
    `
    const PageHeadingWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    `

    const FormContainer = styled.div`
        width: 70%;
        background-color: #fff;
        padding: 5px;
        border-radius: 5px;
        height: 70vh;
        @media (max-width: 768px) {
        width: 90%;
    }
    `

    const TextOne = styled.b`
        font-size: 30px;
        color: rgb(4, 4, 59);
        text-align: center;
    `

    const TextTwo = styled.p`
        color: rgb(4, 4, 34);
        font-size: 15px;
        text-align: center;
    `;
    return (

            <PageWrapper>
                <PageHeadingWrapper>
                    <TextOne>Contact Us</TextOne>
                    <TextTwo>Any question and remarks? just write to us !</TextTwo>
                </PageHeadingWrapper>
                <FormContainer>
                    <DetailsBar />
                    <InputSide />
                </FormContainer>
            </PageWrapper>

    )
}