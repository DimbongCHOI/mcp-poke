import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outputDir = join(__dirname, '../public/icons');

// 디렉토리 생성
mkdirSync(outputDir, { recursive: true });

// 포켓볼 SVG 생성
function createPokeballSVG(size) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35;
  const buttonRadius = radius * 0.3;
  const innerButtonRadius = radius * 0.15;
  const strokeWidth = size * 0.04;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- 배경 -->
  <rect width="${size}" height="${size}" fill="#ffffff"/>
  
  <!-- 하단 흰색 반원 -->
  <path d="M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 0 ${centerX + radius} ${centerY} Z" fill="#ffffff"/>
  
  <!-- 상단 빨간색 반원 -->
  <path d="M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY} Z" fill="#ef4444"/>
  
  <!-- 외곽 테두리 -->
  <circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="none" stroke="#1f2937" stroke-width="${strokeWidth}"/>
  
  <!-- 중앙 가로선 -->
  <line x1="${centerX - radius}" y1="${centerY}" x2="${centerX + radius}" y2="${centerY}" stroke="#1f2937" stroke-width="${strokeWidth}"/>
  
  <!-- 중앙 버튼 외곽 -->
  <circle cx="${centerX}" cy="${centerY}" r="${buttonRadius}" fill="#ffffff" stroke="#1f2937" stroke-width="${strokeWidth}"/>
  
  <!-- 중앙 버튼 내부 -->
  <circle cx="${centerX}" cy="${centerY}" r="${innerButtonRadius}" fill="#ffffff" stroke="#9ca3af" stroke-width="${strokeWidth / 2}"/>
</svg>`;
}

console.log('🎨 PWA 아이콘 생성 중...\n');

sizes.forEach(size => {
  const svg = createPokeballSVG(size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = join(outputDir, filename);
  
  writeFileSync(filepath, svg);
  console.log(`✅ ${filename} 생성 완료`);
});

console.log('\n🎉 모든 PWA 아이콘(SVG)이 생성되었습니다!');
console.log(`📁 저장 위치: ${outputDir}`);
console.log('\n💡 브라우저가 SVG 아이콘을 지원합니다.');
console.log('   PNG가 필요한 경우 scripts/generate-icons.html을 열어 변환하세요.\n');


