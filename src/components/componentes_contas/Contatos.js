import { Text } from "@chakra-ui/react"

export default function Contatos(props){

    const {
        name,
        index
    } = props
    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Visualização de Contatos do {name} posicao {index}
        </Text>
    )
}