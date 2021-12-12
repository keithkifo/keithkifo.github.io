import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex, Box
} from '@chakra-ui/react'

import { BsArrowRight } from 'react-icons/bs'

function MyBreadcumb(props) {
    return (
        <Box align="center" justify="center" color='black' size='md' w='60%'>
            <Breadcrumb spacing='8px' separator={<BsArrowRight color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/about'>About</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}

export default MyBreadcumb
