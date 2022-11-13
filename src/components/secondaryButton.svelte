<script>
    // props
    /**
	 * @type {() => any}
	 */
     export let clickFunction
</script>
<button
    on:click={clickFunction()}
    class="h-12 w-32 rounded-full bg-orange-50 border border-black flex items-center justify-center font-bold
    hover:bg-white">
    <slot></slot>
</button>