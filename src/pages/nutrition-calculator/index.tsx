import { Heading, Text } from "../../components/text";
import Breakfast from "../../components/breakfast";
import styled from "styled-components";

const NutritionCalculator = () => {
  return (
    <Main>
      <section>
        <Heading as="h1" paddingTop={1} paddingBottom={1}>
          Triathlon Nutrition Calculator
        </Heading>
        <Text color="gray">
          inspired by James LeBaigue's course on long distance triathlon
          nutrition
        </Text>
      </section>

      <Breakfast />
    </Main>
  );
};

export default NutritionCalculator;

const Main = styled.main`
  padding: 1em;
`;