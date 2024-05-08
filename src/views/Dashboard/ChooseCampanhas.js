import { PlusSquareIcon } from "@chakra-ui/icons";
import { Flex,Box,Text,Spacer } from "@chakra-ui/react";
import CardCampanhas from "components/campanhas/CardCampanhas";

import { tablesTableData } from "variables/general";
export default function ListCampanhas(){
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
                    <PlusSquareIcon/>
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