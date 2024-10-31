<script>
  import { Tv, Settings, Cloud } from 'lucide-svelte';
  const skills = [
    { img: "/skills/git.png", alt: "Git" },
    { img: "/skills/react.png", alt: "React" },
    { img: "/skills/amplify.png", alt: "Amplify" },
    { img: "/skills/bitbucket.png", alt: "Bitbucket" },
    { img: "/skills/cloudwatch.png", alt: "Cloudwatch" },
    { img: "/skills/docker.png", alt: "Docker" },
    { img: "/skills/express.png", alt: "Express" },
    { img: "/skills/flutter.png", alt: "Flutter" },
    { img: "/skills/github.png", alt: "Github" },
    { img: "/skills/jest.png", alt: "Jest" },
    { img: "/skills/js.png", alt: "javascript" },
    { img: "/skills/lambda.png", alt: "Lambda" },
    { img: "/skills/mongodb.png", alt: "Mongodb" },
    { img: "/skills/nest.svg", alt: "Nest" },
    { img: "/skills/next.png", alt: "Next" },
    { img: "/skills/node.png", alt: "Node" },
    { img: "/skills/postgreesql.png", alt: "Postgree" },
    { img: "/skills/prisma.png", alt: "Prisma" },
    { img: "/skills/python.png", alt: "Python" },
    { img: "/skills/rds.png", alt: "RDS" },
    { img: "/skills/redux.png", alt: "Redux" },
    { img: "/skills/s3.png", alt: "S3" },
    { img: "/skills/sns.png", alt: "SNS" },
    { img: "/skills/sqs.png", alt: "SQS" },
    { img: "/skills/tailwind.png", alt: "Tailwind" },
    { img: "/skills/vercel.png", alt: "Vercel" },
    { img: "/skills/vite.png", alt: "Vite" },
    { img: "/skills/vtex.png", alt: "Vtex" },
    { img: "/skills/aws.png", alt: "AWS" },
    { img: "/skills/cloudwatch.png", alt: "Cloudwatch" },
    { img: "/skills/dynamodb.png", alt: "DynamoDB" },
    { img: "/skills/ecs.png", alt: "ECS" },
    { img: "/skills/grafana.png", alt: "Grafana" },
    { img: "/skills/linux.png", alt: "Linux" },
    { img: "/skills/redis.png", alt: "Redis" },
    { img: "/skills/webprice.png", alt: "Webprice" },
  ];
</script>

