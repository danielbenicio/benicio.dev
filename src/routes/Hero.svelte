<script lang="ts">
  import { onMount } from 'svelte';

  const achievements = [
    {
      decription: "Years",
      quantity: 3
    },
    {
      decription: "Commits",
      quantity: 300
    },
    {
      decription: "Technologies",
      quantity: 20
    },
    {
      decription: "Projects",
      quantity: 50
    },
  ]

  let animatedCounts = achievements.map(achievement => ({ ...achievement, current: 0 }));

  function animateCount(element: HTMLElement | null, target: number) {
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / target));
    let count = 0;

    const interval = setInterval(() => {
      count += 1;
      element!.textContent = `${count}+`;

      if (count === target) {
        clearInterval(interval);
      }
    }, stepTime);
  }

  onMount(() => {
    animatedCounts.forEach((achievement, index) => {
      const targetElement = document.getElementById(`achievement-${index}`);
      animateCount(targetElement, achievement.quantity);
    });
  });

    let phrases = [
    "Front-end Developer",
    "Back-end Developer",
    "Cloud Developer",
    "Daniel Benício"
  ];

  let currentPhrase = phrases[0];
  let currentIndex = 0;

  const writeSpeed = 100;  // Velocidade para escrever cada letra
  const eraseSpeed = 50;   // Velocidade para apagar cada letra
  const pauseBetween = 2000; // Pausa entre frases

  function animateText() {
    let text = "  ";
    let phase = 'writing'; // Controla se estamos escrevendo ou apagando
    let letterIndex = 0;

    const interval = setInterval(() => {
      if (phase === 'writing') {
        if (letterIndex < phrases[currentIndex].length) {
          text += phrases[currentIndex][letterIndex++];
          currentPhrase = text;
        } else {
          phase = 'pausing';
          setTimeout(() => {
            phase = 'erasing';
          }, pauseBetween);
        }
      } else if (phase === 'erasing') {
        if (letterIndex > 0) {
          text = text.slice(0, -1);
          currentPhrase = text;
          letterIndex--;
        } else {
          phase = 'writing';
          currentIndex = (currentIndex + 1) % phrases.length; // Passa para a próxima frase
        }
      }
    }, phase === 'writing' ? writeSpeed : eraseSpeed);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é destruído
  }

  onMount(() => {
    animateText();
  });
</script>

<section>
  <div class="intro">
    <h1>Hello, I'm<br />
      {#if currentPhrase.length > 2}
        {currentPhrase}
      {:else}
        <span style="visibility: hidden;">placeholder</span>
      {/if}
    </h1>
    <span>
      I am a full-stack and cloud developer passionate<br />
      about programming and problem-solving.
    </span>
  </div>

  <div class="achievements-container">
    {#each animatedCounts as achievement, index}
      <div>
        <h1 id="achievement-{index}">{achievement.current}+</h1>
        <span>{achievement.decription}</span>
      </div>
    {/each}
  </div>

  <div class="floating-button-container">
    <button class="floating-button">
      &#8595; 
    </button>
  </div>
</section>

<style>
  section {
    margin-top: 9.25rem;
  }

  .intro {
    text-align: center;
  }

  .intro h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.4;
     min-width: 200px;
    margin-bottom: 1rem;
  }

  .intro span {
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(180, 166, 166);
  }

  .achievements-container {
    margin-top: 6.25rem;
    display: flex;
    justify-content: space-between;  
  }

  .achievements-container div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .achievements-container h1 {
    font-family: "JetBrains Mono", monospace;
    font-size: 3.375rem;
    font-weight: 800;
    margin-bottom: 4px;
  }

  .floating-button-container {
    margin-top: 1.25rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .floating-button {
    margin-bottom: 10rem;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: #27272B;
    color: white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    color: gray;
    animation: floating 2s ease-in-out infinite;
  }

  @keyframes floating {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>