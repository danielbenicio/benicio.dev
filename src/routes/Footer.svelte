<script>
	import { ChevronUp } from "lucide-svelte";
</script>

<div class="footer-container">
  <div class="name-container">
    <span class="name">© 2024 - Daniel Benício.</span>
    <span class="rights">Todos os direitos reservados</span>
  </div>
  <div class="up-container">
    <ChevronUp />
    <span>Voltar do início</span>
  </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
  }
</style>