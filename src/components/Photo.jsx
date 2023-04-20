import styled from "styled-components";

const Frame = styled.figure`
  width: 11.75rem;
  height: 11.75rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px 0px 0px 0px;
  background: ${(props) => props.theme.colors.container};
    --s: 64px; /* control the size */
    --c1: #E0E4CC;
    --c2: #69D2E7;
    
    --_g: 90deg,#0000 0; 
    background:
      conic-gradient(from 135deg,var(--c1) var(--_g)) var(--s) calc(var(--s)/2),
      conic-gradient(from 135deg,var(--c2) var(--_g)),
      conic-gradient(from 135deg at 50% 0,var(--c1) var(--_g)) var(--c2); 
    background-size: calc(2*var(--s)) var(--s);
  }
  
`;

const Image = styled.img`
  aspectratio: "1 / 1";
  objectfit: "contain";
`;

const Photo = ({ src, alt }) => {
  return (
    <Frame>
      <Image src={src} alt={alt}></Image>
    </Frame>
  );
};

export default Photo;
