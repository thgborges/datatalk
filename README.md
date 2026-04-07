<h1 align="center">💬 DataTalk</h1>

<p align="center">
  <strong>Converse com seus dados. Gere insights sem escrever uma linha de SQL.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-MVP-blue" />
  <img src="https://img.shields.io/badge/node.js-backend-green" />
  <img src="https://img.shields.io/badge/AI-powered-purple" />
</p>

---

## 🚀 Sobre o Projeto

O **DataTalk** é uma plataforma SaaS que transforma a forma como empresas interagem com seus dados.

Em vez de depender de analistas ou escrever queries complexas, usuários podem simplesmente **fazer perguntas em linguagem natural** e receber respostas instantâneas — como se estivessem conversando com seus sistemas.

> 💡 “Qual foi o faturamento do mês passado?”
>
> 💡 “Quais clientes mais compraram este ano?”
>
> 💡 “Quantos leads viraram clientes?”

O DataTalk cuida de tudo: interpretação, geração de SQL e entrega do insight.

---

## 🧠 Como Funciona

1. 📂 O cliente envia seus **metadados (CSV)**
2. 🧩 O sistema organiza os dados em datasets
3. 🤖 O usuário faz perguntas em linguagem natural
4. ⚙️ A plataforma gera automaticamente a query SQL
5. 📊 O resultado é retornado de forma simples e clara

---

## 🏗️ Arquitetura

* **Frontend:** Portal SaaS (Vercel)
* **Backend:** API Node.js
* **Banco de dados:** MongoDB
* **AI Layer:** Interpretação de linguagem natural + geração de queries
* **Integração:** Datasets simulando sistemas reais (CRM, ERP, etc.)

---

## 👥 Perfis de Usuário

### 🧑‍💼 Super Usuário (DataTalk)

* Gerencia a plataforma
* Controla empresas e acessos
* Administra datasets globais

### 🏢 Administrador (Empresa Cliente)

* Cadastra sistemas (CRM, ERP, etc.)
* Faz upload de metadados
* Gerencia usuários e permissões

### 👤 Usuário Final

* Faz perguntas
* Consulta dados
* Gera insights em tempo real

---

## ✨ Principais Funcionalidades

* 💬 Chat com dados em linguagem natural
* 🔄 Geração automática de SQL
* 📊 Insights em tempo real
* 🧩 Suporte a múltiplos sistemas (multi-dataset)
* 🔐 Controle de acesso por usuário
* 🏢 Arquitetura multi-tenant

---

## 📸 Preview

<p align="center">

  ### Tela Principal
<img width="1532" height="857" alt="image" src="https://github.com/user-attachments/assets/fb243964-5c6e-4415-8de5-cec8f2f95355" />

  ### Como Funciona
<img width="1530" height="839" alt="image" src="https://github.com/user-attachments/assets/80cbbfa0-f9de-4180-bf5a-041fecb3513e" />
</p>

---

## 📦 Estrutura do Projeto

```
datatalk/
│
├── frontend/           # Portal SaaS
├── backend/            # API Node.js
├── datasets/           # Metadados simulados (CSV)
├── services/           # Lógica de geração de queries
├── models/             # Modelos MongoDB
├── routes/             # Rotas da API
├── utils/              # Funções auxiliares
└── README.md
```

---

## 📡 Exemplo de Uso

**Pergunta:**

```
Quais foram os 5 clientes com maior faturamento em 2025?
```

**Processo interno:**

* Interpretação da pergunta
* Mapeamento do dataset
* Geração de SQL
* Execução da query

**Resposta:**

```
1. Empresa X - R$ 120.000
2. Empresa Y - R$ 98.000
...
```

---

## 🔮 Roadmap

* [ ] Integração com bancos reais (PostgreSQL, MySQL)
* [ ] Dashboard visual (gráficos e KPIs)
* [ ] API pública para integrações
* [ ] Treinamento personalizado por cliente
* [ ] Controle avançado de permissões
* [ ] Histórico de consultas

---

## 💡 Casos de Uso

* 📊 BI sem analista
* 🏢 Empresas com sistemas legados
* 📈 Times de negócio (marketing, vendas, financeiro)
* 🤝 Consultorias de dados
* 🏦 Seguros e fintechs (seu foco atual)

---

## 🧩 Diferenciais

* Zero necessidade de SQL
* Implementação rápida via CSV
* Interface conversacional
* Multi-tenant nativo
* Escalável para diversos segmentos

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`feature/nova-feature`)
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

<p align="center">
  Feito com 💡 para transformar dados em decisões
</p>
