<script lang="ts">
	import type { PageData } from "./$types";

  //podemos acessar os dados do carregamento por meio do data prop
  export let data: PageData;
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<p>this is the home page</p>
