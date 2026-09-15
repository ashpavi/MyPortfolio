import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const jobs = [
  { input: "images/1.png", output: "images/1.webp", width: 1200, quality: 78 },
  { input: "images/2.png", output: "images/2.webp", width: 1200, quality: 78 },
  { input: "images/3.png", output: "images/3.webp", width: 1200, quality: 78 },
  { input: "images/4.png", output: "images/4.webp", width: 1200, quality: 78 },
  { input: "images/5.png", output: "images/5.webp", width: 1200, quality: 78 },
  { input: "images/profile.jpg", output: "images/profile.webp", width: 480, quality: 80 },
  { input: "images/logo1.png", output: "images/logo1.webp", width: 256, quality: 82 },
];

await mkdir(path.join(publicDir, "images"), { recursive: true });

for (const job of jobs) {
  const inputPath = path.join(publicDir, job.input);
  const outputPath = path.join(publicDir, job.output);

  await sharp(inputPath)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(outputPath);

  const inMeta = await sharp(inputPath).metadata();
  const outMeta = await sharp(outputPath).metadata();
  console.log(
    `${job.input} -> ${job.output} (${Math.round((inMeta.size || 0) / 1024)}KB -> ${Math.round((outMeta.size || 0) / 1024)}KB)`
  );
}
