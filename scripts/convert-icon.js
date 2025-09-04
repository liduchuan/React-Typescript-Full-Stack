const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToIcons() {
  const svgPath = path.join(__dirname, '../assets/logo.svg');
  const outputDir = path.join(__dirname, '../app/client/build');

  if (!fs.existsSync(svgPath)) {
    console.error('SVG file not found:', svgPath);
    return;
  }

  try {
    // 读取 SVG 文件
    const svgBuffer = fs.readFileSync(svgPath);

    // 生成 PNG 图标 (多种尺寸)
    const sizes = [16, 32, 64, 128, 256, 512, 1024];

    // 生成最大尺寸的 PNG (用于后续转换)
    await sharp(svgBuffer)
      .resize(1024, 1024)
      .png()
      .toFile(path.join(outputDir, 'icon.png'));

    console.log('Generated icon.png');

    // 对于 macOS .icns 和 Windows .ico，我们需要使用系统工具
    console.log('Main PNG icon generated. For .icns and .ico formats, you may need additional tools.');
    console.log('You can use online converters or install iconutil (macOS) and convert (ImageMagick) for full conversion.');

  } catch (error) {
    console.error('Error converting icon:', error);
  }
}

convertSvgToIcons();
