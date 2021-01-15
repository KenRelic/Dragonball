import styled from "@emotion/styled";

export const StyledCard = styled("div")`
width:100%;
min-height: 400px;
margin: 1rem;
background-color:#101229;
text-align: left;
color: inherit;
text-decoration: none;
border: none;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
cursor: pointer;
overflow:hidden;
position:relative;

    :hover,
    :focus ,
    :active {
            // color: #111;
            // background-color: #099e7b;
    }
    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        color:#777;
      }

    :hover h3{
        color: #222;
    }
      

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      img{
        object-fit:cover;
      }

      .cardTitle{
        positon:absolute;
        // bottom:100px;
        margin-bottom:-100px;
        left:0;
        width:100%;
        hieght: 80px;
        padding: 1rem;
        text-align:center;
        background: linear-gradient(0deg, #000217, transparent);
        transition: margin-bottom 0.3s ease;
      }

      :hover .cardTitle{
        margin-bottom:0;
      }

      .cardTitle p > span{
        height:5px;
        padding: 5px 8px;
        margin-right:5px;
        vertical-align:middle;
        border-radius:50%;
        font-size: 5px;
      }
      .alive{
        background-color: green;
      }
      .dead{
        background-color: red;
      }
      @media (min-width: 768px) {
          width: 85%;
         
      }

      @media (min-width: 860px) {
        width: 45%;
 
    }
`