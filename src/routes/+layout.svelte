<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
  </script>

  <Navbar/>
  
  <slot />

  <style>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet');

   :global(*) {
    font-family: 'Poppins' , sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--light);
   }
   :global(:root) {
    --primary: #E03616;
    --secondary: #f3a712;
    --dark: #222222;
    --light: #ebebeb;
   }

   :global(body) {
    background-color: #555555;
   }
  </style>