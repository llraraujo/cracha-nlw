//tipos de variáveis: let ou const

/* camelCase
         PascalCase
         snake_case
      */

const linksSocialMedia = {
  github: 'Luk4ss',
  youtube: 'lucaspuppetsmaster',
  facebook: 'lucass.rego',
  twitter: 'faratroll',
  instagram: 'rocketseat_oficial' //Não tenho instagram, então coloquei um 'id' aleatório.
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Lucas' === userName.textContent = 'Marcelo'
  // i = i + 1 === i++ === i+=1

  for (const itens of socialLinks.children) {
    const social = itens.getAttribute('class')

    itens.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`
    console.log(itens.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(dados => dados.json())
    .then(data => {
      userNamePerfil.textContent = data.name
      userBiografia.textContent = data.bio
      userLinkProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
/* ARROW FUNCTIONS 

Cria uma função anônima!

sintaxe: argumento => {} ou (argumento1, argumento2) => {}

*/
