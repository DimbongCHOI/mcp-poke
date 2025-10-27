import { createCanvas } from 'canvas';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outputDir = join(__dirname, '../public/icons');

// 디렉토리 생성
try {
  mkdirSync(outputDir, { recursive: true });
} catch (err) {
  // 디렉토리가 이미 존재하는 경우 무시
}

function drawPokeball(ctx, size) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.35;
  
  // 배경 (흰색)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  
  // 상단 빨간색 반원
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, Math.PI, 0, false);
  ctx.fillStyle = '#ef4444';
  ctx.fill();
  
  // 하단 흰색 반원
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI, false);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  
  // 검은 테두리
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = '#1f2937';
  ctx.lineWidth = size * 0.04;
  ctx.stroke();
  
  // 중앙 가로선
  ctx.beginPath();
  ctx.moveTo(centerX - radius, centerY);
  ctx.lineTo(centerX + radius, centerY);
  ctx.strokeStyle = '#1f2937';
  ctx.lineWidth = size * 0.04;
  ctx.stroke();
  
  // 중앙 원 (외곽)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#1f2937';
  ctx.lineWidth = size * 0.04;
  ctx.stroke();
  
  // 중앙 원 (내부)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#9ca3af';
  ctx.lineWidth = size * 0.02;
  ctx.stroke();
}

console.log('🎨 PWA 아이콘 생성 중...\n');

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  drawPokeball(ctx, size);
  
  const buffer = canvas.toBuffer('image/png');
  const filename = `icon-${size}x${size}.png`;
  const filepath = join(outputDir, filename);
  
  writeFileSync(filepath, buffer);
  console.log(`✅ ${filename} 생성 완료`);
});

console.log('\n🎉 모든 PWA 아이콘이 생성되었습니다!');
console.log(`📁 저장 위치: ${outputDir}\n`);


