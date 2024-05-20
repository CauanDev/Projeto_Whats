import { Box,Flex,Avatar,Text,Spacer,Tag } from "@chakra-ui/react";
import { BiMouseAlt,BiTargetLock,BiUserCircle,BiUserPin,BiCopyAlt,BiHourglass     } from "react-icons/bi";
import { DragHandleIcon } from "@chakra-ui/icons";
import Card from "components/Card/Card";
export default function CardGrupo(props){
    const getTime = ()=>{
        const now = new Date();

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
      
        return `${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`;
    }
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
        <Card w={'full'} border={"1px solid gray"} p={4} borderTopRadius={first? '10px': '0px'} borderBottomRadius={end? '10px': '0px'} >            
            <Flex gap={3} alignItems={'center'}> 
                <Avatar  borderRadius='100%' src={avatar} />
                <Box>
                <Text fontSize='md' color='#fff'>{name}</Text>
                <Box fontSize={'sm'}>
                    <Flex gap={5}>
                        <Box>
                            <Flex gap={5}>
                                <Box textAlign="center">                                    
                                    <Text>Cliques</Text>
                                    <Flex gap='2' textAlign="center">              
                                        <BiMouseAlt color="white" fontSize={20}/>                                                                  
                                        <Text color="white">{cliquesAlcançados}/{cliquesMeta}</Text>                                    
                                    </Flex>
                                </Box>

                                <Box textAlign="center">
                                    <Text>Cliques Reais</Text>
                                    <Flex gap='2' textAlign="center">
                                        <BiTargetLock color="white" size={20}/>                                      
                                        <Text color="white">{cliquesReais}</Text>                                 
                                    </Flex>
                                </Box>

                                <Box textAlign="center">                                    
                                    <Text>Participantes</Text>
                                    <Flex gap='2' textAlign="center">     
                                    <BiUserCircle color="white" fontSize={20}/>                                                                
                                        <Text color="white">{cliquesAlcançados}/{cliquesMeta}</Text>                                    
                                    </Flex>
                                </Box>

                            </Flex>
                        </Box>
                        <Box>
                            <Box>
                                <Flex gap={2}>
                                   <BiCopyAlt color="yellow" fontSize={28}/> 
                                   <Text color="yellow" fontSize={'sm'}> Copiar link de convite</Text>
                                </Flex> 
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Flex gap={2}>
                                   <BiHourglass color="white" fontSize={25}/> 
                                   <Text color="white" fontSize={'xs'}> {getTime()}</Text>
                                </Flex> 
                            </Box>
                        </Box>

                        <Box>
                            <Box>
                                <Flex gap={2}>
                                   <BiUserPin color="white" fontSize={25}/> 
                                   <Text color="white" fontSize={'xs'}> Grupo Normal</Text>
                                </Flex> 
                            </Box>
                        </Box>
                    </Flex>
                </Box>                

                </Box>                
                <Spacer/>   
                    <Box>
                        <Flex gap={2}>
                            <Tag colorScheme='green' borderRadius='full'>Grupo Cheio</Tag>
                            <DragHandleIcon color={'white'} fontSize={25}/>                            
                        </Flex>

                    </Box>
            </Flex>            
        </Card>
        </>
    )
}
