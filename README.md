# Tarefas+

Aplicação web para organização de estudos e tarefas, desenvolvida como parte do curso **Fullstack Pro** do Sujeito Programador.

## ✨ Sobre o projeto

O Tarefas+ é um sistema pensado para ajudar o usuário a organizar seus estudos e tarefas do dia a dia. O projeto está em desenvolvimento e evolui ao longo do curso.

## 🚧 Status atual

- [x] Landing page inicial com apresentação do produto
- [x] Componente de header com navegação
- [ ] Autenticação de usuários
- [ ] Painel do usuário (dashboard)
- [ ] CRUD de tarefas

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) 16 (Pages Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## 📂 Estrutura do projeto

```
src/
├── components/
│   └── header/         # Componente de cabeçalho com navegação
├── pages/
│   ├── _app.tsx         # Componente raiz da aplicação
│   ├── index.tsx        # Landing page
│   └── api/             # API Routes do Next.js
styles/                  # Estilos globais e específicos de páginas
public/                  # Arquivos estáticos (imagens, ícones)
```

## 🚀 Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Outros scripts disponíveis

```bash
npm run build   # Gera a build de produção
npm run start   # Sobe a aplicação a partir da build de produção
npm run lint    # Executa o linter
```

## 📄 Licença

Projeto de estudo, desenvolvido para fins didáticos durante o curso Fullstack Pro.
