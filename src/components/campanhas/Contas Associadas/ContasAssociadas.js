import { Box, Flex, Switch } from "@chakra-ui/react"
import CardCampanhas from "../CardCampanhas"
import { tablesTableData } from "variables/general"
import CardContasAssociadas from "../Contas Associadas/CardContasAssociadas"

export default function ContasAssociadas(props){
    const {id} = props
    return(
        <>
        <Box>
            <Flex direction={"column"} gap={2} p={4}>
            {    tablesTableData.map((row, index)=>{
                    return (
                        <CardContasAssociadas
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