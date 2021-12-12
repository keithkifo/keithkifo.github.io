import { Heading, Link, Flex, HStack, Spacer, Container } from "@chakra-ui/react"

function MyNavbar(props) {
    return (
        <Flex as="header" position="fixed" backgroundColor="rgba(255, 255, 255, 0.8)" w="100%" h="8%" ml='auto'>
            <Container m={5}>
                <Heading size='lg' ml={10}>Keith</Heading>
            </Container>
            <Spacer/>
            <HStack mr={10} spacing={7}>
                <Link href="/">
                    <Heading size="md">
                        Home
                    </Heading>
                </Link>
                <Link href="/about">
                    <Heading size="md">
                        About
                    </Heading>
                </Link>
                <Link href="/portfolio">
                    <Heading size="md">
                        Portfolio
                    </Heading>
                </Link>
            </HStack>
        </Flex>
    )
}

export default MyNavbar
