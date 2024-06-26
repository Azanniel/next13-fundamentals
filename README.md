<h4 align="center">
  <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" />
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

**2. Arquitetura do NextJS**

Em uma aplicação React tradicional, o usuário acessa diretamente o front-end, que é construído com JavaScript, CSS e HTML. No entanto, o usuário precisa esperar o carregamento desses arquivos, o que pode resultar em uma tela em branco até que tudo seja carregado. Somente após o carregamento do JavaScript, a aplicação começa a funcionar e pode buscar dados da API, por exemplo.

Já o Next.js introduz o conceito de Server Side Rendering (SSR), onde o servidor Node.js busca os arquivos necessários para renderizar apenas a página que o usuário está acessando. Isso significa que o HTML é montado pelo servidor e enviado pronto para o usuário, não sendo necessário o carregamento completo do JavaScript no navegador. O Next.js também permite buscar dados da API no servidor, facilitando a transição de dados entre a API e a aplicação.

Essa arquitetura do Next.js possibilita o uso de funcionalidades avançadas do React, como os Server Components, que revolucionam o desenvolvimento front-end. O Next.js é o único framework que suporta essa nova arquitetura do React, tornando-o uma escolha recomendada para criar aplicações React atualmente.

**3. Server Components & Client Components**

Os Server Components são componentes criados dentro do Node e são exibidos como HTML puro para o usuário, sem qualquer JavaScript associado. 
Isso evita o envio de JavaScript desnecessário para o navegador. No entanto, os Server Components têm limitações, pois não podem executar funcionalidades que dependem de JavaScript no lado do cliente, como ouvir eventos. 

Para isso, usamos Client Components, que são componentes que possuem interatividade e enviam o JavaScript necessário para o navegador. A diferença é que os Client Components passam por um processo de hidratação, onde o HTML é convertido em um HTML interativo com JavaScript.

**4. Fetch de dados nos componentes**

Ao utilizar Server Components, o HTML só é devolvido para o usuário após o servidor terminar de criar o componente. Isso permite que os componentes sejam assíncronos, possibilitando a utilização de await dentro deles. Com isso, podemos fazer chamadas assíncronas para APIs ou outras operações, como carregar dados iniciais. Essa abordagem melhora a experiência do usuário, pois os dados já estarão disponíveis no HTML renderizado pelo servidor, evitando a necessidade de aguardar o carregamento no lado do cliente. Além disso, o uso de Server Components facilita a indexação nos mecanismos de busca, tornando a aplicação mais amigável para SEO. No entanto, é importante ter cuidado com o tempo de carregamento dos componentes, pois operações assíncronas podem impactar no desempenho da aplicação.

**5. Loading e Streaming SSR**

Foi mostrado como criar um arquivo de carregamento específico para cada página da aplicação, permitindo personalizar a mensagem exibida durante o carregamento. Além disso, foi explicado que o arquivo de carregamento herda o layout da aplicação, garantindo uma experiência consistente para o usuário. Também foi introduzido o conceito de Streaming SSR, que permite exibir parcialmente o conteúdo de uma página enquanto os dados são carregados, proporcionando um feedback visual instantâneo para o usuário.

**6. Abstração de Client Components**

Os componentes do tipo client são reativos, respondendo a alterações de estado ou do componente pai. No entanto, ao empregar async nesses componentes, podemos enfrentar problemas, pois o código interno pode ser executado repetidamente sempre que ocorrer uma atualização.

Uma abordagem mais eficaz é realizar operações assíncronas, como o fetch de dados, em componentes do tipo client utilizando estratégias alternativas. Recomendamos o uso de useEffect ou a adoção de bibliotecas especializadas, como o ReactQuery. Essas alternativas permitem um controle mais preciso sobre o momento da execução do código assíncrono, evitando execuções desnecessárias durante cada atualização.

É crucial manter uma abstração eficiente nos componentes do tipo client, isolando a lógica interativa em componentes separados. Essa prática não apenas melhora a legibilidade e a manutenção do código, mas também tem impactos positivos no desempenho, reduzindo a quantidade de JavaScript enviado para o navegador. Ao modularizar a interatividade, conseguimos otimizar a carga da aplicação, proporcionando uma experiência mais ágil ao usuário.

## ☕ Contatos

Você vai me encontrar em qualquer uma das redes sociais abaixo:

<a href = "mailto: leo.azannielttt@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23EA4335?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" margin-right="10px"></a>
<a href="https://www.linkedin.com/in/leandroazanniel/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://api.whatsapp.com/send?phone=5592985406269" target="_blank"><img src="https://img.shields.io/badge/-WhatsApp-%25D366?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a>