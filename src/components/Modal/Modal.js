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
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import bgBody from "assets/img/background-body-admin.png";

export default function PainelModal(props){
  const [componenteAtual, setComponenteAtual] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (Componente, props) => {
      setComponenteAtual(() => <Componente {...props} />);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const {
      titles,
      icons,
      name,
      index,
      components
  } = props;

  return (
      <>
          <ModalOverlay />
          <ModalContent bgImage={bgBody} borderRadius="20px"  border="1px solid gray" boxShadow='lg' h="60%">
              <ModalHeader fontSize='lg' color='#fff' fontWeight='normal'>{name}</ModalHeader>
              <ModalCloseButton fontSize='lg'color='#fff' fontWeight='normal' />

              <Flex>
                  <Box w="30%"  p="4" className="flex flex-col">
                      {titles.map((element, i) => (
                        
                        <Button key={i} onClick={() => handleClick(components[i], { name: name, index: index })} mb="2" w="100%" title={element}>{element}</Button>      
                             
                      ))}
                  </Box>
                  <Box w="70%" p="4" fontSize='sm' color='#fff'>
                      {componenteAtual}
                  </Box>
              </Flex>

          </ModalContent>
      </>
  );
}
