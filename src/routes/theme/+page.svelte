<script lang="ts">
	import { env } from '$env/dynamic/private';
import {
		PUBLIC_THEME_BACKGROUND,
		PUBLIC_THEME_FOREGROUND
	} from '$env/static/public'; //importa variaveis de ambiente que podem ser expostas ao browser, podemos usar valores estaticos ou dinamicos, mas e preferivel usar valores estaticos, Tal como acontece com variáveis ​​de ambiente privadas , é preferível usar valores estáticos, se possível, mas, se necessário, podemos usar valores dinâmicos
</script>

<!--
  - OR PUBLIC_THEME_BACKGROUND TO VALUE STATIC
  - OR VALUE.PUBLIC_THEME_BACKGROUND TO VALUE DINAMIC
-->
<main
	style:background={env.PUBLIC_THEME_BACKGROUND}
	style:color={env.PUBLIC_THEME_FOREGROUND}
>
	{env.PUBLIC_THEME_FOREGROUND} on {env.PUBLIC_THEME_BACKGROUND}
</main>

<style>
	main {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		font-size: 10vmin;
	}
</style>
