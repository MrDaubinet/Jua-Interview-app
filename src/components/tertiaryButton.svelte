<script>
    // props
    /**
	 * @type {() => any}
	 */
     export let clickFunction
</script>
<button
    on:click={clickFunction()}
    class="h-6 px-2 rounded-full bg-orange-50 flex items-center justify-center font-thin text-sm
    hover:bg-white hover:border hover:border-black">
    <slot />
</button>