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
    handleSecondSemsterCGPAClick,
    formData,
    secondSemesterFormData,
    handleChange,
    handleSecondSemesterChange
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
          boxShadow={{ md: "0 0 1.2rem grey" }}
          height={"48rem"}
        >
          <CardHeader>
            <Heading
              textAlign={"center"}
              fontSize={"1.4rem"}
              marginBottom={"0.5rem"}
            >
              CGPA Calculator
            </Heading>
          </CardHeader>
          <CardBody>
            <form>
              <InputField />
              <SimpleGrid columns={4} spacing={5}>
                <Text fontSize={"1rem"}>Course Code</Text>
                <Text fontSize={"1rem"}>Units</Text>
                <Text fontSize={"1rem"}>Grade</Text>
                <Text fontSize={"1rem"}>Score</Text>
              </SimpleGrid>

              <FormControl>
                {secondSemester === false && (
                  <ItemList selectData={formData} selectChange={handleChange} />
                )}
                {secondSemester === true && (
                  <ItemList
                    selectData={secondSemesterFormData}
                    selectChange={handleSecondSemesterChange}
                  />
                )}

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
                <Box
                  display={{ md: "flex" }}
                  justifyContent={{ md: "space-between" }}
                  marginTop={"1rem"}
                >
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
                </Box>
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
