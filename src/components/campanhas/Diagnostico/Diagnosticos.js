import { Box,Flex } from "@chakra-ui/react"
import CardDiagnostico from "./CardDiagnostico"
import { tablesTableData } from "variables/general"

export default function Diagnosticos(){
    return(
        <>
        <Box>
            <Flex direction={"column"} gap={3} p={4}>
            {    tablesTableData.map((row, index)=>{
                    return (
                        <CardDiagnostico
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
        </>
    )
}