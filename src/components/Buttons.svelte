<script>
    export let count = 0;
    export let text;
</script>

<style>
    
</style>

<button on:click>
    {text}
    {count === 0 ? '' : count}
</button>