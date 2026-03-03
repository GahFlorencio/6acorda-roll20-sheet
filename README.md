# 🎲 Ficha de Personagem Roll20 com Tailwind CSS

Projeto de ficha de personagem para **Roll20** desenvolvido com **Tailwind CSS**. O build gera arquivos HTML e CSS estáticos prontos para uso na plataforma Roll20.

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── sheet.html      # HTML da ficha (fonte)
│   └── sheet.css       # CSS com diretivas Tailwind
├── dist/               # Arquivos gerados (prontos para Roll20)
│   ├── sheet.html      # HTML processado
│   ├── sheet.css       # CSS final compilado
│   └── sheet-compiled.css  # CSS intermediário
├── build.js            # Script de build
├── tailwind.config.js  # Configuração do Tailwind
└── package.json        # Dependências e scripts
```

## 🎯 Características

✅ **Estrutura Roll20**: Usa convenções do Roll20 (attr_, button[type="roll"], repeating sections)  
✅ **Tailwind CSS**: Desenvolvimento rápido com classes utilitárias (prefixo `tw-`)  
✅ **Build Estático**: Gera HTML e CSS prontos para copiar para o Roll20  
✅ **Atributos de Personagem**: Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma  
✅ **Sistema de Perícias**: Com botões de rolagem integrados  
✅ **Ataques e Magias**: Repeating sections para gerenciar ataques  
✅ **Roll Templates**: Templates customizados para exibição de rolagens  

## 🚀 Como Usar

### 1. Instalação

```bash
npm install
```

### 2. Build (Gerar arquivos para Roll20)

```bash
npm run build
```

Isso irá:
1. Compilar o Tailwind CSS com prefixo `tw-` → `dist/sheet-compiled.css`
2. Processar o HTML removendo referências de CSS externo → `dist/sheet.html`
3. Criar CSS final → `dist/sheet.css`

### 3. Modo Desenvolvimento (Watch)

```bash
npm run dev
```

Monitora mudanças no CSS e recompila automaticamente.

## 📤 Como Usar no Roll20

### Passo 1: Copiar HTML
1. Abra o arquivo `dist/sheet.html`
2. Copie todo o conteúdo
3. No Roll20, vá em **Game Settings → Character Sheet Template**
4. Cole o HTML no campo **HTML Layout**

### Passo 2: Copiar CSS
1. Abra o arquivo `dist/sheet.css`
2. Copie todo o conteúdo
3. No Roll20, cole no campo **CSS Styling**

### Passo 3: Salvar
Clique em **Save Changes** no Roll20.

## 🎨 Customização

### Adicionar Novos Atributos

No `src/sheet.html`, adicione campos seguindo o padrão Roll20:

```html
<input type="text" name="attr_nome_do_atributo" />
```

### Adicionar Botões de Rolagem

```html
<button type="roll" value="/roll 1d20+@{nome_do_atributo}">
    Rolar
</button>
```

### Adicionar Repeating Sections

```html
<fieldset class="repeating_nome">
    <input type="text" name="attr_item" />
</fieldset>
```

### Modificar Estilos

Edite `src/sheet.css` e adicione seus estilos customizados após as diretivas do Tailwind. Use o prefixo `tw-` para classes do Tailwind.

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run build` | Build completo (CSS + HTML) |
| `npm run build:css` | Compila apenas o CSS |
| `npm run build:html` | Processa apenas o HTML |
| `npm run dev` | Modo watch para desenvolvimento |
| `npm run watch` | Alias para `npm run dev` |

## 📋 Convenções Roll20

Este projeto segue as convenções oficiais do Roll20:

- **Atributos**: `name="attr_nome"`
- **Botões de Rolagem**: `<button type="roll" value="/roll 1d20">`
- **Repeating Sections**: `<fieldset class="repeating_nome">`
- **Roll Templates**: `<rolltemplate class="sheet-rolltemplate-nome">`
- **Prefixo de Classes**: `.sheet-` para evitar conflitos

## 🎲 Recursos da Ficha

### Informações Básicas
- Nome do personagem
- Classe, nível, raça, alinhamento

### Atributos (com modificadores)
- Força (FOR)
- Destreza (DES)
- Constituição (CON)
- Inteligência (INT)
- Sabedoria (SAB)
- Carisma (CAR)

### Recursos de Combate
- Pontos de Vida (atual/máximo)
- Classe de Armadura (AC)
- Iniciativa (com botão de rolagem)

### Perícias
- Acrobacia, Atletismo, Percepção, Investigação
- Checkbox para proficiência
- Botões de rolagem individuais

### Ataques e Magias
- Repeating section para múltiplos ataques
- Nome, bônus e dano
- Botões de rolagem de ataque

### Anotações
- Equipamento
- Notas gerais

## 📖 Referências

- [Roll20 Character Sheets Documentation](https://wiki.roll20.net/Building_Character_Sheets)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 Licença

MIT
