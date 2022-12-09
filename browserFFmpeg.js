import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

(async () => {
  await ffmpeg.load();
  // Replace write file with DOM API
  ffmpeg.FS('writeFile', 'test.avi', await fetchFile('./test.avi'));
  await ffmpeg.run('-i', 'test.avi', 'test.mp4');
    // Replace write file with DOM API
  await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));

  
})();