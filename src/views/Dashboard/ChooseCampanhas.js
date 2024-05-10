import { PlusSquareIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Flex,Box,Text,Spacer } from "@chakra-ui/react";
import CardCampanhas from "components/campanhas/CardCampanhas";
import { Modal } from "@chakra-ui/react";
import ModalCreate from "components/campanhas/Modal/modal";
import { tablesTableData } from "variables/general";
export default function ListCampanhas(){
  const { isOpen, onOpen, onClose } = useDisclosure() 
    return(
        <>
        <Box p={"5%"}>
            <Flex direction={"column"} gap={10}>

            
            <Box>
                <Flex>
                    <Text  
                    fontWeight='bold'
                    fontSize="3xl"              
                    color="#fff"> 
                    Campanhas
                    </Text>   
                    <Spacer/>
                    <Text  
                    fontWeight='bold'
                    fontSize="3xl"              
                    color="#fff"> 
                    <PlusSquareIcon cursor={"pointer"} onClick={onOpen}/>
                    <Modal  isOpen={isOpen} onClose={onClose} size="lg" closeOnOverlayClick={false}  >
                    <ModalCreate
                     height = "40%"                   
                    />
                    </Modal>       
                    </Text>  
                </Flex>

            </Box>
            <Box>
                <Flex direction={"column"} gap={3}>
                    
                {    tablesTableData.map((row, index)=>{
                    return (
                        <CardCampanhas
                        logo = {row.logo}
                        index = {index}
                        name = {row.name}
                        subName = {row.domain}
                        status = {row.status}
                        />                        
                    )

                }) }                    
                </Flex>
            </Box>
            </Flex>
        </Box>
        </>
    );
}