<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const careers = [
    {
      company: "l2d",
      logo: "/companies/lab2dev.png",
      period: "Abril 2022 - Presente",
      position: "Full Stack Developer Pl"
    },
    {
      company: "l2d",
      logo: "/companies/lab2dev.png",
      period: "Fevereiro 2022 - Agosto 2022",
      position: "Front End Developer Jr"
    },
    {
      company: "IT Power",
      logo: "/companies/itpower.png",
      period: "Fevereiro 2021 -  Junho 2021",
      position: "Front End Developer Jr"
    }
  ];

  const textSpans = [
    "Sou um desenvolvedor full-stack apaixonado por programação e tecnologias de cloud, focado em entregar soluções robustas e eficientes que atendam às necessidades dos clientes e melhorem a experiência do produto. Comecei a programar aos 14 e venho aperfeiçoando minhas habilidades continuamente, com o objetivo de transformar ideias em realidade por meio da tecnologia.",
    "Minha jornada profissional começou logo após o ensino médio, quando consegui um estágio devido ao meu excelente desempenho em um curso técnico de TI. Esse foi um momento crucial que solidificou meu amor pela programação e me motivou a buscar mais conhecimento. Atualmente, estou cursando Engenharia da Computação na Universidade São Judas Tadeu (USJT), complementando minha formação técnica com uma base acadêmica sólida.",
    "Em fevereiro de 2022, entrei na Lab2Dev como desenvolvedor júnior e, através de muito trabalho e dedicação, fui promovido a desenvolvedor pleno. Durante meu tempo na empresa, tive a oportunidade de colaborar em projetos de alto impacto para grandes clientes, como Whirlpool, Gerdau e o Hospital Albert Einstein. Nessas experiências, apliquei minhas habilidades com tecnologias como React, Next.js, Node.js e, especialmente, AWS, desenvolvendo soluções em nuvem escaláveis e seguras.",
    "Além da programação, sou apaixonado por design, o que me permite combinar estética e funcionalidade nas soluções tecnológicas. Sempre buscando melhorar, fiz cursos como o Ignite da Rocketseat, o curso de design uiStart e o JSTACK, que ampliaram minhas habilidades e me deram uma visão mais ampla do desenvolvimento full-stack.",
    "Sou apaixonado pelo que faço e estou constantemente em busca de novas maneiras de me desafiar, aprender e contribuir para o sucesso dos projetos dos quais participo. Meu foco está sempre em entregar resultados que agreguem valor tanto para os clientes quanto para os usuários finais, garantindo excelência na execução e inovação tecnológica."
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


<div class="about-section" id="about">
  <h1>Sobre</h1>

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
    font-family: 'JetBrains Mono';
    font-size: 14px;
    font-weight: 400;
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
  background-color:  #27272B;
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

  @media (max-width: 1440px) {
    .career-history span {
      font-size: 12px
    }

    .career-history span:last-child {
      display: none;
   }
  }

  @media (max-width: 1800px) {
    .career-history span {
      font-size: 12px
    }

    .career-history span:last-child {
      display: none;
   }
  }

  @media (max-width: 768px) {
    .about-section {
      margin-bottom: 8rem;
      height: 100%;
      width: 100%;
    }

    .about-section h1 {
      color: gray;
    }

		.career {
      margin-top: 1rem;
      flex-direction: column;
    }

    .career-history {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.125rem;
      margin-bottom: 3rem;
    }

    .career-history span {
      font-family: 'JetBrains Mono';
      font-size: 12px;
      font-weight: 300;
      line-height: 20px; 
    }
    
    .career-timeline {
      align-items: center;
      justify-content: center;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 30px;
    }

    .career-item {
      display: flex;
      align-items: center;
      background-color:  #27272B;
      padding: 18px 30px;
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
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }

    .career-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .career-info span {
      font-size: 10px;
      opacity: 0.6;
      font-weight: 600;
    }

    .career-info h3 {
      margin: 5px 0 0;
      font-size: 12px;
    }
  }
</style>