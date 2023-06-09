import { BoxPhoto, Circle, ImgMotion } from "../style/BoxStyle";

const Photo = ({ src, alt }) => {
  return (
    <BoxPhoto>
      <Circle />
      <ImgMotion
        initial={{ opacity: 0, filter: "blur(0.5rem)" }}
        animate={{ opacity: 1, filter: "blur(0)" }}
        src={src}
        alt={alt}
      />
    </BoxPhoto>
  );
};

export default Photo;
