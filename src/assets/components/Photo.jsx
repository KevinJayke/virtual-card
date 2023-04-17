import styled from "styled-components";

const Frame = styled.figure`
  width: 12rem;
  height: 12rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px 0px 0px 0px;
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
