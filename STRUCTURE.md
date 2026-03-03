# 📐 ESTRUTURA DO PROJETO

## 🎯 Visão Geral

Este projeto separa claramente os ambientes de **desenvolvimento** e **produção (Roll20)**.

```
src/
├── index.html    → Wrapper de preview (APENAS DEV)
├── sheet.html    → Componente da ficha (VAI PARA ROLL20)
└── sheet.css     → Estilos com Tailwind (VAI PARA ROLL20)

dist/  (gerado)
├── index.html    → Preview renderizado (DEV)
├── sheet.html    → HTML limpo (ROLL20)
└── sheet.css     → CSS compilado (ROLL20)
```

---

## 📝 src/index.html

**Propósito**: Wrapper para visualização em desenvolvimento

**Características**:
- ✅ DOCTYPE completo, estructura HTML
- ✅ Inclui sheet.html via `<iframe>`
- ✅ Inclui sheet.css via `<link>`
- ✅ Design bonito para preview
- ✅ Auto-reload do conteúdo
- ❌ **NÃO vai para o Roll20**

**Quando usar**:
- Durante desenvolvimento com `npm run dev`
- Para visualizar mudanças em tempo real
- Para testar responsividade

---

## 📄 src/sheet.html

**Propósito**: Componente puro da ficha de personagem

**Características**:
- ✅ Apenas o conteúdo da ficha
- ✅ Sem DOCTYPE, sem `<html>`, sem `<head>`
- ✅ Usa convenções do Roll20 (`attr_*`, `button[type="roll"]`)
- ✅ Classes Tailwind com prefixo `tw-`
- ✅ **Este arquivo VAI para o Roll20**

**Estrutura**:
```html
<!-- FICHA DE PERSONAGEM ROLL20 -->
<div class="sheet-character-sheet">
    <!-- Cabeçalho -->
    <div class="sheet-header tw-bg-gray-800 tw-text-white tw-p-6">
        <!-- Campos do personagem -->
    </div>
    
    <!-- Atributos -->
    <div class="sheet-attributes">
        <input type="number" name="attr_strength" />
        <!-- ... -->
    </div>
    
    <!-- Perícias, Ataques, etc -->
</div>
```

**Quando editar**:
- Para adicionar/remover campos da ficha
- Para modificar layout e estrutura
- Para adicionar botões de rolagem
- Para criar repeating sections

---

## 🎨 src/sheet.css

**Propósito**: Estilos da ficha com Tailwind CSS

**Características**:
- ✅ Diretivas Tailwind (`@tailwind base`, `@tailwind components`, etc)
- ✅ Estilos customizados para Roll20
- ✅ Prefixo `tw-` nas classes (configurado no tailwind.config.js)
- ✅ Compilado e minificado no build
- ✅ **Este arquivo VAI para o Roll20 (compilado)**

**Estrutura**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ====================================
   ESTILOS CUSTOMIZADOS PARA ROLL20
   ==================================== */

.sheet-character-sheet {
    /* Seus estilos */
}

/* Botões de rolagem */
.sheet-character-sheet button[type="roll"] {
    /* Estilos para botões */
}
```

**Quando editar**:
- Para adicionar estilos customizados
- Para modificar aparência global
- Para criar animações
- Para ajustar cores e tipografia

---

## 🔄 Fluxo de Desenvolvimento

### 1. Modo Desenvolvimento (`npm run dev`)

```
Você edita:
  src/sheet.html
  src/sheet.css

↓ Automaticamente ↓

Build gera:
  dist/index.html  (wrapper com iframe)
  dist/sheet.html  (cópia do componente)
  dist/sheet.css   (CSS compilado)
  dist/preview.css (CSS não-minificado)

↓ Browser abre ↓

http://localhost:8080
(mostra dist/index.html que inclui sheet.html)

↓ Live Reload ↓

Mudanças aparecem automaticamente!
```

**Como funciona**:
1. `npm run dev:css` - Watch no Tailwind (compila src/sheet.css → dist/preview.css)
2. `npm run dev:html` - Watch no HTML (copia src/*.html → dist/)
3. `npm run dev:serve` - Live Server (serve dist/ na porta 8080)

### 2. Build para Roll20 (`npm run build`)

```
Você executa:
  npm run build

