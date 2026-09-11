# Digital Tricks

Site institucional em React 18, Vite e Tailwind CSS.

## Desenvolvimento e validação

- `npm ci`: instala as versões do package-lock.json. Use npm como gerenciador do projeto.
- `npm run dev`: inicia o ambiente local.
- `npm run lint`: verifica o código, sem permitir avisos.
- `npm run build`: compila e gera metadados estáticos por rota, sitemap e regras Apache.
- `npm test`: valida telefones, mensagens e os arquivos SEO. Execute depois do build.
- `npm run preview`: prévia visual do bundle. Não executa as regras do Apache.

## SEO e publicação

Os títulos e descrições ficam em `src/data/seoData.js`. As soluções usam os dados de `siteData.js`. O componente Seo aplica os mesmos valores na navegação React. O build insere canonical, Open Graph, Twitter e dados estruturados Organization/WebSite no HTML de cada rota, antes da execução do JavaScript. O conteúdo visual das páginas continua renderizado pelo React; isto não é uma implementação de SSR.

Publique **todo o conteúdo de dist**, inclusive `.htaccess`, `__pages`, `404.html` e os assets. Não publique a pasta do código-fonte. A configuração pressupõe a raiz do domínio `https://digitaltricks.com.br` e Apache 2.4 com mod_rewrite e permissão para .htaccess. Outros servidores precisam de regras equivalentes.

`scripts/generate-seo.mjs` gera o sitemap a partir das páginas indexáveis, mantém redirecionamentos permanentes das rotas antigas e configura HTTP 404 para endereços inexistentes. As experiências `/badapple` e `/s` continuam disponíveis com noindex. Ao adicionar uma rota, atualize App.jsx e seoData.js e compile novamente. A validação real dos códigos HTTP deve ser feita na hospedagem Apache; o preview do Vite usa fallback de SPA.

## Diagnóstico

O formulário valida nome, empresa e telefone brasileiro com DDD, prepara a mensagem e abre o WhatsApp. Não há envio automático nem armazenamento do formulário em backend. O visitante precisa enviar a mensagem no WhatsApp. Um link alternativo permite continuar quando a abertura da aba é bloqueada. Alterar um campo invalida o link preparado anteriormente.

## Organização

- `src/pages`: páginas e rotas.
- `src/components`: componentes em uso, com validação de propriedades.
- `src/data`: conteúdo, gráficos e metadados.
- `src/utils/diagnosis.js`: validação do telefone e construção da mensagem.
- `scripts`: geração e testes do SEO.

Os componentes antigos sem ligação com a entrada `src/main.jsx` foram removidos. As mídias existentes foram preservadas. O CSS final é gerado somente a partir das classes em uso.
