import { Stack, HStack, VStack, Circle, Box, Code } from '@chakra-ui/react'

const roundedTop = {
    borderRadius: "15px 15px 0px 0px"
}

const roundedBottom= {
    borderRadius: "0px 0px 10px 10px"
}

function Terminal(props) {
    return (
        <VStack spacing={0} mt={10}>
            <Box bg='#E4E3E5' style={roundedTop} w='80%' p={3} color='white'>
                <HStack spacing='12px'>
                    <Circle bg='#FD6260' size='10px'></Circle>
                    <Circle bg='#FEBC51' size='10px'></Circle>
                    <Circle bg='#1FC855' size='10px'></Circle>
                </HStack>
            </Box>

            <Box bg='#282A36' style={roundedBottom} boxShadow='2xl' w='80%' h='100%' p={5}>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code bg='' color='white'>
                        > Keith.education()
                    </Code>
                    <Code bg='' color='#99C27D'>”B.Sc. Information Systems, Major in Business Analytics and Artificial Intelligence”</Code>
                </Stack>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code bg='' color='white'>
                        > Keith.goal()
                    </Code>
                    <Code bg='' color='#99C27D'>“Aspiring Data Scientist"</Code>
                </Stack>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code bg='' color='white'>
                        > Keith.interests()
                    </Code>
                    <Code bg='' color='#99C27D'>["coffee", "yoga", "hitting the gym"]</Code>
                </Stack>
            </Box>
        </VStack>
    )
}

export default Terminal
