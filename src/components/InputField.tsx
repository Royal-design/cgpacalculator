import { Box, Flex, Input } from "@chakra-ui/react";

export const InputField = () => {
  return (
    <Box marginBottom={"2rem"}>
      <Input
        name="name"
        placeholder=" your name"
        marginBottom={"0.5rem"}
        isRequired
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
    </Box>
  );
};
