import { BiPlayCircle ,BiCategory,BiCog,BiSolidUserPin,BiSolidUserAccount,BiSolidUserRectangle } from "react-icons/bi";
import Iniciar from "components/componentes_contas/Iniciar";
import Contatos from "components/componentes_contas/Contatos";
import Automacao from "components/componentes_contas/Automacao"
import Grupos from "components/componentes_contas/Grupos"
import Opcoes from  "components/componentes_contas/Opcoes"
import Acoes from "components/componentes_contas/Acao"
import InfGeral from "components/Contas/Modal/infGeral";
import DetalhesCampanhas from "components/Contas/Modal/detalhes";

import Info from "components/campanhas_home/Modal/InfGeral";
import Detalhes from "components/campanhas_home/Modal/detalhes";
export const componentsContas = [Iniciar,Contatos,Grupos,Automacao,Acoes,Opcoes]
export const iconsContas = [<BiPlayCircle />, <BiSolidUserRectangle />, <BiSolidUserAccount />, <BiSolidUserPin />, <BiCategory />, <BiCog />];
export const componentsContasHome = [InfGeral,Detalhes]
export const componentsCampanhasHome = [Info, DetalhesCampanhas]
 
