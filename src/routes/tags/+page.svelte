<script>
    import { getTagData } from "$lib/helpers/tags";

    $: tags = getTagData();
</script>

<div class="flex divide-x-2 space-x-8 w-3/5 m-auto">
    <h1 class="text-6xl font-bold">Tags</h1>
    <div class="flex flex-wrap max-w-lg pl-8 leading-10">
        {#each tags as tag}
        <span class="block uppercase font-lg">
            <a
                href="/tags/{tag.name}"
                class="text-level-up-orange pr-2"
            >{tag.name}</a>
            <span class="text-level-up-grey-35 pr-6">({tag.count})</span>
        </span>
        {/each}
    </div>
</div>
