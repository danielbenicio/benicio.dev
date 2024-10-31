<script>
  const enterprises = [
    { img: "/companies/whp.png", alt: "Enterprise 1" },
    { img: "/companies/gerdau.png", alt: "Enterprise 2" },
    { img: "/companies/einstein.png", alt: "Enterprise 3" },
    { img: "/companies/swift.png", alt: "Enterprise 4" },
    { img: "/companies/zurich.png", alt: "Enterprise 2" },
    { img: "/companies/lab2dev-white.png", alt: "Enterprise 3" },
    { img: "/companies/ultracargo.png", alt: "Enterprise 4" },
    { img: "/companies/piracanjuba.svg", alt: "Enterprise 4" },
    { img: "/companies/mazars.png", alt: "Enterprise 4" },
    { img: "/companies/caixa.png", alt: "Enterprise 4" },
  ];
</script>

<div class="projects-section" id="projects">
  <h1>Projetos</h1>
  <div class="clients-container">
    <h1>Empresas em crescimento ao redor do mundo confiam no meu trabalho</h1>
    <div class="enterprises-container">
      <span>Algumas das empresas em que trabalhei:</span>
      <div class="enterprises-carousel-wrapper">
        <div class="enterprises-carousel">
          {#each [...enterprises, ...enterprises] as enterprise}
            <div class="enterprises-card">
              <img src={enterprise.img} alt={enterprise.alt}>
            </div>
          {/each}
        </div>
        <!-- Blur divs at the start and end -->
        <div class="blur left-blur"></div>
        <div class="blur right-blur"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .projects-section {
    height: 82vh;
    width: 100%;
  }

  .projects-section > h1 {
    color: gray;
  }

  .clients-container {
    margin-top: 3rem;
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('/world-map.png') no-repeat center center;
    background-size: 100% 100%;  
  }

  .clients-container h1 {
    padding: 16rem 0rem 7rem 0rem;
    font-size: 32px;
    color: #fff;
    font-weight: 600;
  }

  .enterprises-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .enterprises-container span {
    color: gray;
    font-weight: 700;
  }

  .enterprises-carousel-wrapper {
    width: 100%;
    max-width: 1500px;
    overflow: hidden;
    margin: 0 auto;
    position: relative; /* Added to position blur elements */
  }

  .enterprises-carousel {
    display: flex;
    gap: 20px;
    animation: scroll 30s linear infinite; /* Changed to 30s */
    width: calc(200px * 14 + 20px * 13);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 12 - 20px * 12));
    }
  }

  .enterprises-card {
    border-radius: 6px;
    border: 1px solid #5F5B5B;
    background: #18181b;
    width: 240px;
    height: 110px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .enterprises-card img {
    width: 50%;
    max-height: 80%;
    object-fit: contain;
  }
  .blur {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px; /* Aumentando a largura do blur */
    z-index: 1;
  }

  .left-blur {
    left: 0; /* Corrigindo o valor para 0 */
    background: linear-gradient(to right, rgba(24, 24, 27, 1), rgba(24, 24, 27, 0)); /* Transição mais longa */
  }

  .right-blur {
    right: 0;
    background: linear-gradient(to left, rgba(24, 24, 27, 1), rgba(24, 24, 27, 0)); /* Transição mais longa */
  }

  @media (max-width: 768px) {
		.projects-section {
      height: 100%;
      width: 100%;
    }

    .clients-container {
      margin-top: -240px;
      width: 100%;
      height: 10%;
      display: flex;
      align-items: normal;
      justify-content: normal;
      background: none;
      background-size: none;  
    }

    .clients-container h1 {
      font-size: 26px;
      text-align: center;
      color: #fff;
      font-weight: 600;
    }

    .enterprises-container {
      margin-top: -50px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
    }

    .enterprises-container span {
      color: gray;
      font-weight: 700;
    }

    .enterprises-carousel-wrapper {
      width: 100%;
      max-width: 1500px;
      overflow: hidden;
      margin: 0 auto;
      position: relative; /* Added to position blur elements */
    }

    .enterprises-carousel {
      display: flex;
      gap: 20px;
      animation: scroll 30s linear infinite; /* Changed to 30s */
      width: calc(200px * 14 + 20px * 13);
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-200px * 12 - 20px * 12));
      }
    }

    .enterprises-card {
      border-radius: 6px;
      border: 1px solid #5F5B5B;
      background: #18181b;
      width: 200px;
      height: 90px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
