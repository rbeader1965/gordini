<script>
    const images = [
        {"src": "/shootout_images_9/ar3.png","alt": "ready","desc": "15% max wood-(+3 Yard) blue ring touching- 3.7 DS 1.5 RS"},
        {"src": "/shootout_images_9/ar5.png","alt": "ready","desc": "15% mid wood-blue ring in trap,edge of red top- 4 TS 2.8 RS"},
        {"src": "/shootout_images_9/ar7.png","alt": "ready","desc": "40% mid wood-aim right of pin- 4.5 BS .5 LS"},
        {"src": "/shootout_images_9/2.png","alt": "ready","desc": "10% wood- blue ring fringe 2 DS 2 RS"},
        {"src": "/shootout_images_9/4.png","alt": "ready","desc": "40% max wood- 3.5 DS 1.5 LS"},
        {"src": "/shootout_images_9/7.png","alt": "ready","desc": "20% wood"},
        {"src": "/shootout_images_9/dl2.png","alt": "ready","desc": "20% min wood- 3.2 DS 1.2 LS"},
        {"src": "/shootout_images_9/dl4.png","alt": "ready","desc": "20% min wood- 1.2 DS .5 RS"},
        {"src": "/shootout_images_9/dl7.png","alt": "ready","desc": "10% max-mid 2 DS 1 RS"}
     ]
     const tourtens = [
        {"src": "/shootout_images_9/nc2.png","alt": "ready","desc": "15% max wood-(+3 Yard) blue ring touching- 3.7 DS 1.5 RS"},
        {"src": "/shootout_images_9/nc4.png","alt": "ready","desc": "15% mid wood-blue ring in trap,edge of red top- 4 TS 2.8 RS"},
        {"src": "/shootout_images_9/nc8.png","alt": "ready","desc": "40% mid wood-aim right of pin- 4.5 BS .5 LS"},
        {"src": "/shootout_images_9/port2.png","alt": "ready","desc": "10% wood- blue ring fringe 2 DS 2 RS"},
        {"src": "/shootout_images_9/port6.png","alt": "ready","desc": "40% max wood- 3.5 DS 1.5 LS"},
        {"src": "/shootout_images_9/port8.png","alt": "ready","desc": "20% wood"},
        {"src": "/shootout_images_9/wc2.png","alt": "ready","desc": "20% min wood- 3.2 DS 1.2 LS"},
        {"src": "/shootout_images_9/wc4.png","alt": "ready","desc": "20% min wood- 1.2 DS .5 RS"},
        {"src": "/shootout_images_9/wc7.png","alt": "ready","desc": "10% max-mid 2 DS 1 RS"}
     ]
	import Drivers from "../../components/Drivers.svelte";
	import LongIron from "../../components/LongIron.svelte";
	import Woods from "../../components/Woods.svelte";

</script>

<div class="container bg-blue-900 w-full m-auto">
  <div class="flex justify-center gap-4">
    <Drivers />
    <Woods/>
    <LongIron />
   </div>
   <p>Tour 9</p>

   <div class="mt-2 bg-blue-900 grid grid-cols-3 gap-1">
    {#each images as image }
    <card class="card card-side bg-base-100 shadow-xl">
      <img src={image.src} alt={image.alt} class="w-48 h-60 p-2"/>
      <h2 class="m-auto p-1">{image.desc}</h2>
    </card>
    {/each}
   </div>
   <p>Tour 10</p>

   <div class="mt-2 bg-base-300 grid grid-cols-3 gap-1">
    {#each tourtens as tourten }
    <card class="card card-side bg-success-content shadow-xl">
      <img src={tourten.src} alt={tourten.alt} class="w-48 h-60 p-2"/>
      <h2 class="m-auto p-1">{tourten.desc}</h2>
    </card>
    {/each}
   </div>


</div>

<style>
 
</style>