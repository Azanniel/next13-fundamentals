<h4 align="center">
  <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" />

  <br/>

  <p>Fundamentos do NextJS</p>
</h4>

Aplicação para aprender os fundamentos do framework NextJS.

Usado por algumas das maiores empresas do mundo, Next.js permite que você crie aplicativos Web full-stack, estendendo os recursos mais recentes do React e integrando poderosas ferramentas JavaScript baseadas em Rust para compilações mais rápidas.

> ⚠️ Aplicação com finalidade de desenvolver minhas habilidades com NextJS

## ✨ Tecnologias relevantes

- [NextJS](https://nextjs.org/): Next.js é uma estrutura React para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário e Next.js para recursos e otimizações adicionais.
- [TailwindCSS](https://tailwindcss.com/): Uma estrutura CSS utilitária repleta de classes e que pode ser composta para construir qualquer design, diretamente em sua marcação.

## 📃 Anotações importantes

**1. Rotas, Layouts e Grupos**

O roteamento do nextJS é feita baseada em arquivos que dependendo do nome acaba gerando uma nova rota ou página dentro da aplicação.
Uma página é uma interface de usuário exclusiva para uma rota. Você pode definir páginas exportando um componente de um page.js.

Um layout é uma interface de usuário compartilhada entre várias páginas. Na navegação, os layouts preservam o estado, permanecem interativos e não são renderizados novamente. Os layouts também podem ser aninhados.

No diretório do aplicativo, as pastas aninhadas normalmente são mapeadas para caminhos de URL. No entanto, você pode marcar uma pasta como Grupo de rotas para evitar que a pasta seja incluída no caminho URL da rota usando parenteses.