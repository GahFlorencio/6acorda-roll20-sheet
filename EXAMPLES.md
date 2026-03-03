# 🎨 EXEMPLOS DE PERSONALIZAÇÃO

Este arquivo contém exemplos práticos de como personalizar sua ficha Roll20.

---

## 📝 ADICIONAR NOVO ATRIBUTO

### Exemplo: Campo de Experiência (XP)

```html
<div class="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-4">
    <label class="tw-block tw-text-sm tw-font-bold tw-mb-2">
        Pontos de Experiência
    </label>
    <input type="number" 
           name="attr_experience_points" 
           value="0" 
           class="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded" />
</div>
```

---

## 🎲 ADICIONAR TESTE DE RESISTÊNCIA

### Exemplo: Teste de Resistência de Força

```html
<div class="tw-flex tw-items-center tw-justify-between tw-bg-gray-50 tw-p-3 tw-rounded-lg">
    <label class="tw-font-semibold">Resistência de Força</label>
    <input type="number" 
           name="attr_strength_save" 
           value="0" 
           class="tw-w-12 tw-text-center tw-border tw-border-gray-300 tw-rounded" />
    <button type="roll" 
            value="/roll 1d20+@{strength_save}" 
            class="tw-bg-red-500 tw-text-white tw-px-3 tw-py-1 tw-rounded hover:tw-bg-red-600">
        Rolar
    </button>
</div>
```

---

## ➕ ADICIONAR NOVA SEÇÃO: MAGIAS

### Exemplo: Lista de Magias Conhecidas

```html
<div class="sheet-spells tw-bg-white tw-p-6 tw-shadow-md tw-mt-4">
    <h2 class="tw-text-2xl tw-font-bold tw-mb-4 tw-text-purple-800">Magias</h2>
    
    <!-- Slots de Magia -->
    <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-mb-6">
        <div class="tw-bg-purple-50 tw-p-3 tw-rounded-lg tw-text-center">
            <label class="tw-block tw-text-sm tw-font-bold tw-mb-2">Nível 1</label>
            <div class="tw-flex tw-items-center tw-justify-center tw-gap-2">
                <input type="number" name="attr_spell_slots_1" value="0" 
                       class="tw-w-12 tw-text-center tw-border tw-border-purple-300 tw-rounded" />
                <span>/</span>
                <input type="number" name="attr_spell_slots_1_max" value="0" 
                       class="tw-w-12 tw-text-center tw-border tw-border-purple-300 tw-rounded" />
            </div>
        </div>
        <!-- Repita para outros níveis -->
    </div>
    
    <!-- Lista de Magias -->
    <fieldset class="repeating_spells">
        <div class="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-border tw-border-gray-200 tw-mb-2">
            <div class="tw-grid tw-grid-cols-4 tw-gap-3">
                <div class="tw-col-span-2">
                    <label class="tw-text-xs tw-text-gray-600">Nome da Magia</label>
                    <input type="text" name="attr_spell_name" 
                           class="tw-w-full tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded" />
                </div>
                <div>
                    <label class="tw-text-xs tw-text-gray-600">Nível</label>
                    <input type="number" name="attr_spell_level" value="1" 
                           class="tw-w-full tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded" />
                </div>
                <div>
                    <label class="tw-text-xs tw-text-gray-600">CD</label>
                    <input type="number" name="attr_spell_dc" value="10" 
                           class="tw-w-full tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded" />
                </div>
            </div>
            <textarea name="attr_spell_description" 
                      placeholder="Descrição da magia..."
                      class="tw-w-full tw-mt-2 tw-px-2 tw-py-1 tw-border tw-border-gray-300 tw-rounded tw-text-sm">
            </textarea>
        </div>
    </fieldset>
</div>
```

---

## 🎒 ADICIONAR INVENTÁRIO COM PESO

### Exemplo: Sistema de Inventário

```html
<div class="sheet-inventory tw-bg-white tw-p-6 tw-shadow-md tw-mt-4">
    <h2 class="tw-text-2xl tw-font-bold tw-mb-4 tw-text-gray-800">Inventário</h2>
    
    <!-- Capacidade de Carga -->
    <div class="tw-bg-yellow-50 tw-p-3 tw-rounded-lg tw-mb-4 tw-text-center">
        <label class="tw-font-bold tw-text-yellow-700">Carga Transportada</label>
        <div class="tw-text-2xl tw-font-bold tw-mt-2">
            <span name="attr_total_weight">0</span> / 
            <span name="attr_carry_capacity">150</span> kg
        </div>
    </div>
    
    <!-- Lista de Itens -->
    <fieldset class="repeating_inventory">
        <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-bg-gray-50 tw-p-2 tw-rounded tw-mb-2">
            <div class="tw-col-span-2">
                <input type="text" name="attr_item_name" placeholder="Item"
                       class="tw-w-full tw-px-2 tw-py-1 tw-border tw-rounded tw-text-sm" />
            </div>
            <div>
                <input type="number" name="attr_item_quantity" value="1"
                       class="tw-w-full tw-px-2 tw-py-1 tw-border tw-rounded tw-text-sm" />
            </div>
            <div>
                <input type="number" name="attr_item_weight" value="0" step="0.1"
                       class="tw-w-full tw-px-2 tw-py-1 tw-border tw-rounded tw-text-sm" />
            </div>
            <div>
                <input type="text" name="attr_item_cost" placeholder="10po"
                       class="tw-w-full tw-px-2 tw-py-1 tw-border tw-rounded tw-text-sm" />
            </div>
        </div>
    </fieldset>
</div>
```

