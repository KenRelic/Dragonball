import styled from "@emotion/styled";

export const StyledGrid = styled("div")`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1024px;
margin-top: 2rem;

    @media (max-width: 600px) {
        .grid {
        width: 100%;
        flex-direction: column;
        }
    }
`
