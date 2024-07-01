import { readdirSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';

import sharp from 'sharp';

export default function ImageMinifierPlugin(configArr = []) {
    configArr = (configArr?.constructor?.name == 'Array' ? configArr : [configArr]).filter(el => el);
    const finalFiles = [];

    return {
        name: 'Image-Minifier-Plugin',

        buildStart() {
            for (let config of configArr) {
                const {
                    inputPath = './src/assets/images',
                    outputPath = './dist/deli-website/assets/images',
                    test = /.*\.(gif|png|jpg|jpeg)$/i,
                    recursive = false,
                    options = {}
                } = config;

                rmSync(outputPath, { recursive: true, force: true });

                if (inputPath.match(test)) {
                    finalFiles.push({
                        buffer: sharp(resolve(inputPath))
                            .resize(null, null, options),
                        outputFilePath: outputPath
                    });
                }
                else {
                    readdirSync(inputPath, { recursive })
                        .filter(file => file.match(test))
                        .forEach(image => {
                            const outputFilePath = resolve(outputPath, image);

                            finalFiles.push({
                                buffer: sharp(resolve(inputPath, image))
                                    .resize(null, null, options),
                                outputFilePath
                            });
                        });
                }
            }
        },

        closeBundle() {
            finalFiles.forEach(({ buffer, outputFilePath }) => {
                mkdirSync(dirname(outputFilePath), { recursive: true });
                buffer.toFile(outputFilePath);
            });
        }
    }
}