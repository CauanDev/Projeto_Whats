import { Box,Flex,Spacer,Text  } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Avatar,AvatarBadge } from "@chakra-ui/react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Card from "components/Card/Card"
export default function CardCampanhas(props){
    const {
        logo,
        index,
        name,
        subName,
        status,
        
    } = props
    return(
    <Card p={4} color='white' border='1px' borderColor='gray.500' borderRadius="15px" >
        <Box  >            
        <Flex gap={3} alignItems={'center'}> 
            <Avatar  borderRadius='100%' src={logo} >
            <AvatarBadge boxSize='1em' bg={status? 'green.500':'tomato'} />
            </Avatar>
            <Box>
            <Text fontSize='md' color='#fff'>{name}</Text>
            <Text fontSize='md' color='#fff'>{subName}</Text>
            </Box>
            <Spacer/>            
            <Link to={`/admin/campanha/${index}`}>
            <ArrowForwardIcon cursor={'pointer'} fontSize={"2xl"}/>    
            </Link>                          
            


        </Flex>    
        
        </Box>
        </Card>
    )
}