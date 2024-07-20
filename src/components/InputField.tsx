import { Flex, FormControl, Input } from "@chakra-ui/react";

export const InputField = () => {
  return (
    <FormControl>
      <Input name="name" placeholder=" your name" marginBottom={"1rem"} />
      <Flex>
        <Input
          marginRight={"1rem"}
          name="department"
          placeholder=" department"
        />
        <Input name="level" placeholder=" Level" width={"30%"} />
      </Flex>
    </FormControl>
  );
};
