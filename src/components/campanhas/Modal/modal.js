import {
    Avatar,
    Badge,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton ,
    ModalBody
  } from "@chakra-ui/react";
  import { Box, Select, Button } from "@chakra-ui/react";
  import { ChatIcon,ChevronDownIcon } from "@chakra-ui/icons";
  import { Input,InputGroup,InputRightElement } from "@chakra-ui/react";
  import bgBody from "assets/img/background-body-admin.png";
  import { tablesTableData } from "variables/general";

  export default function ModalCreate(props){
    const {height} = props
    const components = tablesTableData;
    const teste = false
    return (
        <>
            <ModalOverlay />
            <ModalContent bgImage={bgBody} borderRadius="20px"  border="1px solid gray" boxShadow='lg' h={height}>
                <ModalHeader fontSize='xl'  color='#fff' fontWeight='bold'alignSelf="center">Criar Campanha</ModalHeader>
                <ModalCloseButton fontSize='lg'color='#fff' fontWeight='normal' />  
                
                <Box p="4" fontSize="sm" color="#fff" alignSelf="center">
                <Flex direction="column" gap={2}>
                    <Box>
                        <InputGroup w="270px">
                            <InputRightElement pointerEvents="none">
                                <ChatIcon />
                            </InputRightElement>
                            <Input type="tel" placeholder="Nome do Lançamento" />
                        </InputGroup>
                    </Box>
                    <Box>
                        <InputGroup w="270px">
                            <Select icon={<ChevronDownIcon />} placeholder="Tipo de Lançamento">
                                <option value="option1" style={{ color: "Black" }}>Lista</option>
                                <option value="option1" style={{ color: "Black" }}>Lançamentos</option>
                            </Select>
                        </InputGroup>
                    </Box>
                    <Flex justifyContent="center">
                    <Button colorScheme={teste ? "green" : "gray"} isLoading={teste} loadingText="Loading" color="black">
  Criar
</Button>
                    </Flex>
                </Flex>
            </Box>

                 
            </ModalContent>
        </>
    );
  }
  