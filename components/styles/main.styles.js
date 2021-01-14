import styled from "@emotion/styled";

export const StyledMain = styled("main")`
align-self:flex-start;
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 1rem 1rem;
margin: 0 auto 2rem auto;
width:100%;

@media (min-width: 600px) {
     padding:2rem;
}

@media (min-width: 768px) {
 width: 100%;
}

@media (min-width: 1024px) {
  width: 1024px;
}`