# Tarefas+

Aplicação web para organização de estudos e tarefas, desenvolvida como parte do curso **Fullstack Pro** do Sujeito Programador.

## ✨ Sobre o projeto

O Tarefas+ é um sistema pensado para ajudar o usuário a organizar seus estudos e tarefas do dia a dia. O projeto está em desenvolvimento e evolui ao longo do curso.

## 🚧 Status atual

- [x] Landing page inicial com apresentação do produto
- [x] Componente de header com navegação
- [x] Autenticação de usuários (via NextAuth.js e Google)
- [x] Configuração de conexão com Firebase (Firestore)
- [x] Painel do usuário (dashboard) com listagem de tarefas
- [x] Registro de tarefas no Firestore
- [ ] CRUD completo de tarefas (Edição e Exclusão)

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) 16 (Pages Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/) (Firestore)
- [NextAuth.js](https://next-auth.js.org/) (Autenticação)
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
├── services/            # Serviços externos (Firebase, etc)
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
