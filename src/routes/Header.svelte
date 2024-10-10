<script>
  const tags = [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Technologies",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    }
  ];
</script>

<header>
  <div class="website-name">
    <h2>BENICIO<span class="dot">.</span><span>me</span></h2>

    <div class="navbar">
      {#each tags as tag}
        <a href={tag.href}>{tag.name}</a>
      {/each}
    </div>
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
 }
  
 .dot {
  color: #7D2D9D;
 }

  span {
  color: gray;
 }

 .navbar {
  display: flex;
  gap:  2.625rem;
 }

 a {
  text-decoration: none;
  color: gray;
  font-weight: 500;
 }
</style>