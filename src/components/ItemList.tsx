import { Box, HStack, Input } from "@chakra-ui/react";
import { useFormContext } from "../context/useFormContext";

export const ItemList = () => {
  const { formData, handleChange } = useFormContext();

  return (
    <Box>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode1"
          value={formData.courseCode1}
          onChange={handleChange}
        />
        <Input value={formData.unit1} name="unit1" onChange={handleChange} />
        <Input
          value={formData.gradeUnit1}
          name="gradeUnit1"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score1"
          value={formData.score1}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode2"
          value={formData.courseCode2}
          onChange={handleChange}
        />
        <Input value={formData.unit2} name="unit2" onChange={handleChange} />
        <Input
          value={formData.gradeUnit2}
          name="gradeUnit2"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score2"
          value={formData.score2}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode3"
          value={formData.courseCode3}
          onChange={handleChange}
        />
        <Input value={formData.unit3} name="unit3" onChange={handleChange} />
        <Input
          value={formData.gradeUnit3}
          name="gradeUnit3"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score3"
          value={formData.score3}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode4"
          value={formData.courseCode4}
          onChange={handleChange}
        />
        <Input value={formData.unit4} name="unit4" onChange={handleChange} />
        <Input
          value={formData.gradeUnit4}
          name="gradeUnit4"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score4"
          value={formData.score4}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode5"
          value={formData.courseCode5}
          onChange={handleChange}
        />
        <Input value={formData.unit5} name="unit5" onChange={handleChange} />
        <Input
          value={formData.gradeUnit5}
          name="gradeUnit5"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score5"
          value={formData.score5}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode6"
          value={formData.courseCode6}
          onChange={handleChange}
        />
        <Input value={formData.unit6} name="unit6" onChange={handleChange} />
        <Input
          value={formData.gradeUnit6}
          name="gradeUnit6"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score6"
          value={formData.score6}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
      <HStack marginBottom={"0.5rem"}>
        <Input
          name="courseCode7"
          value={formData.courseCode7}
          onChange={handleChange}
        />
        <Input value={formData.unit7} name="unit7" onChange={handleChange} />
        <Input
          value={formData.gradeUnit7}
          name="gradeUnit7"
          onChange={handleChange}
        />

        <Input
          type="number"
          name="score7"
          value={formData.score7}
          min={"0"}
          onChange={handleChange}
        ></Input>
      </HStack>
    </Box>
  );
};
