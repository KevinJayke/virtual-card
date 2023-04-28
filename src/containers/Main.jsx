import Button from "../components/Button";
import Quote from "../components/Quote";
import Content from "../components/Content";
import { VStack } from "../style/BoxStyle";

const Main = () => {
  return (
    <VStack as={"main"}>
      <Content />
      <Quote />
      <Button />
    </VStack>
  );
};

export default Main;
