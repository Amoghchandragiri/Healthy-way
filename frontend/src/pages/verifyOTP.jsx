import { Center, Heading, Image } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";

export default function VerifyOTP() {
  return (
    <>
      <HStack bgColor={"#262a3b"} h={"90px"}>
        <Image ml={"30px"} h={"90px"} src="./Healthy way logo.png"></Image>
      </HStack>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"sm"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={10}
        >
          <Center>
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Verify your Email
            </Heading>
          </Center>
          <Center
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            We have sent code to your email
          </Center>
          <FormControl>
            <Center>
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"#005c5c"}
              color={"white"}
              _hover={{
                bg: "#005c5c",
                boxShadow: "lg",
              }}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}