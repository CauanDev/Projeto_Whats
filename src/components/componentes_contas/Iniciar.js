import { Text } from "@chakra-ui/react"

export default function Iniciar(props){

    const {
        name,
        index
    } = props
    return (
        <Text fontSize='sm' color='#fff' fontWeight='normal'> 
        Iniciar QR CODE de {name} posicao {index}
        </Text>
    )
}