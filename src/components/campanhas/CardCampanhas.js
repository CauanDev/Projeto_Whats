import { Box,Flex,Spacer,Text  } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Avatar } from "@chakra-ui/react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

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
            <Text fontSize='md' color='#fff'>{name}</Text>
            <Text fontSize='md' color='#fff'>{subName}</Text>
            </Box>
            <Spacer/>
            <Link to={`/admin/campanha/${index}`}>LINK</Link>
               <ArrowForwardIcon cursor={'pointer'} fontSize={"xl"} />      
        </Flex>    
        </Box>
    )
}