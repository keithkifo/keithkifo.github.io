import { Divider, Box, Center, Container, Heading, SimpleGrid, VStack, HStack, Code } from "@chakra-ui/layout";
import MyNavbar from "../components/MyNavbar";
import Terminal from "../components/Terminal";
import ProjectCard from "../components/ProjectCard";
import MyFooter from "../components/MyFooter";

function Home() {
    return (
        <div>
            <MyNavbar></MyNavbar>

            <HStack p={10}>
                <Box>
                    <Code>Keith</Code>
                </Box>
                <Terminal></Terminal>
            </HStack>

            <Box bg='#FEFAF6' w='100%' p={10}>
                <Center>
                    <Heading>Portfolio</Heading>
                </Center>
                <HStack m={10} spacing="36px">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </HStack>
            </Box>
            
            <MyFooter></MyFooter>
        </div>
    );
}

export default Home