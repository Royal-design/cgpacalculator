import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  Heading,
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
        padding={{ base: "0.5rem", md: "3rem" }}
        background={{ md: "#758694" }}
      >
        <Card width={{ md: "50%" }} boxShadow={"0 0 1.2rem grey"}>
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
            <Flex justifyContent={"space-between"}>
              <Text>Course Code</Text>
              <Text>Units</Text>
              <Text>Grade</Text>
              <Text>Score</Text>
            </Flex>
            <form>
              <FormControl>
                {secondSemester === false && <ItemList />}
                {secondSemester === true && <ItemListSecondSemester />}

                <Flex justifyContent={"center"}>
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
                <Flex justifyContent={"space-between"}>
                  <Text>
                    Total Units:{" "}
                    {showCGPAResult ? totalNumberUnits : numberUnits}
                  </Text>
                  <Text>
                    Total Grade Points:{" "}
                    {showCGPAResult ? totalGradePoints : gradePoint}
                  </Text>
                  <Text>GPA: {showCGPAResult ? cgpaResult : gpaResult}</Text>
                </Flex>
              </FormControl>
            </form>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}

export default App;
