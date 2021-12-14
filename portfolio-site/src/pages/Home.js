import { Box, Heading, HStack, VStack, Divider, Text, Center } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MyNavbar from "../components/MyNavbar";
import Terminal from "../components/Terminal";
import ProjectCard from "../components/ProjectCard";
import MyFooter from "../components/MyFooter";

function Home() {
    return (
        <div>
            <MyNavbar/>

            <HStack py='10%' px='4%'>
                <Box w='40%'>
                    <Heading fontSize='5xl' fontWeight='bold'
                    >Hey, &nbsp; I'm Keith.</Heading>
                </Box>
                <Terminal w='60%'/>
            </HStack>
            
            <Divider m={5} />

            <VStack m={5}>
                <Heading>Portfolio</Heading>
                <Text>
                    Check out my school and personal projects! <br/>
                </Text>
            </VStack>

            <Tabs variant='soft-rounded' colorScheme='gray' m={8}>
                <Center>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Machine Learning</Tab>
                        <Tab>Data Analytics</Tab>
                        <Tab>Software Development</Tab>
                    </TabList>
                </Center>
                <TabPanels>
                    <TabPanel w='100%'>
                        <Box w='100%' bg='yellow.100'>ALL</Box>
                        <ProjectCard/>
                    </TabPanel>
                    <TabPanel>
                        <Box w='100%' bg='green.100'>ML</Box>
                        <ProjectCard/>
                    </TabPanel>
                    <TabPanel>
                        <Box w='100%' bg='blue.100'>Data Analytics</Box>
                        <ProjectCard/>
                    </TabPanel>
                    <TabPanel>
                        <Box w='100%' bg='red.100'>Software Development</Box>
                        <ProjectCard/>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Divider m={5} />
        
            <MyFooter/>
        </div>
    );
}

export default Home