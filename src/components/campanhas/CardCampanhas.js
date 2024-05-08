import Card from "components/Card/Card"
import { Box,Flex,Spacer,Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Avatar } from "@chakra-ui/react"
export default function CardCampanhas(props){
    const {
        logo,
        index,
        name,
        subName,
        status,
    } = props

    return(
        <Box w='100%' p={2} color='white' border='1px' borderColor='gray.200' borderRadius="15px" >
        <Flex gap={3} alignItems={'center'}> 
            <Avatar  borderRadius='100%' src={logo}/>
            <Box>
            <Text fontSize='md' color='#fff'>teste</Text>
            <Text fontSize='md' color='#fff'>teste</Text>
            </Box>
            <Spacer/>
            <ArrowForwardIcon cursor={'pointer'} fontSize={"xl"} />      
        </Flex>    
        </Box>
    )
}