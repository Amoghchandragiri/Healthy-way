import { Container, Box, Image, Center, Text, Heading } from "@chakra-ui/react";

// import Footer from "../Home/Footer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Home.footer";

function About() {
  return (
    <>
      <Navbar />

      <Container maxW="100%" h="auto" bg="white" pb="100px">
        <Heading
          color="blackAlpha.800"
          textAlign="center"
          as={"h1"}
          size={["lg", "lg", "xl", "xl"]}
          fontWeight="extrabold"
          mt={"50px"}
        >
          About MyFitnessHelp
        </Heading>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="70px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          MyFitnessHelp is a highly accurate accurate, comprehensive nutrition tracking website.
           Unlike other websites on the market, our nutritional data is
          curated from verified, accurate sources. We aim to provide a complete
          solution – no matter what diet you choose to be on.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
           CRON diet (Calorie Restriction with OptimalNutrition) has become
           a major trend.That was our inspiration
          and thus, we created MyFitnessHelp
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          There are now over 5 million users who are happy he did.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          HealthyWay's success has hinged entirely on positive word-of-mouth
          from its users. The company is still – and plans to continue being – a
          bootstrap startup to this day.
        </Text>
        <Image
          src="https://cdn1.cronometer.com/webflow/crono-team-1-p-2000.jpeg"
          width="75%"
          m="auto"
          mt="75px"
        />

        <Heading
          color="blackAlpha.800"
          textAlign="center"
          as={"h1"}
          size={["lg", "lg", "xl", "xl"]}
          fontWeight="extrabold"
          mt={["2rem", "2rem", "3rem", "3rem"]}
          mb="50px"
        >
          Who We Are
        </Heading>

        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          We plan on expanding our website's consumer base.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          We are an eclectic mix of web developers, designers, nutrition
          scientists, business majors and personal trainers brought together by
          a love of nutrition. 
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          Our goal is to build the best software for people and professionals to
          manage their nutrition.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          If you have interest in your personal nutrition or working with your
          client’s nutrition check us out!
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize={["md", "md", "lg", "lg"]}
        >
          Have questions? We would love to hear from you. Email us at:
          support@MyFitnessHelp.com
        </Text>

        <Box
          h="100px"
          maxW="75%"
          borderBottom="1px solid black"
          margin="auto"
          pb="50px"
        ></Box>
        <Text
          color="blackAlpha.800"
          margin="auto"
          width="75%"
          mt="75px"
          fontSize={["md", "md", "xl", "xl"]}
          textAlign="center"
        >
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Center
          height="50px"
          width="300px"
          margin="auto"
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          color="tomato"
          mt="50px"
          border="2px solid tomato"
          fontWeight="bold"
        >
          Become An Affiliate
        </Center>
      </Container>
      <Footer />
    </>
  );
}
export default About;
