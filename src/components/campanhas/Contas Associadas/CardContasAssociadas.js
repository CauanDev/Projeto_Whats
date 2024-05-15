import Card from "components/Card/Card"
import { Switch,Box,Flex,Avatar,AvatarBadge,Text,Spacer } from "@chakra-ui/react"
export default function CardContasAssociadas(props){
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
                <Switch size='md' />                        
                


            </Flex>            
        </Box>
    </Card>
    )
}