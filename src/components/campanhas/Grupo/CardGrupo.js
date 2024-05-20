import { Box,Flex,Avatar,Text,Spacer,Input } from "@chakra-ui/react";
import { BiMouseAlt,BiTargetLock } from "react-icons/bi";

export default function CardGrupo(props){

    const {
        name,
        avatar,
        cliquesAlcançados,
        cliquesMeta,
        cliquesReais,
        participantes,
        link,
        data,
        tipoGrupo,
        cheio,
        first,
        end
    } = props;
    return(
        <>
        <Box w={'full'} border={"1px solid gray"} p={4} borderTopRadius={first? '10px': '0px'} borderBottomRadius={end? '10px': '0px'} >            
            <Flex gap={3} alignItems={'center'}> 
                <Avatar  borderRadius='100%' src={avatar} />
                <Box>
                <Text fontSize='md' color='#fff'>{name}</Text>
                <Box>
                    <Flex>
                        <Box>
                            <Flex gap={2}>
                                <Box textAlign="center">
                                    
                                    <Text>Cliques</Text>
                                    <Flex gap='2'>             
                                        <Text color="white" fontSize={20}>
                                            <BiMouseAlt />
                                        </Text>                           
                                        <Text color="white">{cliquesAlcançados}/{cliquesMeta}</Text>                                    
                                    </Flex>
                                </Box>

                                <Box textAlign="center">
                                    <Text>Cliques Reais</Text>
                                    <Flex gap='2'>
                                        <Text>
                                            <BiTargetLock color="white" size={20}/>
                                        </Text>
                                        <Text color="white">{cliquesReais}</Text>                                    

                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                </Box>
                <Spacer/>   
            </Flex>            
        </Box>
        </>
    )
}