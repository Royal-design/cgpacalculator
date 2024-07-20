import { Flex, FormControl, Input } from "@chakra-ui/react";

export const InputField = () => {
  return (
    <form>
      <FormControl>
        <Input
          name="name"
          placeholder=" your name"
          marginBottom={"1rem"}
          required
        />
        <Flex>
          <Input
            marginRight={"1rem"}
            name="department"
            placeholder=" department"
            required
          />
          <Input name="level" placeholder=" Level" width={"30%"} required />
        </Flex>
      </FormControl>
    </form>
  );
};
