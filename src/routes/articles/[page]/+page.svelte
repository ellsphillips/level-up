<script lang="ts">
	import { page } from '$app/stores';
	import Article from "$components/Article.svelte";
	import ConditionalLink from '$components/ConditionalLink.svelte';
	import MaterialIcon from '$components/MaterialIcon.svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';

	export let data;

	let pageSize = 3;
	$: totalPages = Math.ceil(data.articles.length / pageSize);
	$: currentPage = Number($page.params.page);
	$: currentArticles = data.articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	const searchArticles = data.articles.map(article => ({
		...article,
		searchTerms: `${article.title} ${article.tags.join(' ')}`
	}));

	const searchStore = createSearchStore(searchArticles);

	const unsubscribe = searchStore.subscribe(model => searchHandler(model));

	onDestroy(() => unsubscribe());
</script>

<div class="divide-y-2 divide-level-up-grey-75">
	<div class="w-1/2 pb-8 space-y-3">
		<h1 class="text-6xl font-bold">Articles</h1>
		
		<div class="relative">
			<input
				type="search"
				placeholder="Search articles..."
				bind:value={$searchStore.search}
				class="
					block w-full px-4 py-2
					border border-gray-200 bg-level-up-grey-85
					focus:border-level-up-orange focus:ring-level-up-orange
				"	
			/>
			<a href="/tags" class="absolute right-12 top-3.5 text-level-up-grey-15 hover:text-level-up-orange">
				<MaterialIcon kind="tag" />
			</a>
			<span class="absolute scale-150 right-3.5 top-3.5 text-level-up-grey-15">
				<MaterialIcon kind="search" />
			</span>
		</div>
	</div>

	{#if $searchStore.filtered.length === 0}
		<p class="text-xl py-4">
			No articles found that match "{$searchStore.search}".
		</p>
	{:else if $searchStore.filtered.length < data.articles.length}
		{#each $searchStore.filtered as article}
			<div class="py-4">
				<Article data={article} />
			</div>
		{/each}
	{:else}	
		<div>
			{#each currentArticles as article}
			<div class="py-4">
				<Article data={article} />
			</div>
			{/each}

			<nav class="flex justify-between pt-4">
				<span
					class="{currentPage === 1 ? 'opacity-50 cursor-default' : 'hover:text-level-up-orange'}"
				>
					<ConditionalLink
						href="/articles/{currentPage > 0 ? currentPage - 1 : totalPages}"
						condition={currentPage > 1}
					>
						<span class="flex items-center">
							<MaterialIcon kind="chevronRight" orientation="s" />
							Previous
						</span>
					</ConditionalLink>
				</span>

				<div class="flex items-center gap-3">
					{#each Array(totalPages) as _, idx}
						<a
							href="/articles/{idx + 1}"
							class="hover:text-level-up-yellow {currentPage - 1 === idx ? 'text-level-up-orange' : ''}"
						>
							{idx + 1}
						</a>
					{/each}
				</div>

				<span
					class="{currentPage === totalPages ? 'opacity-50 cursor-default' : 'hover:text-level-up-orange'}"
				>
					<ConditionalLink
						href="/articles/{currentPage < totalPages ? (currentPage + 1) : totalPages}"
						condition={currentPage < totalPages}
					>
						<span class="flex items-center">
							Next
							<MaterialIcon kind="chevronRight" orientation="n" />
						</span>
					</ConditionalLink>
				</span>
			</nav>
		</div>
	{/if}
</div>
