import {React,useState} from "react";
import { useDisclosure,Modal } from "@chakra-ui/react";
import { Box, Avatar, Flex,Text,Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import PainelModal from "components/Modal/Modal";
import { iconsContas } from "variables/icons/components";
import { componentsContasHome } from "variables/icons/components";

export default function Contas(props){
    const {
        name,
        logo,
        telefone,
        status,
        index   
      } = props;
    const { isOpen, onOpen, onClose } = useDisclosure() 

    const SeuModal = ({ isOpen, onClose }) => {
    const [componenteAtivo, setComponenteAtivo] = useState(null);
  }
    return (    
    
    <Box w='100%' p={2} color='white' border='1px' borderColor='gray.200' borderRadius="15px" >
    <Flex gap={3} alignItems={'center'}> 
        <Avatar src={logo} borderRadius='100%'/>
        <Box>
        <Text fontSize='md' color='#fff'>{name}</Text>
        <Text fontSize='md' color='#fff'>{telefone}</Text>
        </Box>
        <Spacer/>
        <ArrowForwardIcon cursor={'pointer'} fontSize={"xl"} onClick={onOpen}/>
        <Modal  isOpen={isOpen} onClose={onClose} size="3xl" closeOnOverlayClick={false}  >
        <PainelModal
          titles =  {["Informações Gerais","Detalhes"]}
          icons =  {iconsContas}
          name = {name}
          index = {index}
          components = {componentsContasHome}       
        
        />
        </Modal>       
    </Flex>    
    </Box>
    );

}