<div class="skills-section" id="technologies">
  <div class="skills-label-container">
    <h1>SKILLS</h1>
    <span>Fullstack Cloud Developer</span>
  </div>
  <div class="skill-cards-container">
    <div class="skill-card">
      <div class="icon-container">
        <Tv size={24} color="#6366f1" strokeWidth={1.5} />
      </div>
      <h3>Frontend development</h3>
      <span>
        Crio <b>interfaces modernas</b>, <b>dinâmicas</b> e <b>responsivas</b>, projetadas para proporcionar uma <b>experiência de usuário excepcional</b>. Meu trabalho é focado em <b>performance</b> e <b>qualidade</b>, utilizando <b>técnicas avançadas de estilização</b>, <b>componentização eficiente</b> e os <b>frameworks mais modernos de front-end</b> para entregar interfaces <b>rápidas</b>, <b>intuitivas</b> e <b>escaláveis</b>. Aplicando as <b>melhores práticas</b> em <b>gerenciamento de estado</b>, <b>design UX</b> e <b>princípios de código limpo</b>, garanto que as aplicações permaneçam <b>fluidas</b>, <b>responsivas</b> e <b>otimizadas</b> para todos os <b>dispositivos</b> e <b>tamanhos de tela</b>.
      </span>
    </div>
    <div class="skill-card">
      <div class="icon-container">
        <Settings size={24} color="#6366f1" strokeWidth={1.5}/>
      </div>
      <h3>Backend development</h3>
      <span>
        Desenvolvo sistemas <b>robustos</b> e <b>eficientes</b> que garantem a <b>segurança</b>, <b>escalabilidade</b> e <b>performance</b> das suas aplicações. Com experiência na construção de <b>APIs</b> e <b>arquiteturas modernas</b>, foco na integração perfeita entre <b>serviços</b> e <b>dados</b>, sempre acompanhada de uma <b>documentação clara</b> e <b>testes rigorosos</b> para garantir <b>estabilidade</b> e <b>manutenção contínua</b>. Cada projeto se beneficia de uma abordagem <b>estruturada</b>, otimizando tanto para <b>funcionalidade</b> quanto para <b>longevidade</b>, assegurando que suas aplicações funcionem de maneira <b>suave</b> e <b>confiável</b>.
      </span>
    </div>
    <div class="skill-card">
      <div class="icon-container">
        <Cloud size={24} color="#6366f1" strokeWidth={1.5} />
      </div>
      <h3>Cloud development</h3>
      <span>
        Sou especializado em desenvolvimento na nuvem, utilizando principalmente a <b>AWS</b> para construir aplicações <b>escaláveis</b>, <b>seguras</b> e de alto desempenho. Com expertise em serviços como <b>Lambda</b>, <b>EC2</b>, <b>DynamoDB</b> e <b>S3</b>, projeto arquiteturas que otimizam a eficiência de recursos e a resiliência. Minha abordagem integra as melhores práticas em <b>infraestrutura como código</b>, <b>pipelines de CI/CD</b> e monitoramento, garantindo aplicações ágeis, disponíveis e econômicas. Através de planejamento cuidadoso e automação, entrego soluções em nuvem que apoiam o crescimento dos negócios.
      </span>
    </div>
  </div>
  <span style=" font-size: 16px; color: gray; font-weight: 700; margin-bottom: 2rem;">Ferramentas que utilizo:</span>
  <div class="skills-carousel-wrapper">
    <div class="skills-carousel">
      {#each [...skills, ...skills] as skill}
        <div class="skill-item">
          <img src={skill.img} alt={skill.alt} />
          <div class="skill-box">
            <span class="skill-name">{skill.alt}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .skills-section {
    margin-top: 6rem;
    height: 98vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills-label-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
  }

  .skills-label-container > h1 {
    font-size: 36px;
    color: gray;
    font-weight: 600;
  }

  .skills-label-container > span {
    font-size: 16px;
    color: gray;
    font-weight: 700;
  }

  .skill-cards-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8rem;
  }

  .skill-card {
    width: 360px;
    height: 420px;
    border-radius: 6px;
    border: 1px solid #5F5B5B;
    background: #18181B;
    box-sizing: border-box;
    padding: 24px;
  }

  .icon-container {
    border-radius: 4px;
    border: 1px solid rgba(95, 91, 91, 0.20);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill-card > span {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.60;
  }

  .skill-card  b {
    font-size: 12px;
    font-weight: 800;
    color: white;
    opacity: 1;
  }

  .skills-carousel-wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .skills-carousel {
    display: flex;
    gap: 10px;
    animation: scroll 40s linear infinite;
    width: max-content;
  }

  .skills-carousel img {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    object-fit: contain;
    transition: transform 0.3s, opacity 0.3s;
  }

  .skills-carousel .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .skills-carousel .skill-item:hover img {
    transform: scale(0.9);
    opacity: 0.7;
  }

  .skills-carousel .skill-item:hover .skill-name {
    opacity: 1;
  }

  .skills-carousel .skill-item:hover .skill-box {
    display: flex;
  }

  .skill-box {
    background: #27272B;
    padding: 2px 10px;
    border-radius: 6px;
    display: none;
    transition: display 0.10s;
  }

  .skill-name {
    font-size: 12px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.10s;
    color: #FFF;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1440px) {
    .skills-section {
      margin-top: 6rem;
      height: 100vh;
    }

    .skill-card {
      width: 330px;
      height: 410px;
    }

    .skill-cards-container {
      margin-bottom: 6rem;
   }
  }

  @media (max-width: 1800px) {
    .skills-section {
      margin-top: 6rem;
      height: 100vh;
    }

    .skill-card {
      width: 340px;
      height: 420px;
    }

    .skill-cards-container {
      margin-bottom: 6rem;
   }
  }

  @media (max-width: 768px) {
    .skills-section {
      margin-top: 4rem;
      height: 100%;
    }

    .skills-label-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
    }

    .skills-label-container > h1 {
      font-size: 34px;
    }

    .skills-label-container > span {
      font-size: 14px;
    }

    .skill-cards-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 4rem;
    }

    .skill-card {
      width: 300px;
      height: 380px;
      border: 1px solid #5F5B5B;
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    .icon-container {
      border-radius: 4px;
      border: 1px solid rgba(95, 91, 91, 0.20);
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .skill-card > span {
      font-size: 10px;
      font-weight: 500;
      line-height: 18px;
      opacity: 0.70;
    }

    .skills-carousel-wrapper {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }

    .skills-carousel {
      display: flex;
      gap: 10px;
      animation: scroll 40s linear infinite;
      width: max-content;
    }

    .skills-carousel img {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      object-fit: contain;
      transition: transform 0.3s, opacity 0.3s;
    }

    .skills-carousel .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .skills-carousel .skill-item:hover img {
      transform: scale(0.9);
      opacity: 0.7;
    }

    .skills-carousel .skill-item:hover .skill-name {
      opacity: 1;
    }

    .skills-carousel .skill-item:hover .skill-box {
      display: flex;
    }

    .skill-box {
      background: #27272B;
      padding: 2px 10px;
      border-radius: 6px;
      display: none;
      transition: display 0.10s;
    }

    .skill-name {
      font-size: 12px;
      font-weight: 600;
      opacity: 0;
      transition: opacity 0.10s;
      color: #FFF;
    }
  }
</style>
