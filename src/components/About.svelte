<script>
    import Button from './Buttons.svelte';

    let someText= `Front end developer`;
    let count= 0;
    let styles = {darkMode: false};

    function toggle (){
        styles.darkMode = !styles.darkMode; //Si el valor es false conviertelo a true y vic
        window.document.body.classList.toggle("dark-mode");
    }

    function handleClick(){
        count +=1 ;
    }

    function resetClic(){
        count = 0
    }

    function alertClic(){
        alert('This is an alert')
    }
</script>

<style>
    p{
        color: var(--theme-color);
        font-size: 30px;
    }
</style>

<div class="About">

    {#if !styles.darkMode}
    <p>{someText}</p>
    {:else}
    <p><span>Welcome to darkMode</span></p>
    {/if}

    <p>
        {someText}
    </p>

    <Button text="Click"
    {count}
    on:click={handleClick}
    />
    <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
    {#if count > 0}
    <button on:click={resetClic}>Reset</button>
    {/if}
    <button on:click={alertClic}>Alert</button>

    <Button 
        text={styles.darkMode ? 'Darkmode 🌒':'Light mode 🌞'}
        on:click={toggle}
    />
        
    
    <button on:click={toggle}>{styles.darkMode ? 'Darkmode 🌒':'Light mode 🌞'}</button>
</div>