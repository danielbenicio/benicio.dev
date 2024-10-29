<script>
  import { Linkedin, Github, FileText, Mail } from 'lucide-svelte';

</script>

<div class="contact-section">
  <h1>Contact</h1>
  <div class="contact-container">
      <img src="/me.png" alt="me">
      <div class="contact-cards-container">
        <a class="contact-card" href="#">
          <Linkedin color="#6366f1" />
          Linkedin
        </a>
        <a class="contact-card" href="#">
          <Github color="#6366f1" />
          Github
        </a>
        <a class="contact-card" href="#">
          <Mail color="#6366f1" />
          Mail
        </a>
        <a class="contact-card" href="#">
          <FileText color="#6366f1" />
          CV
        </a>
      </div>
  </div>
</div>

<style>
  .contact-section {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .contact-section > h1 {
    font-size: 36px;
    font-weight: 600;
    color: gray;
    margin-bottom: 6rem;
  }

  .contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px
  }

  .contact-container img {
    width: 450px;
    height: 580px;
    border-radius: 20px;
    box-shadow: 0 0 30px 10px rgba(128, 0, 128, 0.6);
  } 

  .contact-cards-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .contact-card {
    box-shadow: 0 0 10px 4px rgba(128, 0, 128, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 12px 30px;
    border-radius: 4px;
    text-decoration: none;
    color: grey;
    background-color: black;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

  .contact-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px 6px rgba(128, 0, 128, 0.8);
    background-color: rgba(128, 0, 128, 0.1);
    color: white;
  }

  @media (max-width: 768px) {
		.contact-section {
      margin-top: 3rem;
    }

    .contact-section > h1 {
      font-size: 30px;
      margin-bottom: 4rem;
    }

    .contact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px
    }

    .contact-container img {
      width: 300px;
      height: 400px;
    } 

    .contact-cards-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
</style>
