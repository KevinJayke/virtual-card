import styled from "styled-components";
import { BoxPhoto } from "../style/BoxStyle";

const Image = styled.img`
  aspectratio: "1 / 1";
  objectfit: "contain";
`;

const Photo = ({ src, alt }) => {
  return (
    <BoxPhoto>
      <Image src={src} alt={alt} />
    </BoxPhoto>
  );
};

export default Photo;
