import { Box, Badge, Image, Container, Heading, Text } from '@chakra-ui/react'

const property = require('../data/project-data.json')


function ProjectCard(props) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='xl' boxShadow='2xl' bg='white'>
            <Container my={5}>
                <Image rounded='md' src={property.imageUrl}/>
            </Container>

            <Container my={5}>
                <Text color='#99C27D' textTransform={'uppercase'} fontWeight={800} fontSize={'sm'}>
                    {property.projectType}
                </Text>
                <Heading size='sm'>
                    {property.projectTitle}
                </Heading>
                <Text color='gray.600' fontSize='sm'>
                    Classification
                </Text>
                <Text my={3}>
                    {property.projectDescription}
                </Text>

                {property.projectTech.map( (tech) => 
                    <Badge borderRadius='md' m={1}>
                        {tech}
                    </Badge>
                )}
            </Container>
        </Box>
    )
}

export default ProjectCard