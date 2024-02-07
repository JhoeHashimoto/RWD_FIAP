

function mudarLinguagem(linguagem){
    var titleText= document.getElementById('titleText')
    if(linguagem ==='pt'){ //verdadeiro para pt
        titleText.innerText='Clinica Odontológica'
    }
    else{
        titleText.innerText='Dental Clinic'

    }
}



function mudarTema(){
    //rastreando o documento
    //pegando elemento  tag body
    var body = document.body;

    //header É UMA TAG SEMANTICA, e para elementos semanticos ou texto é necessário utilizar metodos de seleção
    //como querySelector e depois é necessario botar entre parenteses QUERYsEELECTOR pega uma tag
    var header = document.querySelector("header")

    //pega o .body e verifica se tem uma class list, aqui no caso light-theme que foi declarado no index.html
    if(body.classList.contains('light-theme')){
        // se for verdadeiro
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        header.classList.add('header-green')
    }
    else{
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        header.classList.add('header-dark')
    }

}
