import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

import { ItemList } from "./components/ItemList";
import { useFormContext } from "./context/useFormContext";
import { ItemListSecondSemester } from "./components/ItemListSecondSemester";
import { InputField } from "./components/InputField";

function App() {
  const {
    cgpaResult,
    secondSemester,
    setSecondSemester,
    showCGPAResult,
    totalNumberUnits,
    numberUnits,
    totalGradePoints,
    gradePoint,
    gpaResult,
    handleGPAClick,
    handleSecondSemsterCGPAClick
  } = useFormContext();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        height={"100%"}
        padding={{ base: "0.5rem", md: "3rem" }}
        background={{ md: "#758694" }}
      >
        <Card
          width={{ md: "50%" }}
          boxShadow={"0 0 1.2rem grey"}
          height={"45rem"}
        >
          <CardHeader>
            <Heading
              textAlign={"center"}
              fontSize={"1.4rem"}
              marginBottom={"2rem"}
            >
              CGPA Calculator
            </Heading>
            <InputField />
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={4} spacing={5}>
              <Text fontSize={"1rem"}>Course Code</Text>
              <Text fontSize={"1rem"}>Units</Text>
              <Text fontSize={"1rem"}>Grade</Text>
              <Text fontSize={"1rem"}>Score</Text>
            </SimpleGrid>
            <form>
              <FormControl>
                {secondSemester === false && <ItemList />}
                {secondSemester === true && <ItemListSecondSemester />}

                <Flex marginTop={"3rem"} justifyContent={"center"}>
                  <Button
                    onClick={
                      secondSemester
                        ? handleSecondSemsterCGPAClick
                        : handleGPAClick
                    }
                    marginRight={"1rem"}
                    type="submit"
                  >
                    {secondSemester ? "Calculate CGPA" : "Calculate GPA"}
                  </Button>

                  {secondSemester === false && (
                    <Button onClick={() => setSecondSemester(true)}>
                      Next Semester
                    </Button>
                  )}
                </Flex>
                <Flex justifyContent={"space-between"} marginTop={"1rem"}>
                  <Text fontSize={"0.9rem"}>
                    Total Units:{" "}
                    {showCGPAResult ? totalNumberUnits : numberUnits}
                  </Text>
                  <Text fontSize={"0.9rem"}>
                    Total Grade Points:{" "}
                    {showCGPAResult ? totalGradePoints : gradePoint}
                  </Text>
                  <Text fontSize={"0.9rem"}>
                    GPA: {showCGPAResult ? cgpaResult : gpaResult}
                  </Text>
                </Flex>
              </FormControl>
            </form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Box>
    </>
  );
}

export default App;
