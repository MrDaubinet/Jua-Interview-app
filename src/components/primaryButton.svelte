<script>
    // props
    /**
	 * @type {() => any}
	 */
     export let clickFunction
</script>
<button
    on:click={clickFunction()}
    class="h-12 w-full rounded-full bg-orange-200 border-black flex items-center justify-center font-bold
    hover:bg-white hover:border">
    <slot></slot>
</button>