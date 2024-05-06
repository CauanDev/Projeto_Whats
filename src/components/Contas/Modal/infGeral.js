import { Text,Box } from "@chakra-ui/react";

export default function InfGeral(props){
    const {
        name,
        index
    } = props

    return (
        <>
        <Box h="300%">
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Informações Gerais sobre {name} posicao {index}
        </Text>
        </Box>
        </>
    );
}