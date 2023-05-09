<script lang="ts">
    import { page } from '$app/stores';
    import Article from '$lib/components/Article.svelte';
    import { getUniqueTags } from '$lib/helpers/tags';

    export let data;

    $: tag = $page.url.pathname.split("/").pop() || "";
</script>


<div class="divide-y-2 divide-level-up-grey-75">
    <h1 class="text-6xl font-bold pb-8">#{tag}</h1>
    
    <div>
        {#if !getUniqueTags().includes(tag)}
            <p class="text-xl py-4">
                No tags found that match "{tag}".
            </p>
        {/if}
        
        {#each data.articles as article}
            {#if article.tags.includes(tag)}
                <div class="py-4">
                    <Article data={article} />
                </div>
            {/if}
        {/each} 
    </div>
</div>
