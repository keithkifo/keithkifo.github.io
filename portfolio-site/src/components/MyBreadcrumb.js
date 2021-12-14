import { Box, Stack, Heading } from "@chakra-ui/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

function MyBreadcrumb(props) {
    return (
        <Stack direction={'column'} alignItems='center'>
            <Heading size='2xl' textTransform={'capitalize'} m={2}>{props.page}</Heading>
            <Box align="center" justify="center" color='black' size='md' w='60%'>
                <Breadcrumb spacing='8px' separator={<BsArrowRight color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={'/' + props.link} textTransform={'capitalize'}>
                            {props.page}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Stack>
    );
}

export default MyBreadcrumb