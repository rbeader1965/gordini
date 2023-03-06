<script>
  import Drivers from "../../components/Drivers.svelte";
  import LongIron from "../../components/LongIron.svelte";
  import RoughIron from "../../components/RoughIron.svelte";
  import SandClubs from "../../components/SandClubs.svelte";
  import ShortIron from "../../components/ShortIron.svelte";
  import Wedges from "../../components/Wedges.svelte";
  import Woods from "../../components/Woods.svelte";
const images = [
  {"id":1,"reds":"10% driver ½ ball leftcurl, 10% short iron or wedge, 0% for dunkaroo","src":"/tour8_images/yg1.png"},
  {"id":3,"reds":"20% driver, +15% long iron. Might be +15% wood","src":"/tour8_images/yg3.png"},
  {"id":5,"reds":"driver max 10% short iron 0%","src":"/tour8_images/yg5.png"},
  {"id":6,"reds":"10% driver no move overpower, 40% mid wood","src":"/tour8_images/yg6.png"},
  {"id":8,"reds":"25% driver, 15% long iron mid, rough bump is 25% mid","src":"/tour8_images/yg8.png"},
  {"id":9,"reds":"10% driver, 15% wood or Long Iron","src":"/tour8_images/yg9.png"}
]
const peaks = [
  {"id":1,"reds":"10% driver (Rock) left side, 5% long iron (grizzly) rough bump","src":"/tour8_images/ep1.png"},
  {"id":3,"reds":"10% driver , +10% wood","src":"/tour8_images/ep3.png"},
  {"id":5,"reds":"10% driver, 0% short iron","src":"/tour8_images/ep5.png"},
  {"id":6,"reds":"10% driver both sides, right side 10% wood or longiron, left side 40%","src":"/tour8_images/ep6.png"},
  {"id":8,"reds":"10% driver right side, 15% rough bump long iron or short iron","src":"/tour8_images/ep8.png"},
  {"id":9,"reds":"0% driver, 0% wood","src":"/tour8_images/ep9.png"}

]
const fjords = [
  {"id":1,"reds":"10% driver (Rock) left side, 5% long iron (grizzly) rough bump","src":"/tour8_images/nf1.png"},
  {"id":3,"reds":"10% driver , +10% wood","src":"/tour8_images/nf3.png"},
  {"id":5,"reds":"10% driver, 0% short iron","src":"/tour8_images/nf5.png"},
  {"id":6,"reds":"10% driver both sides, right side 10% wood or longiron, left side 40%","src":"/tour8_images/nf6.png"},
  {"id":8,"reds":"10% driver right side, 15% rough bump long iron or short iron","src":"/tour8_images/nf8.png"},
  {"id":9,"reds":"0% driver, 0% wood","src":"/tour8_images/nf9.png"}

]
</script> 



<div class="container bg-info-content m-auto flex flex-row">
<div class="bg-success-content w-1/4 h-full flex flex-col justify-center items-center gap-1 sticky top-0">
 <Drivers />
 <Woods />
 <LongIron />
 <ShortIron />
 <Wedges />
 <RoughIron />
 <SandClubs />
</div>
<div class="bg-info-content w-4/5 h-full grid grid-cols-4">
{#each images as image }
 <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
   <img src={image.src} alt="none" class="object-cover w-64 h-48">
   <span class="items-center text-yellow-400">Yongsan Gardens</span>
   <h2 class="m-2 items-center text-yellow-400">Hole # {image.id}</h2>
   <h4 class="m-2 items-center text-yellow-400">{image.reds}</h4>
 </div>
{/each}
{#each peaks as peak }
 <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
   <img src={peak.src} alt="none" class="object-cover w-64 h-48">
   <span class="items-center text-yellow-400">Eagle Peak</span>
   <h2 class="m-2 items-center text-yellow-400">Hole # {peak.id}</h2>
   <h4 class="m-2 items-center text-yellow-400">{peak.reds}</h4>
 </div>
{/each}
{#each fjords as fjord }
 <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
   <img src={fjord.src} alt="none" class="object-cover w-64 h-48">
   <span class="items-center text-yellow-400">Nordic Fjords</span>
   <h2 class="m-2 items-center text-yellow-400">Hole # {fjord.id}</h2>
   <h4 class="m-2 items-center text-yellow-400">{fjord.reds}</h4>
 </div>
{/each}
</div>
</div>
<footer class="footer p-10 bg-neutral text-neutral-content">
 <div>
   <span class="footer-title">Company</span> 
   <a href="/" class="link link-hover">About us</a>
   <a href="/" class="link link-hover">Contact</a>
   <a href="/" class="link link-hover">Jobs</a>
   <a href="/" class="link link-hover">Press kit</a>
 </div> 
 <div>
   <span class="footer-title">Legal</span> 
   <a href="/" class="link link-hover">Terms of use</a>
   <a href="/" class="link link-hover">Privacy policy</a>
   <a href="/" class="link link-hover">Cookie policy</a>
 </div>
</footer>