↓ Build processa ↓

1. Compila CSS:
   src/sheet.css → dist/sheet-compiled.css (minificado)

2. Processa HTML:
   - Lê src/sheet.html
   - Remove tags <link>
   - Salva em dist/sheet.html

3. Gera CSS final:
   dist/sheet-compiled.css → dist/sheet.css

↓ Resultado ↓

dist/sheet.html → Copiar para Roll20 (HTML Layout)
dist/sheet.css  → Copiar para Roll20 (CSS Styling)
```

---

## 🎯 Convenções Roll20

### Nomes de Atributos
```html
<!-- Padrão: attr_nome -->
<input type="text" name="attr_character_name" />
<input type="number" name="attr_strength" />
<input type="number" name="attr_hp" />
```

### Botões de Rolagem
```html
<!-- Usar button[type="roll"] -->
<button type="roll" value="/roll 1d20+@{strength_mod}">
    Rolar Força
</button>

<!-- Macros complexas -->
<button type="roll" value="/roll 1d20+@{athletics} para Atletismo">
    Teste de Atletismo
</button>
```

### Repeating Sections
```html
<!-- Fieldset com classe repeating_nome -->
<fieldset class="repeating_attacks">
    <input type="text" name="attr_attack_name" />
    <input type="text" name="attr_attack_damage" />
    <button type="roll" value="/roll 1d20+@{attack_bonus}">
        Atacar
    </button>
</fieldset>
```

### Classes CSS
```html
<!-- Usar prefixo sheet- para estilos customizados -->
<div class="sheet-header sheet-character-info">
    <!-- Conteúdo -->
</div>

<!-- Usar prefixo tw- para classes Tailwind -->
<div class="tw-bg-blue-500 tw-text-white tw-p-4 tw-rounded">
    <!-- Conteúdo -->
</div>

<!-- Combinar ambos -->
<div class="sheet-stats tw-grid tw-grid-cols-3 tw-gap-4">
    <!-- Conteúdo -->
</div>
```

---

## 📦 Arquivos de Configuração

### package.json
Define scripts e dependências:
- `tailwindcss` - Framework CSS
- `live-server` - Servidor de desenvolvimento
- `concurrently` - Rodar múltiplos comandos

### tailwind.config.js
Configuração do Tailwind:
```js
module.exports = {
  content: ["./src/**/*.html"],  // Onde procurar classes
  prefix: 'tw-',                 // Prefixo para evitar conflitos
  // ...
}
```

### build.js
Script customizado de build:
- Modo `build` - Gera arquivos para Roll20
- Modo `preview` - Copia arquivos para desenvolvimento
- Modo `watch` - Observa mudanças no HTML

---

## 🚀 Comandos Rápidos

```bash
# Desenvolvimento
npm run dev        # Inicia tudo (servidor + watch)
npm start          # Alias para npm run dev

# Build
npm run build      # Gera arquivos para Roll20

# Individuais
npm run dev:css    # Apenas watch CSS
npm run dev:html   # Apenas watch HTML
npm run dev:serve  # Apenas servidor
```

---

## ❓ FAQ

**P: Por que usar iframe no index.html?**
R: Para isolar o componente da ficha e simular melhor como ele ficará no Roll20.

**P: Posso editar dist/ diretamente?**
R: Não! Sempre edite src/. Os arquivos em dist/ são gerados automaticamente.

**P: Como adiciono uma nova página HTML?**
R: Não adicione. Roll20 usa apenas UM arquivo HTML (sheet.html).

**P: Preciso reiniciar o servidor após editar?**
R: Não! O live reload detecta mudanças automaticamente.

**P: As classes Tailwind funcionam no Roll20?**
R: Sim! Elas são compiladas para CSS puro no build.

**P: Posso usar JavaScript na ficha?**
R: No Roll20, use Sheet Workers (JavaScript específico do Roll20). Não incluído neste template.

---

## 📚 Próximos Passos

1. Leia [QUICK_START.md](QUICK_START.md) - Guia rápido
2. Veja [EXAMPLES.md](EXAMPLES.md) - Exemplos de código
3. Consulte [README.md](README.md) - Documentação completa
4. Acesse [Roll20 Wiki](https://wiki.roll20.net/Building_Character_Sheets) - Documentação oficial
