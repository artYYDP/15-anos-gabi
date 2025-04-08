// Cronômetro
function atualizarContagemRegressiva() {
  const dataFesta = new Date("2025-11-29T20:00:00");
  const agora = new Date();

  if (dataFesta < agora) {
    document.getElementById("contador").textContent = "A festa já começou!";
    return;
  }

  let anos = dataFesta.getFullYear() - agora.getFullYear();
  let meses = dataFesta.getMonth() - agora.getMonth() + anos * 12;
  let dias = dataFesta.getDate() - agora.getDate();
  let horas = dataFesta.getHours() - agora.getHours();

  // Ajusta se o dia atual ainda não chegou no dia da festa
  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(dataFesta.getFullYear(), dataFesta.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  // Ajusta se ainda não chegou a hora da festa no dia
  if (horas < 0) {
    dias--;
    horas += 24;
  }

  document.getElementById("contador").textContent =
    `⏱️ Faltam ${meses} ${meses === 1 ? 'mês' : 'meses'}, ${dias} ${dias === 1 ? 'dia' : 'dias'} e ${horas} ${horas === 1 ? 'hora' : 'horas'} para a festa!`;
}

// Atualiza a cada 1 minuto (não precisa de segundos)
setInterval(atualizarContagemRegressiva, 60000);
atualizarContagemRegressiva(); // Executa ao carregar a página

// Desativa o clique com o botão direito do mouse
/*document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});*/

// Scroll Spy
const links = document.querySelectorAll('.menu-links a');
const sections = [...document.querySelectorAll('section[id]')];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100; // compensa o menu fixo

  let currentSection = sections.find(section => {
    return scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight;
  });

  links.forEach(link => {
    link.classList.remove('ativo');
    if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
      link.classList.add('ativo');
    }
  });
});
