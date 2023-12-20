const apresentacao__imagem = document.querySelector(".apresentacao__imagem");
const texto = "Bem vindo ao mundo ilustrado de Jullie Brown";
const elementoMaquinaEscrever = document.querySelector(".typewriter");

function animarFlutuacao() {
    let distancia = 20; // Distância vertical da flutuação em pixels
    let duracao = 2000; // Duração da animação em milissegundos
  
    apresentacao__imagem.style.transition = `transform ${duracao}ms ease-in-out`;
    apresentacao__imagem.style.transform = `translateY(-${distancia}px)`;
  
    setTimeout(() => {
      apresentacao__imagem.style.transition = `transform ${duracao}ms ease-in-out`;
      apresentacao__imagem.style.transform = `translateY(${distancia}px)`;
  
      setTimeout(() => {
        animarFlutuacao();
      }, duracao);
    }, duracao);
  }

  let indice = 0;

  function escreverTexto() {
    if (indice < texto.length) {
      elementoMaquinaEscrever.textContent += texto.charAt(indice);
      indice++;
      setTimeout(escreverTexto, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
    }
  }
  
  // Iniciar a animação quando a página carregar
  window.addEventListener("load", animarFlutuacao);
  // Iniciar a animação quando a página carregar
  window.addEventListener("load", escreverTexto);