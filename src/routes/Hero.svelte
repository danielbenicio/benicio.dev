<script>
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
</script>

<section>
  <div class="intro">
    <h1>Hello, i'm<br /> Front-end Developer</h1>
    <span>
      I am a full-stack and cloud developer passionate<br />
      about programming and problem-solving.
    </span>
  </div>

  <div class="achievements-container">
    {#each achievements as achievement}
      <div>
        <h1>{achievement.quantity}+</h1>
        <span>{achievement.decription}</span>
      </div>
    {/each}
  </div>

  <button class="floating-button">
    &#8595; 
  </button>
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
    margin-bottom: 1rem;
  }

  .intro span {
    font-size: 0.875rem;
    font-weight: 400;
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

  .floating-button {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: #20273F;
    color: white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    color: gray;
  }
</style>