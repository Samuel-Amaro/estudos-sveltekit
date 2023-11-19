import type { LayoutServerLoad} from "./$types";
import { posts } from "./data";

//Assim como os arquivos +layout.svelte criam UI para cada rota secundária, os arquivos +layout.server.ts carregam dados para cada rota secundária.
//declaramos uma function de carregamento, de dados para o segmento /blog e suas rotas secundarias
//as rotas secundarias de /blog/... poderão usar os dados carregados aqui, são dados compartilhados do layout, dados que são necessarios para a rota /blog e as secundarias
//Seus +layout.svelte arquivos também podem carregar dados, via +layout.ts ou +layout.server.ts.
//Os dados retornados das load funções de layout estão disponíveis para +layout.svelteos componentes filhos e para o +page.svelte componente, bem como para o layout ao qual ele “pertence”.
export const load: LayoutServerLoad = () => {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}