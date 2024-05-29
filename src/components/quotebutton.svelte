<script>
    import quote from '@stores/quoteStore.js';
    
    let quantity = 1;
    
    export let sku;
    export let model;
    
    function addToQuote() {
      quote.update(items => {
        const index = items.findIndex(item => item.sku === sku);
        if (index !== -1) {
          // Item with same SKU exists, increase quantity
          const newItems = [...items];
          newItems[index].quantity += quantity;
          return newItems;
        } else {
          // Item with same SKU does not exist, add new item
          return [...items, { sku, model, quantity }];
        }
      });
    }
</script>

<input id="quote-quantity" bind:value={quantity} type="number" min="1" class="w-20 px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100"> 
<button class="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo bg-indigo-600 text-white hover:bg-indigo-800  border-2 border-transparent px-5 py-2.5" on:click={() => addToQuote(sku, model)}>Add to Quote</button>
