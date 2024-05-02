import {React,useState} from "react";
import { Box, Avatar, Flex,Text,Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Contas(props){
    const {
        name,
        logo,
        telefone,
        status,
        index   
      } = props;
    
    return (    
    
    <Box w='100%' p={2} color='white' border='1px' borderColor='gray.200' borderRadius="15px" >
    <Flex gap={3} alignItems={'center'}> 
        <Avatar src={logo} borderRadius='100%'/>
        <Box>
        <Text fontSize='md' color='#fff'>{name}</Text>
        <Text fontSize='md' color='#fff'>{telefone}</Text>
        </Box>
        <Spacer/>
        <ArrowForwardIcon cursor={'pointer'} fontSize={"xl"} onClick={()=>{
            console.log(index)
        }}/>
    </Flex>    
    </Box>
    );

}