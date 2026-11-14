import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

export class VisualComparison {

    static compare(
        baselinePath: string,
        actualPath: string,
        diffPath: string,
        threshold = 0.1
    ): boolean {

        const baseline = PNG.sync.read(
            fs.readFileSync(baselinePath)
        );

        const actual = PNG.sync.read(
            fs.readFileSync(actualPath)
        );

        const diff = new PNG({
            width: baseline.width,
            height: baseline.height
        });

        const mismatchedPixels =
            pixelmatch(
                baseline.data,
                actual.data,
                diff.data,
                baseline.width,
                baseline.height,
                { threshold }
            );

        if (mismatchedPixels > 0) {

            const diffDirectory = path.dirname(diffPath);

            if (!fs.existsSync(diffDirectory)) {

                fs.mkdirSync(
                    diffDirectory,
                    { recursive: true }
                );
            }

            fs.writeFileSync(
                diffPath,
                PNG.sync.write(diff)
            );

            return false;
        }

        return true;
    }
}