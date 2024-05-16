import { BiPlayCircle ,BiCategory,BiCog,BiSolidUserPin,BiSolidUserAccount,BiSolidUserRectangle } from "react-icons/bi";
import Iniciar from "components/componentes_contas/Iniciar";
import Contatos from "components/componentes_contas/Contatos";
import Automacao from "components/componentes_contas/Automacao"
import Grupos from "components/componentes_contas/Grupos"
import Opcoes from  "components/componentes_contas/Opcoes"
import Acoes from "components/componentes_contas/Acao"
import InfGeral from "components/Contas/Modal/infGeral";
import DetalhesCampanhas from "components/Contas/Modal/detalhes";
import ContasAssociadas from "components/campanhas/Contas Associadas/ContasAssociadas";
import Diagnosticos from "components/campanhas/Diagnostico/Diagnosticos";
import VisaoGeral from "components/campanhas/VisaoGeral";
import GruposCampanha from "components/campanhas/Grupo/Grupo";
import Info from "components/campanhas_home/Modal/InfGeral";
import Detalhes from "components/campanhas_home/Modal/detalhes";
import Visualizacao from "components/campanhas/Grupo/Visualizacao"
import Alteracao from "components/campanhas/Grupo/Alteracao";
import Exportar from "components/campanhas/Grupo/Exportacao";
import ExportarLeads from "components/campanhas/Grupo/ExportarLeads";
import GruposDuplicados from "components/campanhas/Grupo/GruposDuplicados";
import Importacao from "components/campanhas/Grupo/Importacao";
import ParticipantesDuplicados from "components/campanhas/Grupo/ParticipantesDuplicados";
import Criacao from "components/campanhas/Grupo/Criacao";
export const componentsContas = [Iniciar,Contatos,Grupos,Automacao,Acoes,Opcoes]
export const iconsContas = [<BiPlayCircle />, <BiSolidUserRectangle />, <BiSolidUserAccount />, <BiSolidUserPin />, <BiCategory />, <BiCog />];
export const componentsContasHome = [InfGeral,Detalhes]
export const componentsCampanhasHome = [Info, DetalhesCampanhas]
export const componentesCampanha = [VisaoGeral,ContasAssociadas,Diagnosticos,GruposCampanha]
export const componentesCampanhasGrupos =[Visualizacao,Criacao,Alteracao,Importacao,Exportar,ExportarLeads,GruposDuplicados,ParticipantesDuplicados]
export const titlesCompontesCampanhaGrupo = ["Visualização","Criar Grupos","Alterar Grupos","Importar Grupos","Exportar Grupos","Exportar Leads","Participantes Duplicados","Grupos Duplicados"]