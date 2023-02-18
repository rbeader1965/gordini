<script>
	import Drivers from "../../components/Drivers.svelte";
	import LongIron from "../../components/LongIron.svelte";
	import RoughIron from "../../components/RoughIron.svelte";
	import SandClubs from "../../components/SandClubs.svelte";
	import ShortIron from "../../components/ShortIron.svelte";
	import Wedges from "../../components/Wedges.svelte";
	import Woods from "../../components/Woods.svelte";
 
  const images = [
    {"id":1,"reds":"10% driver ½ ball leftcurl, 10% short iron or wedge, 0% for dunkaroo","src":"/tour9_images/1.png"},
    {"id":3,"reds":"20% driver, +15% long iron. Might be +15% wood","src":"/tour9_images/3.png"},
    {"id":5,"reds":"driver max 10% short iron 0%","src":"/tour9_images/5.png"},
    {"id":6,"reds":"10% driver no move overpower, 40% mid wood","src":"/tour9_images/6.png"},
    {"id":8,"reds":"25% driver, 15% long iron mid, rough bump is 25% mid","src":"/tour9_images/8.png"},
    {"id":9,"reds":"10% driver, 15% wood or Long Iron","src":"/tour9_images/9.png"}
  ]
  const drumores = [
    {"id":1,"reds":"10% driver (Rock) left side, 5% long iron (grizzly) rough bump","src":"/tour9_images/dl1.png"},
    {"id":3,"reds":"10% driver , +10% wood","src":"/tour9_images/dl3.png"},
    {"id":5,"reds":"10% driver, 0% short iron","src":"/tour9_images/dl5.png"},
    {"id":6,"reds":"10% driver both sides, right side 10% wood or longiron, left side 40%","src":"/tour9_images/dl6.png"},
    {"id":8,"reds":"10% driver right side, 15% rough bump long iron or short iron","src":"/tour9_images/dl8.png"},
    {"id":9,"reds":"0% driver, 0% wood","src":"/tour9_images/dl9.png"}

  ]
  const acacias = [
    {"id":1,"reds":"10% driver (Rock) left side, 5% long iron (grizzly) rough bump","src":"/tour9_images/ar1.png"},
    {"id":3,"reds":"10% driver , +10% wood","src":"/tour9_images/ar2.png"},
    {"id":5,"reds":"10% driver, 0% short iron","src":"/tour9_images/ar4.png"},
    {"id":6,"reds":"10% driver both sides, right side 10% wood or longiron, left side 40%","src":"/tour9_images/ar6.png"},
    {"id":8,"reds":"10% driver right side, 15% rough bump long iron or short iron","src":"/tour9_images/ar8.png"},
    {"id":9,"reds":"0% driver, 0% wood","src":"/tour9_images/ar9.png"}

  ]

</script>


<div class="container bg-blue-600 m-auto flex flex-row">
 <div class="bg-base-300 w-1/5 h-full grid p-4 justify-center gap-1 sticky top-0">
  <Drivers />
  <Woods />
  <LongIron />
  <ShortIron />
  <Wedges />
  <RoughIron />
  <SandClubs />
</div>
 <div class="bg-gray-700 w-4/5 h-full grid grid-cols-4">
{#each images as image }
  <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
    <img src={image.src} alt="none" class="object-cover w-64 h-48">
    <span class="items-center text-yellow-400">Chateau Lavande</span>
    <h2 class="m-2 items-center text-yellow-400">Hole # {image.id}</h2>
    <h4 class="m-2 items-center text-yellow-400">{image.reds}</h4>
  </div>
{/each}
{#each drumores as drumore }
  <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
    <img src={drumore.src} alt="none" class="object-cover w-64 h-48">
    <span class="items-center text-yellow-400">Drumore Links</span>
    <h2 class="m-2 items-center text-yellow-400">Hole # {drumore.id}</h2>
    <h4 class="m-2 items-center text-yellow-400">{drumore.reds}</h4>
  </div>
{/each}
{#each acacias as acacia }
  <div class="flex flex-col items-center justify-center p-2 rounded-2xl border">
    <img src={acacia.src} alt="none" wclass="object-cover w-64 h-48">
    <span class="items-center text-yellow-400">Acacia Reserve</span>
    <h2 class="m-2 items-center text-yellow-400">Hole # {acacia.id}</h2>
    <h4 class="m-2 items-center text-yellow-400">{acacia.reds}</h4>
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