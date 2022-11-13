<script>
    // Library Imports
    import { ArrowLeftIcon } from 'svelte-feather-icons'
    // Function Props
    /**
	 * @type {() => any}
	 */
    export let clickFunction
</script>
<button 
    on:click={clickFunction()}
    class="h-12 w-12 rounded-full border border-black flex items-center justify-center font-bold
    hover:bg-white">
    <ArrowLeftIcon size="24"/>
</button>