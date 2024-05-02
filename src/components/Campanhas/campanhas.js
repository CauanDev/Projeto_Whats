import { DragHandleIcon } from "@chakra-ui/icons";
import {React,useState} from "react";
import { Box, Avatar, Flex,Text,Spacer } from "@chakra-ui/react";
export default function Contas(props){
    const {
        name,
        logo,
        index   
      } = props;
    
    return (    
    
    <Box  w='100%' p={2} color='white' border='1px' borderColor='gray.200' borderRadius="15px" >

    <Flex alignItems={'center'}>

        <DragHandleIcon fontSize='2xl' cursor={'pointer'} onClick={()=>{
            console.log(index)
        }}/>
        
        <Flex  alignItems={'center'}> 
        <Box >
            <Flex gap={2} alignItems={'center'}>
            <Spacer/>
            <Avatar src={logo} borderRadius='100%'/>
            <Text fontSize='xl' color='#fff'>{name}</Text>
            </Flex>
        </Box>
        </Flex>    
    </Flex>
    </Box>
    );

}