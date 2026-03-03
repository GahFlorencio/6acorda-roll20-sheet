# Troubleshooting - Desenvolvimento

## Problema: Alterações não aparecem no modo dev

### Causa
Quando você altera classes CSS ou HTML, o sistema de build precisa recompilar os arquivos. Se as alterações não aparecem, pode ser por:

1. **Cache do navegador** - O navegador mantém versões antigas dos arquivos em cache
2. **Processos dev não sincronizados** - Os watchers de CSS e HTML podem não estar atualizados
3. **Build desatualizado** - A pasta `dist` pode conter arquivos antigos

### Solução Passo a Passo

#### 1. Pare todos os processos dev em execução
- Pressione `Ctrl+C` no terminal onde o dev está rodando
- Verifique se não há múltiplos processos rodando

#### 2. Faça um rebuild completo
```bash
npm run build
```

#### 3. Inicie o modo dev novamente
```bash
npm run dev
```

#### 4. Force refresh no navegador
- **Ctrl+Shift+R** (Windows/Linux)
- **Cmd+Shift+R** (Mac)
- Ou abra o DevTools (F12) → Network → Marque "Disable cache"

### Comandos Úteis

#### Build completo (produção)
```bash
npm run build
```

#### Desenvolvimento com watch
```bash
npm run dev
```

#### Build apenas do CSS
```bash
npm run build:css
```

#### Build apenas do HTML
```bash
npm run build:html
```

### Fluxo de Desenvolvimento

1. **Edite os arquivos** em `src/`
   - `src/sheet.css` - Estilos CSS customizados
   - `src/sheet.html` - HTML da ficha
   - `src/index.html` - Página de preview

2. **O sistema compila** automaticamente:
   - Tailwind compila `src/sheet.css` → `dist/preview.css`
   - Build.js processa includes e copia para `dist/`
   - Live-server recarrega o navegador

3. **Verifique em** `http://localhost:8080`

### Melhorias Aplicadas

✅ **Debounce nos watchers** - Evita recompilações múltiplas
✅ **Build inicial no dev** - Garante que os arquivos estejam atualizados
✅ **Logs melhorados** - Melhor feedback do que está acontecendo
✅ **No-browser flag** - Não abre navegador automaticamente (evita múltiplas abas)

### Notas Importantes

- **Classes CSS customizadas**: O aviso do Tailwind sobre "No utility classes" é normal se você está usando apenas classes CSS customizadas (como as classes com prefixo `sheet-`)
- **Porta 8080**: O dev server roda na porta 8080. Se já estiver em uso, mude em `package.json`
- **Windows**: Se tiver problemas com o comando `rm -rf`, substitua por `rmdir /s /q dist && mkdir dist` no script `clean`
