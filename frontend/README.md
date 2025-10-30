# Liftly Frontend

Frontend da aplicação **Liftly** - Uma plataforma completa para gerenciamento de exercícios físicos e treinos. Este é o frontend React que se conecta com a API backend para fornecer uma interface moderna e intuitiva para usuários gerenciarem seus exercícios.

![WhatsApp Image 2025-10-15 at 02 45 52](https://github.com/user-attachments/assets/e0abd302-10f4-4d75-9535-130d7fb08de4)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API e Backend](#api-e-backend)
- [Componentes Principais](#componentes-principais)
- [Sistema de Autenticação](#sistema-de-autenticação)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Estilização](#estilização)
- [Testes Automatizados (Cypress)](#testes-automatizados-cypress)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

O **Liftly Frontend** é uma aplicação React moderna que permite aos usuários:

- **Gerenciar exercícios** organizados por categorias e subcategorias
- **Criar, editar e excluir** exercícios personalizados
- **Acompanhar progresso** com informações de séries, repetições e peso máximo
- **Interface responsiva** e intuitiva
- **Sistema de autenticação** completo com login, registro e recuperação de senha

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para interface
- **React Router DOM 7.8.2** - Roteamento de páginas
- **Vite 7.1.2** - Build tool e servidor de desenvolvimento
- **CSS Modules** - Estilização modular
- **ESLint** - Linting e qualidade de código

### Dependências Principais
- `@fontsource/inter` - Fonte Inter para tipografia
- `vite-plugin-svgr` - Suporte a SVG como componentes React

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação
- **Login** com username e senha
- **Registro** de novos usuários
- **Recuperação de senha** via email
- **Reset de senha** com token
- **Auto-login** com validação de token
- **Logout** seguro

### 🏋️ Gerenciamento de Exercícios
- **Categorias** de exercícios (Superiores, Inferiores, Abdômen, Cardio)
- **Subcategorias** específicas para cada categoria
- **CRUD completo** de exercícios:
  - ✅ Criar novos exercícios
  - 📖 Visualizar lista de exercícios
  - ✏️ Editar exercícios existentes
  - 🗑️ Excluir exercícios
- **Informações detalhadas**:
  - Nome do exercício
  - Número de séries
  - Número de repetições
  - Peso máximo (PR)

### 🎨 Interface do Usuário
- **Design responsivo** para desktop e mobile
- **Navegação intuitiva** com breadcrumbs
- **Animações suaves** de transição
- **Ícones personalizados** para cada categoria
- **Feedback visual** para ações do usuário

## 📁 Estrutura do Projeto

```
liftly-frontend/
├── public/
│   └── Assets/                 # Imagens e ícones
│       ├── abdomen.png
│       ├── cardio.png
│       ├── haltere.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── Dashboard/          # Componentes do dashboard
│   │   │   ├── Categories.jsx
│   │   │   ├── SubCategories.jsx
│   │   │   ├── Exercises.jsx
│   │   │   ├── AddExercise.jsx
│   │   │   ├── EditExercise.jsx
│   │   │   └── *.module.css
│   │   ├── Login/              # Componentes de autenticação
│   │   │   ├── Login.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── LoginCreate.jsx
│   │   │   ├── LoginPasswordLost.jsx
│   │   │   ├── LoginPasswordReset.jsx
│   │   │   └── *.module.css
│   │   ├── Forms/              # Componentes de formulário
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── *.module.css
│   │   ├── Helpers/            # Componentes auxiliares
│   │   │   ├── Message.jsx
│   │   │   └── ProtectedRouter.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Intro.jsx
│   ├── Hooks/                  # Custom hooks
│   │   ├── useFetch.jsx
│   │   └── useForm.jsx
│   ├── assets/                 # SVG e assets
│   ├── api.js                  # Configuração da API
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globais
│   ├── UserContext.jsx         # Context de usuário
│   ├── UseProvider.jsx         # Provider de contexto
│   └── main.jsx               # Ponto de entrada
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd liftly-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure a API**
   - Edite o arquivo `src/api.js`
   - Altere a `API_URL` para o endereço do seu backend:
   ```javascript
   export const API_URL = "https://seu-backend-url.com";
   ```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no navegador

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting
npm run lint         # Executa ESLint

# Preview
npm run preview      # Preview do build de produção
```

## 🔗 API e Backend

O frontend se conecta com a API backend através dos seguintes endpoints:

### Autenticação
- `POST /users/auth` - Login
- `POST /users` - Registro
- `GET /users/me` - Dados do usuário
- `GET /users/validate` - Validar token

### Exercícios
- `GET /categories` - Listar categorias
- `GET /categories/:id/subcategories` - Listar subcategorias
- `GET /categories/:id/subcategories/:id/exercises` - Listar exercícios
- `POST /categories/:id/subcategories/:id/exercises` - Criar exercício
- `PUT /categories/:id/subcategories/:id/exercises/:id` - Editar exercício
- `DELETE /categories/:id/subcategories/:id/exercises/:id` - Excluir exercício

## 🧩 Componentes Principais

### Dashboard
- **Categories**: Lista todas as categorias de exercícios
- **SubCategories**: Lista subcategorias de uma categoria específica
- **Exercises**: Gerencia exercícios de uma subcategoria
- **AddExercise**: Formulário para criar novo exercício
- **EditExercise**: Formulário para editar exercício existente

### Autenticação
- **LoginForm**: Formulário de login
- **LoginCreate**: Formulário de registro
- **LoginPasswordLost**: Recuperação de senha
- **LoginPasswordReset**: Reset de senha

### Auxiliares
- **ProtectedRouter**: Protege rotas que requerem autenticação
- **Message**: Exibe mensagens de feedback
- **Button/Input**: Componentes de formulário reutilizáveis

## 🔐 Sistema de Autenticação

### Fluxo de Autenticação
1. **Login**: Usuário insere credenciais
2. **Validação**: API valida credenciais
3. **Token**: Recebe token JWT
4. **Armazenamento**: Token salvo no localStorage
5. **Auto-login**: Validação automática em carregamentos futuros

### Context de Usuário
```javascript
const {
  userLogin,      // Função de login
  userLogout,     // Função de logout
  dataUser,       // Dados do usuário
  message,        // Mensagens de erro
  loading,        // Estado de carregamento
  login          // Estado de autenticação
} = useContext(UserContext);
```

## 📊 Gerenciamento de Estado

### Context API
- **UserContext**: Gerencia estado global do usuário
- **UseProvider**: Provider que envolve a aplicação

### Custom Hooks
- **useFetch**: Hook para requisições HTTP
- **useForm**: Hook para gerenciamento de formulários

### Estado Local
- Estados específicos de cada componente
- Loading states para UX
- Mensagens de feedback

## 🎨 Estilização

### CSS Modules
- Estilos isolados por componente
- Classes com escopo local
- Evita conflitos de CSS

### Estrutura de Estilos
```css
/* Exemplo: Dashboard.module.css */
.dashboardContainer {
  /* estilos específicos */
}

.category {
  /* estilos da categoria */
}
```

### Assets
- **Ícones**: SVG otimizados como componentes
- **Imagens**: PNG para categorias e exercícios
- **Fontes**: Inter para tipografia moderna

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Variáveis de Ambiente
Configure a URL da API no arquivo `src/api.js`:
```javascript
export const API_URL = process.env.REACT_APP_API_URL || "https://liftly-backend-fjhi.onrender.com";
```

## 🧪 Testes Automatizados (Cypress)

Os testes de interface end-to-end foram adicionados com Cypress para validar fluxos críticos como Home e Login.

### Instalação
- O projeto já inclui `cypress` nas dependências. Caso necessário, reinstale:
```bash
npm install
```

### Como executar
- Abrir o Test Runner interativo:
```bash
npx cypress open
```

- Executar em modo headless (CI/local):
```bash
npx cypress run
```

Opcional: adicione scripts ao `package.json` para facilitar:
```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

### Estrutura dos testes
```
cypress/
├── e2e/
│   ├── 001-home/
│   │   └── home.cy.js         # Testes da página inicial
│   └── 002-login/
│       └── login.cy.js        # Testes de autenticação (login)
├── fixtures/
│   └── example.json           # Dados estáticos de apoio
└── support/
    ├── commands.js            # Comandos customizados
    └── e2e.js                 # Configuração global de testes
```

### Boas práticas
- Prefira selecionar elementos por `data-testid` ao invés de classes/ids
- Isole dados em `fixtures` quando possível
- Nomeie os arquivos com o fluxo funcional testado (ex.: `login`, `home`)

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do repositório.

---

**Liftly Frontend** - Transformando a forma como você gerencia seus treinos! 💪
