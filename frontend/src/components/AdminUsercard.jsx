import React from "react";
import {

  Avatar,
  Box,

  Text,
  Stack,
  Button,

  Badge,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteAdminUser } from "../redux/Admin/admin.action";

const AdminUsercard = ({
  id,
  email,
  password,
  sex,
  birthday,
  height,
  weight,
  role,
  otpVerified,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(deleteAdminUser(id));

    toast({
      title: `User ${id} Removed`,
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <div>
      {/* <Center py={6}> */}
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"https://bit.ly/broken-link"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          bg="gray.500"
          alignContent={"center"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: otpVerified ? "green.500" : "red.500",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <List spacing={2} textAlign="left">
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              email :
            </Text>{" "}
            {email}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Sex :
            </Text>{" "}
            {sex}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Birthday :
            </Text>{" "}
            {birthday}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Height :
            </Text>{" "}
            {height}
          </ListItem>
          <ListItem>
            <Text as={"span"} fontWeight={"bold"}>
              Weight :
            </Text>{" "}
            {weight}
          </ListItem>
        </List>

        {otpVerified ? (
          <Badge colorScheme="teal" ml={2}>
            OTP Verified
          </Badge>
        ) : (
          <Badge colorScheme="red" ml={2}>
            OTP NotVerified
          </Badge>
        )}

        <Stack mt={8} direction={"row"} spacing={4} >
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"teal.400"}
            color={"white"}
            _focus={{
              bg: "teal.400",
            }}
            _hover={{
              bg: "teal.600",
            }}
          >
            See Data
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            bg={"red.500"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "red.600",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
      {/* </Center> */}
    </div>
  );
};

export default AdminUsercard;