import { Box, Badge, Image, Container, Heading, Text} from '@chakra-ui/react'

function ProjectCard(props) {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        projectTitle: 'Predicting Customer Loan Default',
        projectTech: ['Python','Pandas','Numpy','Scikit-learn','CategoryEncoders'],
        projectType: 'Machine Learning',
        projectDescription: 'Lorem Ipsum'
    }
    
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='xl' boxShadow='2xl' bg='white'>
            <Container my={5}>
                <Image rounded='md' src={property.imageUrl}/>
            </Container>

            <Container my={5}>
                <Text color='#99C27D' textTransform={'uppercase'} fontWeight={800} fontSize={'sm'}>
                    {property.projectType}
                </Text>
                <Heading size='sm'>{property.projectTitle}</Heading>
                <Text color='gray.600' fontSize='sm'></Text>
                <Text my={3}>{property.projectDescription}</Text>

                {property.projectTech.map(tech => 
                    <Badge borderRadius='md' m={1}>
                        {tech}
                    </Badge>
                )}

            </Container>
        </Box>
    )
}

export default ProjectCard