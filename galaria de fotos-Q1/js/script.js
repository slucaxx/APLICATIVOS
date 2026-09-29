const imagem =document.querySelector("#alvo")
const btantes =document.querySelector("#bt1")
const btavatar =document.querySelector("#bt2")
const btjoker =document.querySelector("#bt3")
const btmiranha =document.querySelector("#bt4")

btantes.addEventListener("click",antesde)
btavatar.addEventListener("click",avatar)
btjoker.addEventListener("click",joker)
btmiranha.addEventListener("click",miranha)

function antesde (){
    alvo.src="imagens/anes-de-vc.jpg"
    sinopse.textContent = `O filme Como Eu Era Antes de Você (2016) acompanha a história de Louisa Clark (Emilia Clarke), uma jovem excêntrica e otimista de origem humilde que, após perder o emprego, é contratada para ser cuidadora de Will Traynor (Sam Claflin). Will era um homem rico, ativo e bem-sucedido cuja vida mudou drasticamente após um acidente de moto que o deixou tetraplégico.
Abalado pela perda de sua autonomia, Will torna-se profundamente cínico e depressivo, alimentando o desejo de realizar um suicídio assistido em um prazo de seis meses. Ao descobrir o plano, Louisa assume a missão de provar a ele que a vida ainda vale a pena, organizando passeios e experiências marcantes. Nesse processo, a convivência forçada se transforma em uma conexão profunda, mudando o destino e as perspectivas de ambos.
Para relembrar os momentos mais marcantes e entender a dinâmica emocionante do casal, assista ao resumo detalhado da história:
`
}
function avatar (){
    alvo.src="imagens/avatar.jpg"
    sinopse.textContent = `O filme Como Eu Era Antes de Você (2016) acompanha a história de Louisa Clark (Emilia Clarke), uma jovem excêntrica e otimista de origem humilde que, após perder o emprego, é contratada para ser cuidadora de Will Traynor (Sam Claflin). Will era um homem rico, ativo e bem-sucedido cuja vida mudou drasticamente após um acidente de moto que o deixou tetraplégico.
    Abalado pela perda de sua autonomia, Will torna-se profundamente cínico e depressivo, alimentando o desejo de realizar um suicídio assistido em um prazo de seis meses. Ao descobrir o plano, Louisa assume a missão de provar a ele que a vida ainda vale a pena, organizando passeios e experiências marcantes. Nesse processo, a convivência forçada se transforma em uma conexão profunda, mudando o destino e as perspectivas de ambos.
    Para relembrar os momentos mais marcantes e entender a dinâmica emocionante do casal, assista ao resumo detalhado da história:
    `
    
    
}
function joker (){
    alvo.src="imagens/joker.jpg"
    sinopse.textContent = `Em uma Gotham City decadente, fria e assolada pela desigualdade social no início dos anos 1980, Arthur vive isolado com sua mãe doente e sofre de uma condição neurológica que provoca risadas incontroláveis em momentos de estresse. Constantemente agredido, humilhado e marginalizado por uma sociedade indiferente, ele vê sua estabilidade mental desmoronar quando os cortes de verba do governo interrompem seu acompanhamento psiquiátrico e o acesso aos seus medicamentos. Após ser demitido e sofrer um ataque violento no metrô, Arthur reage assassinando três empresários da elite de Gotham. Esse ato de fúria inesperadamente desencadeia um massivo movimento popular de revolta contra os mais ricos. À medida que mergulha no niilismo e na loucura, Arthur abraça definitivamente a persona do "Coringa", transformando sua tragédia pessoal no estopim para o caos e uma violenta revolução urbana.`
}
function miranha (){
    alvo.src="imagens/miranha.jpg"
    sinopse.textContent = `Sinopse de Homem-Aranha: Um Novo Dia
Quatro anos após os eventos de Sem Volta para Casa, o mundo inteiro esqueceu a identidade de Peter Parker. Agora um adulto vivendo em total isolamento social, ele se dedica integralmente a ser o Homem-Aranha em tempo integral em Nova York. Enquanto lida com a solidão e assiste de longe a sua antiga namorada, MJ (Zendaya), e seu melhor amigo, Ned (Jacob Batalon), viverem novas vidas sem lembrar dele, a imensa pressão de sua jornada dupla engatilha uma perigosa evolução física em seus próprios poderes. Para proteger a cidade e as pessoas que ama, Peter precisará enfrentar uma misteriosa ameaça psíquica e telepática e descobrir se é possível se adaptar a essa nova realidade sem perder sua essência
    `
}


