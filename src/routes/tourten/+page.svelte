<script>
	import Drivers from "../../components/Drivers.svelte";
	import LongIron from "../../components/LongIron.svelte";
	import RoughIron from "../../components/RoughIron.svelte";
	import SandClubs from "../../components/SandClubs.svelte";
	import ShortIron from "../../components/ShortIron.svelte";
	import Wedges from "../../components/Wedges.svelte";
	import Woods from "../../components/Woods.svelte";
 
  const images = [
    {"id":2,"reds":"10% driver, from right side 20-25% long iron ","src":"/tour10_images/nc1.png"},
    {"id":3,"reds":"10% driver, +10% wood- Guardian if you have it","src":"/tour10_images/nc3.png"},
    {"id":5,"reds":"10% driver max downspin, 0% second shot","src":"/tour10_images/nc5.png"},
    {"id":6,"reds":"10% driver , 10% wood","src":"/tour10_images/nc6.png"},
    {"id":7,"reds":"10% driver, find min distance with short iron +5%","src":"/tour10_images/nc7.png"},
    {"id":9,"reds":"10% driver, 0% second shot","src":"/tour10_images/nc9.png"}
  ]
  const drumores = [
    {"id":1,"reds":"Crazy spin, 1 ring before 10 mph in that directions, 10% short iron 3 RS","src":"/tour10_images/pc1.png"},
    {"id":3,"reds":"10% driver , 10% wood 5 TS","src":"/tour10_images/pc3.png"},
    {"id":5,"reds":"10% driver, 10% wood","src":"/tour10_images/pc5.png"},
    {"id":6,"reds":"20% driver no move till shot max TS 2 LS, 10% 3LS short iron at +1 yards","src":"/tour10_images/pc6.png"},
    {"id":8,"reds":"10% driver , 10% wood look for min","src":"/tour10_images/pc8.png"},
    {"id":9,"reds":"Aim high max TS slight ball curl left, 20% second shot","src":"/tour10_images/pc9.png"}

  ]
  const acacias = [
    {"id":1,"reds":"10% driver , 5% wood or long iron","src":"/tour10_images/port1.png"},
    {"id":3,"reds":"10% driver 6 TS 2 LS max power max curl, 35% long iron","src":"/tour10_images/port3.png"},
    {"id":5,"reds":"10% driver, 0% short iron please add some text here to ","src":"/tour10_images/port4.png"},
    {"id":6,"reds":"10% driver both sides, right side 10% wood or longiron","src":"/tour10_images/port5.png"},
    {"id":8,"reds":"10% driver right side, 15% rough bump long iron or short iron","src":"/tour10_images/port7.png"},
    {"id":9,"reds":"0% driver, 0% wood and testing to see if this is the best this thing can do 1 2 3","src":"/tour10_images/port9.png"}

  ]

</script>


<div class="container bg-base-200 m-auto flex flex-row">
 <div class="bg-base-300 w-1/5 h-full grid p-4 justify-center gap-1 sticky top-0">
  <Drivers />
  <Woods />
  <LongIron />
  <ShortIron />
  <Wedges />
  <RoughIron />
  <SandClubs />
</div>
 <div class="bg-base-200 w-4/5 h-full grid grid-cols-4 m-auto gap-1">
{#each images as image }
  <div class="flex flex-col items-center rounded-2xl border border-black">
    <img src={image.src} alt="none" class="w-64 h-64 rounded-2xl object-cover overflow-hidden">
    <span class="items-center text-yellow-400">Namhae Cliffs</span>
    <h4 class="m-2 items-center text-orange-400">Hole # {image.id}</h4>
    <h6 class="m-2 items-center text-yellow-400 break-all">{image.reds}</h6>
  </div>
{/each}
{#each drumores as drumore }
  <div class="flex flex-col items-center p-2 rounded-2xl border border-black">
    <img src={drumore.src} alt="none" class="w-64 h-64 rounded-2xl object-cover overflow-hidden">
    <span class="items-center text-yellow-400">White Cliff Golf Club</span>
    <h2 class="m-2 items-center text-yellow-400">Hole # {drumore.id}</h2>
    <h4 class="m-2 items-center text-yellow-400 break-all">{drumore.reds}</h4>
  </div>
{/each}
{#each acacias as acacia }
  <div class="flex flex-col items-center justify-center p-2 rounded-2xl border border-black">
    <img src={acacia.src} alt="none" class="w-64 h-64 rounded-2xl object-cover it">
    <div class="flex flex-col items-center pt-1 pb-1">
      <span class=" text-yellow-400">Porthello Cove</span>
      <h3 class="m-2 text-yellow-200">Hole # {acacia.id}</h3>
      <h5 class="m-2 text-yellow-400 break-all">{acacia.reds}</h5>
    </div>

  </div>
{/each}
</div>
</div>
<footer class="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span class="footer-title">Company</span> 
    <a href="/" class="link link-hover">About us</a>
    <a href="/" class="link link-hover">Contact</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a href="/" class="link link-hover">Terms of use</a>
  </div>
</footer>
