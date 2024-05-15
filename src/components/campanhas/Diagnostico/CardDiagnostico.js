import Card from "components/Card/Card"
import { BiChevronRight } from "react-icons/bi";

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
    <Card p={4} color='white' border='1px' borderColor='gray.500' borderBottomColor='#FFD700' borderBottomWidth='5px'>
        <Box >            
            <Flex gap={3} alignItems={'center'}> 
                <Avatar  borderRadius='100%' src={logo} >
                <AvatarBadge boxSize='1em' bg={status? 'green.500':'tomato'} />
                </Avatar>
                <Box>
                <Text fontSize='md' color='#fff'>{name}</Text>
                <Text fontSize='md' color='#fff'>{subName}</Text>
                </Box>
                <Spacer/> 
                <Box>
                    <Flex gap={10}>
                        <Box>
                        <Text fontSize='sm' textAlign='right'>0% de compatibilidade</Text>
                        <Text color={'#00FF00'} fontSize='sm' textAlign='right'>Você é admin de 0 do total de 0 grupos</Text>
                        <Text color='#FFD700' fontSize='sm' textAlign='right'>verificar compatibilidade</Text>


                        </Box>
                        
                        <Text fontSize={'5xl'} textAlign={'center'}>
                            <BiChevronRight/>        
                        </Text>         
                    </Flex>
                </Box>
       
                                   
                


            </Flex>            
        </Box>
    </Card>
    )
}