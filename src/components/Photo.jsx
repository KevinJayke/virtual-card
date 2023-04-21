import { BoxPhoto } from "../style/BoxStyle";

const Photo = ({ src, alt }) => {
  return (
    <BoxPhoto>
      <img src={src} alt={alt} />
    </BoxPhoto>
  );
};

export default Photo;
