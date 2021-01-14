import styled from "@emotion/styled";

export const StyledBanner = styled.div`
    // background-image : url(${(props) => props.bgImage || ""});
    // background-color: ${(props) => props.color || "none"};
    // background-blend-mode: ${(props) => props.mode || "normal"};
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-size:cover;
    // clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%);
    // height : 300px;
    min-height : 200px;
    width : 100%;
    margin-bottom:1rem;
    display:${(props) => props.display || 'flex'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 1.5rem;
    text-align:center;
    font-weight: bold;
    line-height:1;
    padding: 1rem;
    transition: background-color 5s ease;
  

    @media (min-width: 600px) {
        font-size:1.7rem;
   }
   
   @media (min-width: 768px) {
    font-size:2rem;
   }
   
   @media (min-width: 1024px) {
    font-size:3rem;
   }
`