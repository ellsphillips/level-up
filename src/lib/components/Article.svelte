<script lang="ts">
	import Tag from "$components/Tag.svelte";

    export let data: Article;
</script>

<article class="space-y-2">
    <span class="font-lg text-level-up-grey-35">{data.date}</span>
    <div class="space-y-2">
        <div class="space-y-1">
            <h2 class="text-2xl font-bold">{data.title}</h2>
            <div class="flex">
                {#each data.tags as tag}
                    <Tag>{tag}</Tag>
                {/each}
            </div>
        </div>
        <p class="text-level-up-grey-55">{data.description}</p>
    </div>
</article>