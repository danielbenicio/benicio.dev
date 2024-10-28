<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const careers = [
    {
      company: "l2d",
      logo: "/companies/lab2dev.png",
      period: "2022 - Present",
      position: "Full Stack Developer Mid"
    },
    {
      company: "l2d",
      logo: "/companies/lab2dev.png",
      period: "2022 - Present",
      position: "Front End Developer Jr"
    },
    {
      company: "IT Power",
      logo: "/companies/itpower.png",
      period: "2021 - 2021",
      position: "Front End Developer Jr"
    }
  ];

  const textSpans = [
    "I am a full-stack developer passionate about programming and cloud technologies, focused on delivering robust and efficient solutions that meet clients' needs and enhance the product experience. At 22 years old, I started programming at 14 and have continuously refined my skills, with the goal of turning ideas into reality through technology.",
    "My professional journey began right after high school when I secured an internship due to my outstanding performance in a technical IT course. This was a pivotal moment that solidified my love for programming and drove me to seek more knowledge. Currently, I am pursuing a degree in Computer Engineering at São Judas Tadeu University (USJT), complementing my technical training with a solid academic foundation.",
    "In February 2022, I joined Lab2Dev as a junior developer, and through hard work and dedication, I was promoted to a mid-level developer. During my time with the company, I have had the opportunity to collaborate on high-impact projects for major clients like Whirlpool, Gerdau, and the Albert Einstein Hospital. In these experiences, I have applied my skills with technologies such as React, Next.js, Node.js, and especially AWS, developing scalable and secure cloud solutions.",
    "Besides programming, I am passionate about design, which allows me to combine aesthetics and functionality in technological solutions. Always seeking to improve, I have taken courses like Rocketseat's Ignite, the uiStart design course, and JSTACK, which have expanded my skills and given me a broader view of full-stack development.",
    "I am passionate about what I do and am constantly looking for new ways to challenge myself, learn, and contribute to the success of the projects I participate in. My focus is always on delivering results that add value to both clients and end users, ensuring excellence in execution and technological innovation."
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
    font-family: 'JetBrains Mono';
    font-size: 14px;
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
</style>