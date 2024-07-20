import { Box, Input, HStack } from "@chakra-ui/react";
import { useFormContext } from "../context/useFormContext";
export const ItemListSecondSemester = () => {
  const { secondSemesterFormData, handleSecondSemesterChange } =
    useFormContext();
  return (
    <Box>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode1"
          value={secondSemesterFormData.courseCode1}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit1}
          name="unit1"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit1}
          name="gradeUnit1"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score1"
          value={secondSemesterFormData.score1}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode2"
          value={secondSemesterFormData.courseCode2}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit2}
          name="unit2"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit2}
          name="gradeUnit2"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score2"
          value={secondSemesterFormData.score2}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode3"
          value={secondSemesterFormData.courseCode3}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit3}
          name="unit3"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit3}
          name="gradeUnit3"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score3"
          value={secondSemesterFormData.score3}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode4"
          value={secondSemesterFormData.courseCode4}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit4}
          name="unit4"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit4}
          name="gradeUnit4"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score4"
          value={secondSemesterFormData.score4}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode5"
          value={secondSemesterFormData.courseCode5}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit5}
          name="unit5"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit5}
          name="gradeUnit5"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score5"
          value={secondSemesterFormData.score5}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode6"
          value={secondSemesterFormData.courseCode6}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit6}
          name="unit6"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit6}
          name="gradeUnit6"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score6"
          value={secondSemesterFormData.score6}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode7"
          value={secondSemesterFormData.courseCode7}
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.unit7}
          name="unit7"
          onChange={handleSecondSemesterChange}
        />
        <Input
          value={secondSemesterFormData.gradeUnit7}
          name="gradeUnit7"
          onChange={handleSecondSemesterChange}
        />

        <Input
          type="number"
          name="score7"
          value={secondSemesterFormData.score7}
          min={"0"}
          onChange={handleSecondSemesterChange}
        ></Input>
      </HStack>
    </Box>
  );
};
