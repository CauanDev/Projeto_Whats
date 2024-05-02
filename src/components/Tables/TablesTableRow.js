/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon,PlusSquareIcon, EditIcon,SettingsIcon, SupportIcon ,StatsIcon } from "@chakra-ui/icons";
import React from "react";
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import { Box, Spacer,ChakraProvider } from "@chakra-ui/react";
import theme from "theme/themeAdmin.js";
import bgBody from "assets/img/background-body-admin.png";
import { bgAdmin } from "theme/bgAdmin";
import { ActionLogo } from "components/Icons/Icons";



function TablesTableRow(props) {
  const {
    logo,
    name,
    email,
    subdomain,
    domain,
    status,
    index,
    date,
    lastItem,
    statusFunc    
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure()

  const SeuModal = ({ isOpen, onClose }) => {
    const [componenteAtivo, setComponenteAtivo] = useState(null);
  }

  return (
    <Tr>
      <Td
        ps='0px'
        border={lastItem ? "none" : null}
        borderBottomColor='#56577A'>
        <Flex align='center' py='.5rem' minWidth='10%' flexWrap='nowrap'>
          <Avatar
            src={logo}
            w='50px'
            borderRadius='12px'
            me='18px'
            border='none'
          />
          <Flex direction='column'>
            <Text
              fontSize='sm'
              color='#fff'
              fontWeight='normal'
              minWidth='100%'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
       {/* 
       
       Simbolo de Status  
       
       */}
        <Badge
          bg={status === "Online" ? "green.400" : "transparent"}
          color={status === "Online" ? "white" : colorStatus}
          fontSize='sm'
          p='3px 10px'
          borderRadius='8px'
          border={status === "Online" ? "none" : "1px solid #fff"}
          fontWeight='normal'
          onClick={statusFunc}
          cursor="pointer">
          {status}
        </Badge>

      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <Text fontSize='sm' color='#fff' fontWeight='normal'>
          {date}
        </Text>
      </Td>

      <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        <EditIcon onClick={onOpen}/>
        <Modal  isOpen={isOpen} onClose={onClose} size="3xl"  closeOnOverlayClick={false}  >
        <ModalOverlay />
      <ModalContent bgImage={bgBody} borderRadius="20px" >
       <ModalHeader>Modal</ModalHeader>
       <ModalCloseButton />




        <Flex>
            {/* Sidebar */}
          <Box w="25%"  p="4" className="flex flex-col">
            <Button px={'10%'} onClick={() => console.log("aqui")} mb="2">Iniciar Sessão</Button>
            
            <Button px={'10%'} onClick={() => console.log("aqui")} mb="2">Contatos</Button>
            <Button onClick={() => console.log("aqui")} mb="2">Grupos</Button>
            <Button onClick={() => console.log("aqui")} mb="2">Automação de Grupos</Button>
            <Button leftIcon={<ActionLogo/>} onClick={() => console.log("aqui")} mb="2">Ação</Button>
            <Button leftIcon={<EditIcon/>} onClick={() => console.log("aqui")} mb="2">Opções</Button>

            
          </Box>
            {/* Conteúdo do componente selecionado */}
            
            <Box w="75%" p="4">
            {name}
            </Box>
          </Flex>

        </ModalContent>
      </Modal>

      </Td>
    </Tr>
  );
}

export default TablesTableRow;
