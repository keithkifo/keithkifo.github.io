import { Box, Heading, HStack, VStack, Divider, Text, Center } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MyNavbar from "../components/MyNavbar";
import Terminal from "../components/Terminal";
import ProjectCard from "../components/ProjectCard";
import MyFooter from "../components/MyFooter";

function Home() {
    return (
        <div>
            <MyNavbar />
            
            <VStack m={5} pt='10%'>
                <Box w='40%'>
                    <Heading fontSize='5xl' fontWeight='bold' mb={10} textAlign={'center'}>
                        Hey, &nbsp; I'm Keith.
                    </Heading>
                </Box>
                <Terminal w='60%'/>
                <Divider m={5} py='2%' />
                <Heading id='portfolio-header' py='2%'>Portfolio</Heading>
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