<script lang="ts">
	export let href: string;
	export let condition = false;
	export const tag = 'a';
</script>

{#if condition && tag}
  <a {href} {...$$restProps}><slot /></a>
{:else}
  <slot />
{/if}
