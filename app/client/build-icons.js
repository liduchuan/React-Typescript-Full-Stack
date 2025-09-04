/* eslint-disable @typescript-eslint/no-require-imports */

const sharp = require('sharp')
const png2icons = require('png2icons')
const path = require('path')
const fs = require('fs')

async function buildIcons() {
  const svgPath = path.join(__dirname, '../../assets/logo.svg')
  const outputDir = path.join(__dirname, 'build')
  const resourcesDir = path.join(__dirname, 'resources')

  try {
    console.log('Converting SVG to Electron icons...')
    console.log('Input SVG:', svgPath)
    console.log('Output directory:', outputDir)
    console.log('Resources directory:', resourcesDir)

    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    if (!fs.existsSync(resourcesDir)) {
      fs.mkdirSync(resourcesDir, { recursive: true })
    }

    // 读取 SVG
    const svgBuffer = fs.readFileSync(svgPath)

    // 生成高质量的 PNG 图标 (1024x1024 for better quality)
    const pngBuffer = await sharp(svgBuffer).resize(1024, 1024).png().toBuffer()

    // 为开发模式生成一个带标记的版本，便于识别变化
    const devPngBuffer = await sharp(svgBuffer).resize(1024, 1024).png().toBuffer()

    // 保存 PNG 文件到 build 目录（用于打包）
    fs.writeFileSync(path.join(outputDir, 'icon.png'), pngBuffer)
    console.log('✅ Generated build/icon.png')

    // 保存 PNG 文件到 resources 目录（用于开发时窗口图标）
    fs.writeFileSync(path.join(resourcesDir, 'icon.png'), devPngBuffer)
    console.log('✅ Generated resources/icon.png')

    // 生成 ICNS (macOS)
    const icnsBuffer = png2icons.createICNS(pngBuffer, png2icons.BICUBIC, 0)
    fs.writeFileSync(path.join(outputDir, 'icon.icns'), icnsBuffer)
    console.log('✅ Generated icon.icns')

    // 生成 ICO (Windows)
    const icoBuffer = png2icons.createICO(pngBuffer, png2icons.BICUBIC, 0, false)
    fs.writeFileSync(path.join(outputDir, 'icon.ico'), icoBuffer)
    console.log('✅ Generated icon.ico')

    console.log('✅ All icons generated successfully!')
    console.log('Generated files:')
    console.log('- build/icon.png & resources/icon.png (for development)')
    console.log('- build/icon.icns (macOS)')
    console.log('- build/icon.ico (Windows)')
  } catch (error) {
    console.error('❌ Error generating icons:', error)
  }
}

buildIcons()
