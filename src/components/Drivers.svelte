<script>
    let club = 0;
    let ball = 0;
    let elevation = 0;
    let wind = 0;
    let a = club;
	let b = ball;

</script>
<form class="main">
    <div class="clubber">
        <p>Driver</p>
        <select bind:value={club}>
            <option value="1.5">Apocalypse</option>
            <option value="1.779">Thors Hammer</option>
            <option value="2.136">Extra Mile</option>
            <option value="2.389">Big Topper</option>
            <option value="">------------------</option>
            <option value="1.714">Apocalypse(mid)</option>
            <option value="2.004">Thors Hammer(mid)</option>
            <option value="2.423">Extra Mile(mid)</option>
            <option value="2.623">Big Topper(mid)</option>
            <option value="">------------------</option>
            <option value="2">Apocalypse(min)</option>
            <option value="2.293">Thors Hammer(min)</option>
            <option value="2.8">Extra Mile(min)</option>
            <option value="2.907">Big Topper(min)</option>
          </select>
        <p>Ball</p>
        <select bind:value={ball}>
            <option value="1.03">Navigator</option>
            <option value="1.03">Quasar</option>
            <option value="1.05">Katana</option>
            <option value="1.07">Titan</option>
            <option value="1.07">Kingmaker</option>
            <option value="1.10">Power 4</option>
            <option value="1.13">Power 5</option>
        </select>
        <div class="elevation">
            <span><small>Elevation %</small></span>
            <select bind:value={elevation}>
             <option value = "1">0 %</option>    
             <option value = ".95">5 %</option>    
             <option value = ".90">10 %</option>    
             <option value = ".85">15 %</option>    
             <option value = ".80">20 %</option>    
             <option value = ".75">25 %</option>    
             <option value = ".70">30 %</option>    
             <option value = "1.1">+ 10%</option>    
             <option value = "1.05">+ 5%</option>    
            <select>
        </div>
        </div>
         <div class="wind">
         <p>Wind</p>
        <input type="number" bind:value={wind} min="4" max="13" step=".1" >
        </div>
    <div>
        <p>Rings are :</p>
         <p> {parseFloat(wind) / parseFloat(club) * parseFloat(ball) * parseFloat(elevation)}</p>
    </div>
</form>


<style>
.main {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
    white-space: normal;
    word-wrap: break-word;
    margin-left: 1px;
    justify-items: center;
    align-items: center;
    background-color: rgba(36, 0, 0, 0.757);
    max-width: 240px;
    max-height: 320px;
    border-radius: 16px;
    gap: 4px;
} 
.clubber {
    border: solid black 1px;
    border-radius: 12px;
    padding: 1px;
}   
.wind {
    margin: 1rem;
    padding: 1px;
    color: yellow;;
}
.elevation {
    display: flex;
    flex-direction: column;
}
</style>