# 🚀 INÍCIO RÁPIDO

## Instalar dependências
```bash
npm install
```

## 🎨 DESENVOLVIMENTO (com servidor local)

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```

Isso irá:
1. ✅ Compilar o CSS automaticamente quando você editar `src/sheet.css`
2. ✅ Copiar HTMLs automaticamente quando você editar `src/index.html` ou `src/sheet.html`
3. ✅ Iniciar servidor em **http://localhost:8080**
4. ✅ Recarregar automaticamente o navegador quando houver mudanças

**Abra no navegador:** http://localhost:8080

### Estrutura de Desenvolvimento

```
src/
  index.html   ← Wrapper para preview (não vai pro Roll20)
  sheet.html   ← Componente da ficha (vai pro Roll20)
  sheet.css    ← CSS com Tailwind (vai pro Roll20)

dist/
  index.html   ← Preview gerado (abre no navegador)
  sheet.html   ← Para copiar no Roll20
  sheet.css    ← Para copiar no Roll20
```

### Como Funciona

1. **`src/index.html`** - Arquivo wrapper que inclui sheet.html via iframe
   - Usado apenas para desenvolvimento
   - Não é copiado para o Roll20

2. **`src/sheet.html`** - Componente puro da ficha
   - Apenas o HTML da ficha, sem DOCTYPE, sem <html>, sem <head>
   - Este é o arquivo que vai para o Roll20

3. **`src/sheet.css`** - CSS com diretivas Tailwind
   - Classes do Tailwind são compiladas
   - Estilos customizados são preservados

---

## 📦 BUILD PARA ROLL20

### Gerar arquivos finais
```bash
npm run build
```

Isso gera:
- `dist/sheet.html` - HTML limpo para Roll20
- `dist/sheet.css` - CSS compilado e minificado

---

## 📤 USAR NO ROLL20

### 1. Build
```bash
npm run build
```

### 2. HTML
- Abra: `dist/sheet.html`
- Copie todo o conteúdo (Ctrl+A, Ctrl+C)
- Cole em: **Game Settings → Character Sheet Template → HTML Layout**

### 3. CSS
- Abra: `dist/sheet.css`
- Copie todo o conteúdo (Ctrl+A, Ctrl+C)
- Cole em: **Game Settings → Character Sheet Template → CSS Styling**

### 4. Salvar
- Clique em **Save Changes** no Roll20

---

## ✏️ WORKFLOW DE DESENVOLVIMENTO

### Modo Recomendado

1. Execute `npm run dev`
2. Abra http://localhost:8080 no navegador
3. Edite `src/sheet.html` ou `src/sheet.css`
4. Veja as mudanças automaticamente no navegador!
5. Quando estiver pronto, execute `npm run build`
6. Copie os arquivos de `dist/` para o Roll20

### Dicas

- **Live Reload**: O navegador recarrega automaticamente
- **Hot Reload CSS**: Mudanças no CSS são aplicadas instantaneamente
- **Preview Real**: O que você vê é o que vai para o Roll20
- **Sem Conflitos**: O build não afeta os arquivos de desenvolvimento

---

## 📋 COMANDOS DISPONÍVEIS

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia servidor de desenvolvimento na porta 8080 |
| `npm start` | Alias para `npm run dev` |
| `npm run build` | Gera arquivos finais para Roll20 |
| `npm run build:css` | Compila só o CSS minificado |
| `npm run build:html` | Processa só o HTML |

---

## 🛠️ COMANDOS AVANÇADOS

| Comando | Descrição |
|---------|-----------|
| `npm run dev:css` | Watch no CSS (não inicia servidor) |
| `npm run dev:html` | Watch no HTML (não inicia servidor) |
| `npm run dev:serve` | Apenas servidor (sem watch) |

---

## 🎯 ESTRUTURA DE ARQUIVOS

### Arquivos de Desenvolvimento
- `src/index.html` - Wrapper de preview
- `src/sheet.html` - Componente da ficha
- `src/sheet.css` - Estilos com Tailwind

### Arquivos Gerados (dist/)
Durante desenvolvimento (`npm run dev`):
- `index.html` - Preview com iframe
- `sheet.html` - Cópia do componente
- `sheet.css` - CSS compilado
- `preview.css` - CSS não-minificado

Para Roll20 (`npm run build`):
- `sheet.html` - HTML limpo (sem links CSS)
- `sheet.css` - CSS minificado

### Arquivos de Configuração
- `package.json` - Dependências e scripts
- `tailwind.config.js` - Config do Tailwind (prefixo `tw-`)
- `build.js` - Script de build customizado

---

## 🔥 EXEMPLO: Adicionar Novo Campo

1. Abra `src/sheet.html`
2. Adicione:
```html
<div class="tw-p-4">
    <label>Novo Campo</label>
    <input type="text" name="attr_novo_campo" 
           class="tw-border tw-rounded tw-px-3 tw-py-2" />
</div>
```
3. Salve (o navegador recarrega automaticamente!)
4. Quando terminar: `npm run build`

---

## 🎨 CUSTOMIZAR ESTILOS

Edite `src/sheet.css` e adicione seus estilos:

```css
/* Seu estilo customizado */
.sheet-custom-class {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 1rem;
    border-radius: 0.5rem;
}
```

Use no HTML:
```html
<div class="sheet-custom-class tw-text-white">
    Conteúdo com estilo customizado
</div>
```

---

## 📚 RECURSOS

- [Roll20 Wiki - Character Sheets](https://wiki.roll20.net/Building_Character_Sheets)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [README.md](README.md) - Documentação completa
- [EXAMPLES.md](EXAMPLES.md) - Exemplos de personalização
