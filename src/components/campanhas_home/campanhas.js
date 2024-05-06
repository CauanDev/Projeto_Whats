import { DragHandleIcon } from "@chakra-ui/icons";
import {React,useState} from "react";
import { Box, Avatar, Flex,Text,Spacer,Modal , useDisclosure} from "@chakra-ui/react";
import PainelModal from "components/Modal/Modal";
import { iconsContas } from "variables/icons/components";
import { componentsCampanhasHome } from "variables/icons/components";
export default function Contas(props){
    const {
        name,
        logo,
        index   
      } = props;
    const { isOpen, onOpen, onClose } = useDisclosure() 

    return (    
    
    <Box  w='100%' p={2} color='white' border='1px' borderColor='gray.200' borderRadius="15px" >

    <Flex alignItems={'center'}>

        <DragHandleIcon fontSize='2xl' cursor={'pointer'} onClick={onOpen}/>
        <Modal  isOpen={isOpen} onClose={onClose} size="3xl" closeOnOverlayClick={false}  >
        <PainelModal
          titles =  {["Informações Gerais","Detalhes"]}
          icons =  {iconsContas}
          name = {name}
          index = {index}
          components = {componentsCampanhasHome}       
        
        />
        </Modal>  
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