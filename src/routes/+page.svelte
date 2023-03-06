<script>
    export let data;
    let { workstuff } = data;
    $: ({ workstuff } = data);
</script>

<main class="container m-auto">
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">Dont miss this opportinuty to enrich your life. Sign up and get all my sports picks directly to your email</p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" class="input input-bordered" />
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
              <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="table table-zebra table-compact w-full">
      <thead>
        <tr>
          <th class="text-center text-orange-500">Date</th> 
          <th class="text-center text-orange-500">Hours</th> 
          <th class="text-center text-orange-500">Tips</th> 
          <th class="text-center text-orange-500">Daily</th> 
          <th class="text-center text-orange-500">Downs</th> 
        </tr>
      </thead> 
      <tbody>
       {#each workstuff as country}
       <tr>
        <th class="text-center">{country.mates}</th> 
        <td class="text-center">{country.hours}</td> 
        <td class="text-center">$ {country.tips}</td> 
        <td class="text-center">$ {country.hours * 10.50 + country.tips}</td> 
        <td class="text-center">{country.downs}</td> 
      </tr>
     {/each}
        </tbody>


      </table>
      </div>

  
  </main>
  
  <slot/>