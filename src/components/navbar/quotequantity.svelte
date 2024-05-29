<script>
  import { derived } from 'svelte/store';
  import quote from '@stores/quoteStore.js';

  const totalQuantity = derived(quote, $quote => 
    $quote.reduce((total, item) => total + item.quantity, 0)
  );
</script>
{#if $totalQuantity >= 1}
<div class="inline-flex ml-2 w-5 h-5 shrink-0 grow-0 rounded-full bg-indigo-50 text-black items-center justify-center text-xs">
  <span id="quote-count">{$totalQuantity}</span>
</div>
{/if}