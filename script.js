function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src','./assets/avatar-light.png')
    } else {
        img.setAttribute('src','./assets/avatar1.png')
     }

     if(html.classList.contains('light')) {
        img.setAttribute('alt','Foto de Leandro de jaqueta jeans e camiseta preta com celular branco no espelho')
    } else {
        img.setAttribute('alt','Foto de Leandro de camisa social cinza com loja ao fundo')
     }
}