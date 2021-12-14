import MyNavbar from "../components/MyNavbar";
import MyBreadcrumb from "../components/MyBreadcrumb";
import MyFooter from "../components/MyFooter";
import { Box } from "@chakra-ui/layout";

function Portfolio() {
    return (
        <div>
            <MyNavbar/>
            <Box as='main' pb='6%'>
                <Box w='100%' pt='6%' pb='4%'
                bgGradient='linear(to-r, #596468, #607175, #667f81, #6e8d8c, #779b95, #82a69a, #8fb19e, #9ebca1, #b3c6a3, #c9cea6, #e1d7ac, #fadeb5)'>
                    <MyBreadcrumb link={'portfolio'} page={'portfolio'}/>
                </Box>
            </Box>

            <MyFooter/>
        </div>
    
    );
}

export default Portfolio