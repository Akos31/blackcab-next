/**
 * Generates optimized favicons from the source logo image.
 * Usage: node scripts/generate-favicons.mjs <source-image>
 *
 * Outputs:
 *   - src/app/icon.png          (32x32, for general favicon)
 *   - src/app/apple-icon.png    (180x180, for Apple touch icon)
 *   - public/images/logo.png    (copy of source for reuse)
 */
import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/generate-favicons.mjs <source-image>");
  process.exit(1);
}

const source = resolve(src);

// 32×32 PNG favicon → src/app/icon.png (Next.js auto-detects this)
await sharp(source)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(resolve(root, "src/app/icon.png"));
console.log("✓ src/app/icon.png (32×32)");

// 180×180 Apple touch icon → src/app/apple-icon.png
await sharp(source)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(resolve(root, "src/app/apple-icon.png"));
console.log("✓ src/app/apple-icon.png (180×180)");

// 192×192 for PWA / Android
await sharp(source)
  .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(resolve(root, "public/icon-192.png"));
console.log("✓ public/icon-192.png (192×192)");

// 512×512 for PWA / Android
await sharp(source)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(resolve(root, "public/icon-512.png"));
console.log("✓ public/icon-512.png (512×512)");

// Also save the full logo to public/images/
await sharp(source)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 90 })
  .toFile(resolve(root, "public/images/logo.png"));
console.log("✓ public/images/logo.png (512×512)");

console.log("\nDone! Remove the old favicon.ico from src/app/ if it exists.");
