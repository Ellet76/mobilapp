<script>
    export let data;
</script>

<p>{data.clicks}</p>

<button on:click={async () => {const result = await fetch("/", {method: "POST",}); 
const json = await result.json();
data.clicks = json.clicks;}}>click</button>

