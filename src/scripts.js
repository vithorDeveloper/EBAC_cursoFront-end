$(function() {
  const fotoAvatar = document.querySelector(".profile-avatar")
  const nome = document.querySelector(".profile-name")
  const nomeUsuario = document.querySelector(".profile-username")
  const repositorios = document.querySelector("#numeroRepositorios")
  const seguidores = document.querySelector("#numeroSeguidores")
  const seguindo = document.querySelector("#numeroSeguindo")

  const api = "https://api.github.com/users/vithorDeveloper"

  fetch(api)
  .then((response) => { 

      if(!response.ok){
        console.error("Perfil não encontrado");
      }

      return response.json()
   })
  .then((json) => {

    if(!json.avatar_url || json.name || json.login || json.public_repos || json.followers || json.following){
       console.error("dados do usuário não encontrado!")
    }

    fotoAvatar.src = json.avatar_url
    nome.textContent = json.name
    nomeUsuario.textContent = json.login
    repositorios.textContent = json.public_repos
    seguidores.textContent = json.followers
    seguindo.textContent = json.following
  })
  .catch( (error) => {
    console.error(error.message);
  })
})