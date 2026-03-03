const fs = require('fs');
const path = require('path');

// Criar pasta dist se não existir
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

const srcDir = './src';
const distDir = './dist';
const mode = process.argv[2] || 'build'; // 'build', 'preview' ou 'watch'

// Função para processar includes no HTML
function processIncludes(content, baseDir) {
  const includeRegex = /<!--\s*INCLUDE:\s*([^\s]+)\s*-->/g;
  return content.replace(includeRegex, (match, filename) => {
    const includePath = path.join(baseDir, filename);
    if (fs.existsSync(includePath)) {
      console.log(`  ↳ Incluindo: ${filename}`);
      return fs.readFileSync(includePath, 'utf8');
    }
    console.warn(`  ⚠ Arquivo não encontrado: ${filename}`);
    return match;
  });
}

// Função para copiar pasta recursivamente
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Função principal - processa index.html (com include do sheet.html) e sheet.css
function buildPreview() {
  // Processar index.html com includes
  const indexPath = path.join(srcDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    indexContent = processIncludes(indexContent, srcDir);
    fs.writeFileSync(path.join(distDir, 'index.html'), indexContent);
    console.log('✓ index.html processado');
  }
  
  // Copiar sheet.css compilado e adicionar import de fonte
  const cssPreview = path.join(distDir, 'preview.css');
  if (fs.existsSync(cssPreview)) {
    let cssContent = fs.readFileSync(cssPreview, 'utf8');
    
    // Adicionar import de fonte no início se não estiver presente
    const fontImport = "@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');\n\n";
    if (!cssContent.includes('@import')) {
      cssContent = fontImport + cssContent;
    }
    
    fs.writeFileSync(path.join(distDir, 'sheet.css'), cssContent);
    console.log('✓ sheet.css atualizado (com fonte)');
  } else {
    console.warn('⚠ preview.css não encontrado. Execute primeiro: npm run build:css');
  }
  
  // Copiar pasta de imagens
  const imagesPath = path.join(srcDir, 'images');
  if (fs.existsSync(imagesPath)) {
    copyDirectory(imagesPath, path.join(distDir, 'images'));
    console.log('✓ Imagens copiadas');
  }
}

// Modo watch - observar mudanças
function watchMode() {
  console.log('👀 Observando mudanças...\n');
  
  buildPreview();
  
  let htmlTimeout;
  let cssTimeout;
  
  // Observar mudanças no src com debounce
  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.html')) {
      clearTimeout(htmlTimeout);
      htmlTimeout = setTimeout(() => {
        console.log(`\n🔄 Detectada mudança em ${filename}...`);
        buildPreview();
        console.log('✓ Build HTML concluído\n');
      }, 100);
    }
  });
  
  // Observar mudanças no preview.css (compilado pelo Tailwind) com debounce
  const cssPreviewPath = path.join(distDir, 'preview.css');
  if (fs.existsSync(cssPreviewPath)) {
    fs.watch(cssPreviewPath, (eventType) => {
      if (eventType === 'change') {
        clearTimeout(cssTimeout);
        cssTimeout = setTimeout(() => {
          console.log('\n🔄 CSS recompilado, atualizando sheet.css...');
          let cssContent = fs.readFileSync(cssPreviewPath, 'utf8');
          
          // Adicionar import de fonte no início se não estiver presente
          const fontImport = "@import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');\n\n";
          if (!cssContent.includes('@import')) {
            cssContent = fontImport + cssContent;
          }
          
          fs.writeFileSync(path.join(distDir, 'sheet.css'), cssContent);
          console.log('✓ sheet.css atualizado (com fonte)\n');
        }, 100);
      }
    });
  }
}

// Executar
if (mode === 'watch') {
  watchMode();
} else {
  buildPreview();
  console.log('\n✅ Build concluído!');
}
