<script>
    // props
    export let buttonLabel = ""
    /**
	 * @type {() => any}
	 */
     export let clickFunction
</script>
<button
    on:click={clickFunction()}
    class="h-12 w-full rounded-full bg-orange-300 flex items-center justify-center font-bold
    hover:bg-white hover:border border-black">
    <span>{buttonLabel}</span>
</button>