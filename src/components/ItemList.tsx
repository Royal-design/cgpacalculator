import { Box, HStack, Input } from "@chakra-ui/react";
import { formDataType } from "../context/FormContext";

type PropsType = {
  selectData: formDataType;
  selectChange: (e: any) => void;
};
export const ItemList = ({ selectData, selectChange }: PropsType) => {
  return (
    <Box>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode1"
          value={selectData.courseCode1}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit1}
          name="unit1"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit1}
          name="gradeUnit1"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score1"
          value={selectData.score1}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode2"
          value={selectData.courseCode2}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit2}
          name="unit2"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit2}
          name="gradeUnit2"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score2"
          value={selectData.score2}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode3"
          value={selectData.courseCode3}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit3}
          name="unit3"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit3}
          name="gradeUnit3"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score3"
          value={selectData.score3}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode4"
          value={selectData.courseCode4}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit4}
          name="unit4"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit4}
          name="gradeUnit4"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score4"
          value={selectData.score4}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode5"
          value={selectData.courseCode5}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit5}
          name="unit5"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit5}
          name="gradeUnit5"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score5"
          value={selectData.score5}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode6"
          value={selectData.courseCode6}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit6}
          name="unit6"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit6}
          name="gradeUnit6"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score6"
          value={selectData.score6}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode7"
          value={selectData.courseCode7}
          onChange={selectChange}
        />
        <Input
          type="number"
          value={selectData.unit7}
          name="unit7"
          onChange={selectChange}
        />
        <Input
          value={selectData.gradeUnit7}
          name="gradeUnit7"
          onChange={selectChange}
        />

        <Input
          type="number"
          name="score7"
          value={selectData.score7}
          min={"0"}
          onChange={selectChange}
        ></Input>
      </HStack>
    </Box>
  );
};
