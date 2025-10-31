# 🧪 Liftly - Repositório de Testes Automatizados

Repositório isolado dedicado à execução de testes automatizados end-to-end (E2E) para o projeto Liftly. Esta estrutura reconcilia a separação entre frontend, backend e testes, garantindo ambientes isolados e reproduzíveis.

## 📋 Sobre o Projeto

Este repositório foi criado especificamente para:
- **Isolamento**: Manter os testes separados dos repositórios de frontend e backend
- **Ambiente Controlado**: Usar Docker Compose para garantir consistência entre ambientes
- **CI/CD**: Integração com GitHub Actions para execução automática dos testes
- **Escalabilidade**: Base sólida para expansão da suíte de testes

## 🏗️ Estrutura do Projeto

```
liftly-testesAutomatizados/
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline CI/CD
├── backend/                    # API Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   └── package.json
├── frontend/                   # Aplicação React
│   ├── cypress/               # Testes E2E
│   │   ├── e2e/
│   │   │   └── 001-home/
│   │   │       └── home.cy.js
│   │   ├── fixtures/
│   │   └── support/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml          # Orquestração dos serviços
```

## 🐳 Docker Compose

O `docker-compose.yml` orquestra três serviços principais:

- **MongoDB**: Banco de dados MongoDB para o backend
- **Backend**: API Node.js/Express rodando na porta 3000
- **Frontend**: Aplicação React/Vite rodando na porta 5173

### Comandos Docker Compose

```bash
# Subir todos os serviços
docker-compose up -d

# Subir e reconstruir imagens
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down
```

## 🚀 Executando Testes Localmente

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 18+ (opcional, para rodar sem Docker)

### Passo a Passo

1. **Subir os serviços**:
   ```bash
   docker-compose up -d --build
   ```

2. **Aguardar serviços estarem prontos**:
   ```bash
   # Verificar se backend está respondendo
   curl http://localhost:3000/health
   
   # Ou verificar logs
   docker-compose logs backend
   ```

3. **Instalar dependências do frontend**:
   ```bash
   cd frontend
   npm install
   ```

4. **Executar testes Cypress**:
   ```bash
   # Modo headless (CI)
   npx cypress run
   
   # Modo interativo (desenvolvimento)
   npx cypress open
   ```

## 🤖 CI/CD com GitHub Actions

O pipeline automático está configurado em `.github/workflows/ci.yml` e executa:

1. ✅ **Checkout** do código
2. 🐳 **Instalação** do Docker Compose
3. 🚀 **Build e subida** dos containers (MongoDB, Backend, Frontend)
4. ⏳ **Aguardar** o backend estar disponível
5. 📦 **Instalação** de dependências do frontend
6. 🧪 **Execução** dos testes E2E com Cypress
7. 🧹 **Limpeza** dos containers (sempre executa, mesmo em caso de falha)

### Triggers

O workflow é executado automaticamente em:
- Push para branch `main`
- Pull Requests para branch `main`

## 📝 Testes Cypress

Os testes E2E estão localizados em `frontend/cypress/e2e/`:

### Estrutura Atual

- **001-home/home.cy.js**: Teste da página inicial
  - Valida título e descrição
  - Testa redirecionamento para login

### Adicionando Novos Testes

1. Crie uma pasta numerada em `frontend/cypress/e2e/` (ex: `002-login/`)
2. Adicione seus arquivos `.cy.js` dentro dela
3. Use seletores `data-cy` nos componentes React para melhor estabilidade

Exemplo:
```javascript
describe("Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("/login");
    cy.get('[data-cy="email-input"]').type("user@example.com");
    cy.get('[data-cy="password-input"]').type("password123");
    cy.get('[data-cy="login-btn"]').click();
    cy.url().should("include", "/dashboard");
  });
});
```

## 🔧 Configuração

### Cypress Config

O arquivo `frontend/cypress.config.js` define:
- **baseUrl**: `http://localhost:5173/` (frontend local)

### Variáveis de Ambiente

O backend usa variáveis de ambiente definidas no `docker-compose.yml`:
- `MONGO_URI`: Conexão com MongoDB
- `PORT`: Porta do servidor (3000)

## 🎯 Vantagens desta Arquitetura

✅ **Isolamento**: Testes não interferem nos repositórios de frontend/backend  
✅ **Reprodutibilidade**: Docker garante ambiente idêntico em qualquer máquina  
✅ **CI/CD Integrado**: Testes executam automaticamente no GitHub Actions  
✅ **Manutenibilidade**: Estrutura clara e organizada facilita adição de novos testes  
✅ **Escalabilidade**: Fácil adicionar mais serviços ou ambientes de teste  

## 📚 Próximos Passos

- [ ] Adicionar mais cenários de teste E2E
- [ ] Implementar testes de integração de API
- [ ] Configurar relatórios de cobertura de testes
- [ ] Adicionar paralelização de testes no CI
- [ ] Implementar testes de regressão visual
- [ ] Configurar artefatos de testes (screenshots/vídeos) no GitHub Actions

## 🤝 Contribuindo

1. Crie uma branch para sua feature/fix
2. Adicione ou modifique testes
3. Execute localmente para validar
4. Abra um Pull Request
5. O CI irá executar os testes automaticamente

## 📄 Licença

Este projeto está sob licença ISC.

---

**Desenvolvido para garantir qualidade e confiabilidade no projeto Liftly**
