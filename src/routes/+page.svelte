<script>
    export let data;
</script>

<p>{data.clicks}</p>

<button on:click={async () => {const result = await fetch("https://mobilapp.onrender.com", {method: "POST",}); 
const json = await result.json();
data.clicks = json.clicks;}}>click</button>

