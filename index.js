//import { writeFile } from 'fs/promises';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import exports from 'webpack';




(() => {
    console.log('hello')
    const ffBrowser = createFFmpeg({ log: true });
})()
export default function runFF() {
    const ffBrowser = createFFmpeg({ log: true });
    return ffBrowser;

}
