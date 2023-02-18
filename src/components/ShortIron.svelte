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
        <p>Short Iron</p>
        <select bind:value={club}>
            <option value="1.860">The Thorn</option>
            <option value="1.031">The Hornet</option>
            <option value="1.927">The Falcon</option>
            <option value="">------------------</option>
            <option value="2.480">The Thorn(mid)</option>
            <option value="1.365">The Hornet(mid)</option>
            <option value="2.030">The Falcon(mid)</option>
            <option value="">------------------</option>
            <option value="3.720">The Thorn(min)</option>
            <option value="2.0">The Hornet(min)</option>
            <option value="3.640">The Falcon(min)</option>
        </select>
        <p>Ball</p>
        <select bind:value={ball}>
            <option value="1.03">Navigator</option>
            <option value="1.03">Quasar</option>
            <option value="1.05">Katana</option>
            <option value="1.07">Titan</option>
            <option value="1.07">Kingmaker</option>
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
    margin-left: 4px;
    justify-items: center;
    align-items: center;
    background-color: rgb(46, 42, 83);
    max-width: 240px;
    max-height: 320px;
    border-radius: 16px;
    gap: 4px;
} 
.clubber {
    border: solid black 1px;
    border-radius: 12px;
    padding: 2px;
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