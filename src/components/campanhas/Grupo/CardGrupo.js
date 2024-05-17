import { Box,Flex,Avatar,Text,Spacer,Input } from "@chakra-ui/react";

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
                            <Flex direction={'column'}>
                                <Text>Cliques</Text>
                                <Text>{cliquesAlcançados}/{cliquesMeta}</Text>
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