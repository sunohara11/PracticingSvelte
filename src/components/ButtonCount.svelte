<script>
    import {count} from "../Store/store";

    function handleClick(){
        count.update(n => n+1);
    }

    function resetClic(){
        count.update(n=>0);
    }
</script>

<style>
    button{
        background-color: coral;
        color: cornsilk;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>

<button on:click={handleClick}>
    click {$count === 0 ? '' : $count}
</button>
{#if $count > 0}
    <button on:click={resetClic}>Reset</button>
{/if}