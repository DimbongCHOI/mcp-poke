import sharp from 'sharp';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsDir = join(__dirname, '../public/icons');

console.log('🔄 SVG를 PNG로 변환 중...\n');

const svgFiles = readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

for (const svgFile of svgFiles) {
  const svgPath = join(iconsDir, svgFile);
  const pngFile = svgFile.replace('.svg', '.png');
  const pngPath = join(iconsDir, pngFile);
  
  try {
    const svgBuffer = readFileSync(svgPath);
    
    await sharp(svgBuffer)
      .png()
      .toFile(pngPath);
    
    console.log(`✅ ${pngFile} 생성 완료`);
  } catch (error) {
    console.error(`❌ ${svgFile} 변환 실패:`, error.message);
  }
}

console.log('\n🎉 모든 PNG 아이콘이 생성되었습니다!\n');


