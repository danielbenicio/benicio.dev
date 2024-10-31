<script>
	import { ChevronUp } from "lucide-svelte";

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

<div class="footer-container">
  <div class="name-container">
    <span class="name">© 2024 - Daniel Benício.</span>
    <span class="rights">Todos os direitos reservados</span>
  </div>
  <a class="up-container" href="#header" on:click={(event) => smoothScroll(event, "header")}>
    <ChevronUp color="gray" />
    <span>Voltar do início</span>
  </a>
</div>

<style>
  .footer-container {
    margin-top: 5rem;
    background: #27272B;
    padding: 1rem 8.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.8;
  }

  .rights {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
  }

  .up-container {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
  color: gray;
  transition: color 0.3s ease;
}

.up-container span {
  text-decoration: none;
  color: gray;
  transition: color 0.3s ease;
}

.up-container:hover {
  color: white;
  opacity: 1;
}

.up-container:hover span {
  color: white;
}

  @media (max-width: 768px) {
    .footer-container {
      margin-top: 4rem;
      background: #27272B;
      padding: 1rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .name-container {
      display: flex;
      flex-direction: column;
    }

    .name {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.8;
    }

    .rights {
      font-size: 12px;
      font-weight: 500;
      opacity: 0.6;
    }

    .up-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.6;
    }
  }
</style>