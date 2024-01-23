$(function() {
  const fotoAvatar = document.querySelector(".profile-avatar")
  const nome = document.querySelector(".profile-name")
  const nomeUsuario = document.querySelector(".profile-username")
  const repositorios = document.querySelector("#numeroRepositorios")
  const seguidores = document.querySelector("#numeroSeguidores")
  const seguindo = document.querySelector("#numeroSeguindo")

  const api = "https://api.github.com/users/vithorDeveloper"

  fetch(api)
  .then((response) => { return response.json() })
  .then((json) => {
    fotoAvatar.src = json.avatar_url
    nome.textContent = json.name
    nomeUsuario.textContent = json.login
    repositorios.textContent = json.public_repos
    seguidores.textContent = json.followers
    seguindo.textContent = json.following
  })
  .catch( (Error) => {
    throw new Error("perfil não encontrado")
  })
})