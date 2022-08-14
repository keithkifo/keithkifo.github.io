import { Stack, HStack, VStack, Circle, Box, Code } from '@chakra-ui/react'

const roundedTop = {
    borderRadius: '15px 15px 0px 0px'
}

const roundedBottom= {
    borderRadius: '0px 0px 10px 10px'
}

function Terminal(props) {
    const data = {
        education: "'B.Sc. Information Systems, Major in Business Analytics and Artificial Intelligence'",
        goal: 'Aspiring Data',
        interests: "'['teaching', 'coffee', 'yoga']'"
    }

    return (
        <VStack spacing={0}>
            <Box bg='#E4E3E5' style={roundedTop} w='100%' p={3} color='white'>
                <HStack spacing='12px'>
                    <Circle bg='#FD6260' size='10px'/>
                    <Circle bg='#FEBC51' size='10px'/>
                    <Circle bg='#1FC855' size='10px'/>
                </HStack>
            </Box>

            <Box bg='#282A36' style={roundedBottom} boxShadow='2xl' w='100%' h='100%' p={3}>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code fontSize='md' bg='' color='white'>
                        {'> Keith.education()'}
                    </Code>
                    <Code fontSize='md' bg='' color='#99C27D'>
                        {data.education}
                    </Code>
                </Stack>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code fontSize='md' bg='' color='white'>
                        {'> Keith.goal()'}
                    </Code>
                    <Code fontSize='md' bg='' color='#99C27D'>
                        {data.goal}
                    </Code>
                </Stack>
                <Stack spacing='0px' mx={5} my={7}>
                    <Code fontSize='md' bg='' color='white'>
                        {'> Keith.interests()'}
                    </Code>
                    <Code fontSize='md' bg='' color='#99C27D'>
                        {data.interests}
                    </Code>
                </Stack>
            </Box>
        </VStack>
    )
}

export default Terminal
