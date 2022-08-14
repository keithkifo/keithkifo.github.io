import { Heading, Link, Flex, HStack, Spacer } from "@chakra-ui/react"

function MyNavbar(props) {
    return (
        <Flex as="header" position="fixed" backgroundColor="rgba(255, 255, 255, 0.8)" w="100%" h="7%">
            <Spacer/>
            <HStack mr='5%' spacing={8} alignItems='center'>
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
                <Link href="#portfolio-header">
                    <Heading size="md">
                        Portfolio
                    </Heading>
                </Link>
            </HStack>

        </Flex>
    )
}

export default MyNavbar
