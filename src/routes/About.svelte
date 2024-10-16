<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const careers = [
    {
      company: "l2d",
      logo: "/lab2dev.png",
      period: "2022 - Present",
      position: "Full Stack Developer Mid"
    },
    {
      company: "l2d",
      logo: "/lab2dev.png",
      period: "2022 - Present",
      position: "Front End Developer Jr"
    },
    {
      company: "IT Power",
      logo: "/itpower.png",
      period: "2021 - 2021",
      position: "Front End Developer Jr"
    }
  ];

  const textSpans = [
    "Sou um desenvolvedor full-stack apaixonado por programação e tecnologias da nuvem, com foco em entregar soluções robustas e eficientes que resolvam as necessidades dos clientes e aprimorem a experiência do produto. Com 22 anos, comecei a programar aos 14, e desde então venho aprimorando minhas habilidades, sempre com o objetivo de transformar ideias em realidade por meio da tecnologia.",
    "Minha jornada profissional começou logo após o ensino médio, quando consegui uma posição de estágio graças ao meu excelente desempenho no curso técnico de TI. Esse foi um marco que consolidou minha paixão pela programação e me impulsionou a buscar cada vez mais conhecimento. Atualmente, estou cursando Engenharia da Computação pela Universidade São Judas Tadeu (USJT), o que complementa minha formação técnica com uma sólida base acadêmica.",
    "Em fevereiro de 2022, ingressei na Lab2Dev como desenvolvedor júnior e, através de muito trabalho e dedicação, fui promovido a desenvolvedor pleno. Ao longo da minha trajetória na empresa, tive a oportunidade de colaborar em projetos de grande relevância para gigantes como Whirlpool, Gerdau e o Hospital Albert Einstein. Nessas experiências, pude aplicar minhas habilidades com tecnologias como React, Next.js, Node.js e, principalmente, AWS, desenvolvendo soluções escaláveis e seguras na nuvem.",
    "Além da programação, sou apaixonado por design, o que me permite unir estética e funcionalidade em soluções tecnológicas. Buscando sempre me aperfeiçoar, fiz cursos como o Ignite da Rocketseat, o curso de design uiStart e JSTACK, que expandiram minhas habilidades e me deram uma visão ainda mais abrangente sobre o desenvolvimento full-stack.",
    "Sou apaixonado pelo que faço e estou sempre buscando novas formas de me desafiar, aprender e contribuir com o sucesso dos projetos que participo. Meu foco é sempre entregar resultados que agreguem valor, tanto para os clientes quanto para os usuários finais, garantindo a excelência na execução e na inovação tecnológica."
  ];

  let visibleSpans = 0;
  let visibleCareers = 0;

  onMount(() => {
    const spanInterval = setInterval(() => {
      if (visibleSpans < textSpans.length) {
        visibleSpans++;
      } else {
        clearInterval(spanInterval);
        const careerInterval = setInterval(() => {
          if (visibleCareers < careers.length) {
            visibleCareers++;
          } else {
            clearInterval(careerInterval);
          }
        }, 700);
      }
    }, 700);
  });
</script>


<div class="about-section">
  <h1>About</h1>

  <div class="career">
    <div class="career-history">
      {#each textSpans as span, i}
        {#if i < visibleSpans}
          <span transition:fade={{ duration: 500 }}>
            {span}
          </span>
        {/if}
      {/each}
    </div>
    
    <div class="career-timeline">
      {#each careers as career, index}
        {#if index < visibleCareers}
          <div 
            class="career-item" 
            in:fly="{{ y: 50, duration: 500 }}"
          >
            <img src={career.logo} alt={career.company} class="company-logo" />
            <div class="career-info">
              <span>{career.period}</span>
              <h3>{career.position}</h3>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>


<style>
  .about-section {
    margin-bottom: 8rem;
    height: 84vh;
    width: 100%;
  }

  .about-section h1 {
    color: gray;
  }

  .career {
    margin-top: 3.125rem;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .career-history {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 2.125rem
  }

  .career-history span {
    font-size: 16px;
    font-weight: 200;
    line-height: 24px; 
  }

  .career-timeline {
    height: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 100px;
    display: flex;
  }

  .career-item {
  display: flex;
  align-items: center;
  background-color: #3C2647;
  padding: 32px 40px;
  border-radius: 8px;
  position: relative;
  animation: floating 2s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0); /* Não alterar a posição horizontal */
  }
  50% {
    transform: translateY(-10px); /* Mover apenas para cima */
  }
}

  .company-logo {
    border-radius: 6px;
    width: 60px;
    height: 60px;
    margin-right: 40px;
  }

  .career-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .career-info span {
    font-size: 12px;
    opacity: 0.6;
    font-weight: 600;
  }

  .career-info h3 {
    margin: 5px 0 0;
    font-size: 16px;
  }
</style>