---

## 💰 ADICIONAR SISTEMA DE MOEDAS

### Exemplo: Riqueza do Personagem

```html
<div class="sheet-currency tw-bg-gradient-to-r tw-from-yellow-100 tw-to-yellow-50 tw-p-4 tw-rounded-lg tw-shadow-md">
    <h3 class="tw-text-lg tw-font-bold tw-mb-3 tw-text-yellow-800">Riqueza</h3>
    <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-text-center">
        <div>
            <label class="tw-text-xs tw-font-semibold tw-text-yellow-700">PP</label>
            <input type="number" name="attr_pp" value="0" 
                   class="tw-w-full tw-text-center tw-bg-white tw-border-2 tw-border-yellow-300 tw-rounded" />
        </div>
        <div>
            <label class="tw-text-xs tw-font-semibold tw-text-yellow-600">PO</label>
            <input type="number" name="attr_po" value="0" 
                   class="tw-w-full tw-text-center tw-bg-white tw-border-2 tw-border-yellow-400 tw-rounded" />
        </div>
        <div>
            <label class="tw-text-xs tw-font-semibold tw-text-gray-400">PE</label>
            <input type="number" name="attr_pe" value="0" 
                   class="tw-w-full tw-text-center tw-bg-white tw-border-2 tw-border-gray-300 tw-rounded" />
        </div>
        <div>
            <label class="tw-text-xs tw-font-semibold tw-text-gray-500">PP</label>
            <input type="number" name="attr_ps" value="0" 
                   class="tw-w-full tw-text-center tw-bg-white tw-border-2 tw-border-gray-400 tw-rounded" />
        </div>
        <div>
            <label class="tw-text-xs tw-font-semibold tw-text-orange-600">PC</label>
            <input type="number" name="attr_pc" value="0" 
                   class="tw-w-full tw-text-center tw-bg-white tw-border-2 tw-border-orange-300 tw-rounded" />
        </div>
    </div>
</div>
```

---

## 🎯 ADICIONAR CONTADOR RÁPIDO

### Exemplo: Contador de Usos (Ki, Fúria, etc.)

```html
<div class="tw-bg-indigo-50 tw-border-2 tw-border-indigo-300 tw-rounded-lg tw-p-4">
    <h4 class="tw-font-bold tw-text-indigo-700 tw-mb-2">Pontos de Ki</h4>
    <div class="tw-flex tw-items-center tw-justify-center tw-gap-2">
        <input type="number" name="attr_ki_points" value="0" 
               class="tw-w-16 tw-text-center tw-text-2xl tw-font-bold tw-border-2 tw-border-indigo-400 tw-rounded" />
        <span class="tw-text-2xl">/</span>
        <input type="number" name="attr_ki_points_max" value="0" 
               class="tw-w-16 tw-text-center tw-text-2xl tw-font-bold tw-border-2 tw-border-gray-300 tw-rounded" />
    </div>
</div>
```

---

## 🎨 CUSTOMIZAR CORES E ESTILOS

### Paleta de Cores Personalizada

Adicione no `src/sheet.css`:

```css
/* Tema Personalizado */
:root {
    --cor-primaria: #8b5cf6;
    --cor-secundaria: #10b981;
    --cor-destaque: #f59e0b;
    --cor-perigo: #ef4444;
}

.sheet-header {
    background: linear-gradient(135deg, var(--cor-primaria), var(--cor-secundaria));
}

.sheet-custom-button {
    background-color: var(--cor-destaque);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    transition: all 0.2s;
}

.sheet-custom-button:hover {
    background-color: var(--cor-primaria);
    transform: scale(1.05);
}
```

---

## 📊 ADICIONAR BARRA DE PROGRESSO

### Exemplo: Barra de HP Visual

```html
<div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-6 tw-mb-2">
    <div class="tw-bg-red-600 tw-h-6 tw-rounded-full tw-transition-all" 
         style="width: calc(@{hp} / @{hp_max} * 100%)">
        <span class="tw-text-white tw-text-xs tw-font-bold tw-px-2">
            <span name="attr_hp"></span>/<span name="attr_hp_max"></span>
        </span>
    </div>
</div>
```

---

## 🔄 ADICIONAR SCRIPT DE CÁLCULO AUTOMÁTICO

### Exemplo: Worker Script (adicionar no Roll20)

```javascript
// Calcular modificador de atributo automaticamente
on("change:strength", function() {
    getAttrs(["strength"], function(values) {
        var str = parseInt(values.strength) || 10;
        var mod = Math.floor((str - 10) / 2);
        setAttrs({
            strength_mod: mod
        });
    });
});
```

**Nota**: Worker scripts são adicionados na aba "JavaScript" do Character Sheet Editor no Roll20.

---

## 📚 RECURSOS ÚTEIS

- **Classes Tailwind**: https://tailwindcss.com/docs
- **Documentação Roll20**: https://wiki.roll20.net/Building_Character_Sheets
- **Dice Rolling**: https://wiki.roll20.net/Dice_Reference
- **Repeating Sections**: https://wiki.roll20.net/Button#Repeating_Buttons

---

**Dica**: Sempre teste suas modificações no Roll20 após fazer o build!
