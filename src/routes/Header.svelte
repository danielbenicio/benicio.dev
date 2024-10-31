<script>
  const tags = [
    {
      name: "Sobre",
      href: "#about",
    },
    {
      name: "Tecnologias",
      href: "#technologies",
    },
    {
      name: "Projetos",
      href: "#projects",
    }
  ];

  /**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
	 * @param {string} targetId
	 */
  function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
</script>

<header>
  <div class="website-name" id="header">
    <h2>BENICIO<span class="dot">.</span><span>me</span></h2>

    <div class="navbar">
      {#each tags as tag}
        <a href={tag.href} on:click={(event) => smoothScroll(event, tag.href.slice(1))}>{tag.name}</a>
      {/each}
    </div>

    <a class="contact-button" href="#contact" on:click={(event) => smoothScroll(event, "contact")}>Contato</a>
  </div>
</header>

<style>
  .website-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-weight: 600;
    font-family: 'JetBrains Mono';
  }
  
  .dot {
    color: #7D2D9D;
  }

  span {
    color: gray;
  }

  .navbar {
    display: flex;
    gap: 2.625rem;
  }

  a {
    text-decoration: none;
    color: rgb(136, 121, 121);
    font-weight: 600;
    transition: color 0.3s ease, opacity 0.3s ease;
    cursor: pointer;
  }

  a:hover {
    color: rgb(110, 98, 98);
    opacity: 0.8;
  }

  .contact-button {
    padding: 12px 40px;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .contact-button:hover {
    color: #fff;
    background-color: #27272B; 
    border: 1px white solid;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .website-name {
      justify-content: center;
    }
    
    h2 {
      font-size: 20px;
      font-weight: 600;
      font-family: 'JetBrains Mono';
    }

    .navbar {
      display: none;
    }

    .contact-button {
      display: none;
    }
  }
</style>