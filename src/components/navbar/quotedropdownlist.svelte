<script>
  import quote from '@stores/quoteStore.js';

  let isFormVisible = false;
  let name = '';
  let company = '';
  let email = '';
  
  function updateQuantity(index, newQuantity) {
    quote.update(items => {
      const newItems = [...items];
      newItems[index].quantity = newQuantity;
      return newItems;
    });
  }
  
  function removeFromQuote(index) {
    quote.update(items => items.filter((_, i) => i !== index));
  }
  function submitQuote() {
    isFormVisible = true;
  }
  function clearQuote() {
    quote.set([]);
  }
  function backToQuote() {
    isFormVisible = false;
  }
  function sendEmail() {
    // Add your email sending logic here
    console.log(`Sending email: ${name}, ${company}, ${email}`);
  }
</script>
   
<div class="absolute lg:w-8/12 md:w-10/12 m-auto left-0 right-0 top-14 border border-slate-200 text-black bg-white shadow-lg rounded-md overflow-hidden">
  <div class="px-6 py-4 flex flex-col space-y-4">
    {#if $quote.length === 0}
      <p class="text-center text-slate-600">
        Your quotation is empty. Please browse <a href="/catalog" class="text-indigo-500 underline">Our catalog</a> to find products you wish to add to quotation.
      </p>
    {:else if !isFormVisible}
      <div class="overflow-x-auto bg-white dark:bg-neutral-700 max-h-80 overflow-y-auto">
        <table class="min-w-full text-left text-xs whitespace-nowrap">
          <thead class="bg-white uppercase tracking-wider border-b-2 border-slate-200 dark:border-neutral-600">
            <tr>
              <th scope="col" class="px-3 py-2">Model</th>
              <th scope="col" class="px-3 py-2 w-20">Quantity</th>
              <th scope="col" class="px-3 py-2 w-20">Remove</th>
            </tr>
          </thead>
          <tbody>
            {#each $quote as { sku, model, quantity }, index (sku)}
              <tr class="border-b border-slate-200 dark:border-neutral-600 hover:bg-slate-100 dark:hover:bg-neutral-600 {index % 2 === 0 ? 'bg-white dark:bg-neutral-800' : ''}">
                <th scope="row" class="px-3 py-2">{model}</th>
                <td class="px-3 py-2 w-20">
                  <input type="number" min="1" class="w-full px-2 py-1 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-600" bind:value={quantity} on:input={(e) => updateQuantity(index, +e.target.value)}>
                </td>
                <td class="px-3 py-2 w-20 text-center">
                  <button class="text-red-400 hover:text-red-600" on:click={() => removeFromQuote(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current">
                      <path d="m16 6-4 5-4-5-2 2 5 4-5 4 2 2 4-5 4 5 2-2-5-4 5-4z"/>
                    </svg>
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="flex mt-4 gap-4">
        <button class="w-full lg:w-1/2 rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo bg-green-600 text-white hover:bg-green-500 border-2 border-transparent px-4 py-2" on:click={submitQuote}>Submit</button>
        <button class="w-full lg:w-1/2 rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo bg-indigo-600 text-white hover:bg-indigo-800 border-2 border-transparent px-4 py-2" on:click={clearQuote}>Clear All</button>
      </div>
    {:else}
      <form on:submit|preventDefault={sendEmail} class="space-y-4">
        <input bind:value={name} placeholder="Name" required class="w-full px-4 py-2 border rounded-md focus:ring-4 focus:ring-indigo-200 focus:border-indigo-600 outline-none"/>
        <input bind:value={company} placeholder="Company" required class="w-full px-4 py-2 border rounded-md focus:ring-4 focus:ring-indigo-200 focus:border-indigo-600 outline-none"/>
        <input bind:value={email} placeholder="Email" type="email" required class="w-full px-4 py-2 border rounded-md focus:ring-4 focus:ring-indigo-200 focus:border-indigo-600 outline-none"/>
        <div class="flex gap-4">
          <button type="submit" class="w-full lg:w-1/2 rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo bg-indigo-600 text-white hover:bg-indigo-800 border-2 border-transparent px-4 py-2">Get Quote Now</button>
          <button type="button" on:click={backToQuote} class="w-full lg:w-1/2 rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo bg-slate-600 text-white hover:bg-slate-800 border-2 border-transparent px-4 py-2">Back to Quote</button>
        </div>
      </form>
    {/if}
  </div>
</div>
