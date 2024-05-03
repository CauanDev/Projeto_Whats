import { Text } from "@chakra-ui/react"

export default function Acao(props){

    const {
        name,
        index
    } = props
    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Criacao de Fluxo de Acao do {name} posicao {index}
        </Text>
    )
}