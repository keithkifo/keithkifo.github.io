import MyNavbar from "../components/MyNavbar";
import MyBreadcumb from "../components/MyBreadcrumb";
import { Box } from "@chakra-ui/layout";


function About() {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Box as="main">
                <MyBreadcumb></MyBreadcumb>
            </Box>
        </div>
    
    );
}

export default About