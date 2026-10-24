# Caelus ✦

Pequenas estrelas. Grandes universos.

Site da **Caelus**, produtora de jogos indie. Um espaço de inspiração estelar para apresentar nossos jogos, compartilhar a identidade do estúdio e reunir as políticas de privacidade dos projetos.

[Visite o site](https://jinmoridann.github.io/caio_pariz/) · [Instagram @caelussys](https://www.instagram.com/caelussys/)

## Em produção

**Órbita de Sucata** é o destaque do site: um jogo arcade incremental para Android, ambientado entre os destroços da Grande Deriva. Conheça esse universo e a nave Mariposa na página inicial.

## O site

- Identidade visual inspirada em estrelas, constelações e órbitas.
- Apresentação do estúdio e destaque para os jogos.
- Layout responsivo, navegação por teclado e suporte à preferência por movimento reduzido.
- Projetos anteriores e políticas de privacidade continuam acessíveis.

## Desenvolvimento

Construído com React 19, TypeScript e Vite 8. Use Node.js 22.12 ou superior compatível com o Vite 8 e npm.

```sh
git clone https://github.com/JinMoriDann/caio_pariz.git
cd caio_pariz
npm ci
npm run dev
```

Abra o endereço mostrado pelo Vite, com o caminho `/caio_pariz/`.

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica o TypeScript e gera o site em `dist/` |
| `npm run lint` | Verifica o código com ESLint |
| `npm run preview` | Abre uma prévia local do build |

## Onde editar

- `src/components/CaelusHome.tsx`: conteúdo e estrutura da página inicial.
- `src/components/CaelusHome.css`: identidade visual e responsividade.
- `src/components/privacyPolicy/`: textos das políticas de privacidade.
- `src/App.tsx`: navegação entre a página inicial e as políticas.
- `public/`: imagens e favicon.
- `index.html`: título e metadados do site.

## Políticas de privacidade

Os endereços existentes são preservados:

- [Orçamento Fácil](https://jinmoridann.github.io/caio_pariz/#/privacy/orcafacil)
- [Excluir conta e dados — Órbita de Sucata](https://jinmoridann.github.io/caio_pariz/#/delete-account/orbitadesucata)
- [Órbita de Sucata](https://jinmoridann.github.io/caio_pariz/#/privacy/orbitadesucata)
- [Vigília do Vazio](https://jinmoridann.github.io/caio_pariz/#/privacy/vigiliadovazio)

Política de Órbita de Sucata atualizada em 24/10/2026. A página de exclusão explica o procedimento no jogo, o atendimento por e-mail e os dados conservados. O link de e-mail abre uma mensagem; não envia nem conclui o pedido automaticamente.

## Publicação

O workflow `.github/workflows/deploy.yml` compila e publica no GitHub Pages a cada push na branch `main`. Também pode ser executado manualmente pelo GitHub Actions.

O caminho base está configurado como `/caio_pariz/` em `vite.config.ts`, correspondente ao endereço deste repositório no GitHub Pages.

## Contato

- Instagram: [@caelussys](https://www.instagram.com/caelussys/)
- E-mail: [caio.pariz2000@gmail.com](mailto:caio.pariz2000@gmail.com)
