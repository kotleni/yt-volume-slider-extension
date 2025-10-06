## Youtube Custom Volume Slider
This extension replaces original youtube video volume slider with custom one that better and bigger.<br>
[[Download]](https://github.com/kotleni/yt-volume-slider-extension/releases)
[[Report bug]](https://github.com/kotleni/yt-volume-slider-extension/issues)

<img width=400 src="https://github.com/kotleni/yt-volume-slider-extension/blob/master/showcase.png?raw=true">

### Suported browsers
| Browser | Support |
|---------|---------|
| Firefox | ✅       |
| Chrome  | ❔       |
| Edge    | ❔       |
| Safari  | ❌       | 

❔ - Not tested<br>
❌ - Not supported<br>
✅ - Supported<br>

## Installation

### Chrome/Chromium/Edge
1. Download the latest `.zip` release from the [Releases page](https://github.com/kotleni/yt-volume-slider-extension/releases).
2. Unzip the downloaded file.
3. Open Chrome/Chromium/Edge and navigate to `chrome://extensions` (or `edge://extensions`).
4. Enable "Developer mode" in the top right corner.
5. Click "Load unpacked" and select the unzipped extension folder.

### Firefox
[//]: # (1. Download extension from Firefox Addons [here]&#40;https://addons.mozilla.org/en-US/firefox/addon/yt-volume-slider-extension/&#41;.)

[//]: # (2. Or download the latest `.xpi` release from the [Releases page]&#40;https://github.com/kotleni/yt-volume-slider-extension/releases&#41;.)

[//]: # (3. Open Firefox and navigate to `about:addons`.)

[//]: # (4. Click the gear icon &#40;⚙️&#41; and select "Install Add-on From File...".)

[//]: # (5. Select the downloaded `.xpi` file.)

### Building by youself
1. Clone this repository `$ git clone https://github.com/kotleni/yt-volume-slider-extension`
2. Install pnpm globally `# npm i -g pnpm`
3. Install dependencies `$ pnpm i`
5. Build & pack the extension `$ pnpm run pack:firefox` (for firefox) and `$ pnpm run pack:chrome` (for chrome)

Now you can see `dist` folder with unpacked extension and `builds` folder with unsigned packed extensions.

## License
This project is licensed under the GPL-2.0 License - see the [LICENSE](LICENSE) file for details.