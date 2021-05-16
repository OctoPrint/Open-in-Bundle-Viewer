## OctoPrint Open In Bundle Viewer

This is a simple browser extension that adds an entry to the context menu to open a file using https://bundleviewer.octoprint.org

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pjjocccheogfceldegkfnbfmobmblhpp?style=for-the-badge)
![Mozilla Add-on](https://img.shields.io/amo/v/open-in-bundle-viewer?style=for-the-badge)

![screenshot](https://github.com/OctoPrint/Open-in-Bundle-Viewer/blob/master/media/screenshot.png)

You can add it to Chrome from the [Chrome Web Store](https://chrome.google.com/webstore/detail/open-in-bundle-viewer/pjjocccheogfceldegkfnbfmobmblhpp). This also allows you to install it in the new Microsoft Edge.

You can add it to Firefox from the [Firefox add-on store](https://addons.mozilla.org/en-GB/firefox/addon/open-in-bundle-viewer/).

## Development

### Running in watch mode

```
npm install
npm run watch
```
This will output to the `distribution` folder, point the browser there for an 'unpacked' extension.

### Building a new release

```
npm install
npm run build
```

Zip the distribution folder and upload to the stores. Firefox also needs the source zip, which can be found on Github.

## Changelog

#### 1.2.0
* Remove unused template code
* Add ESLint configuration & run
* Upgrade all dependencies (avoiding security issues)
* Enable Dependabot regular updates

#### 1.1.0
* Tab opens alongside current, contributed by [@foosel](https://github.com/foosel) ([#1](https://github.com/OctoPrint/Open-in-Bundle-Viewer/pull/1))

#### 1.0.0
* Extension released

## License
Please see [LICENSE](https://github.com/OctoPrint/Open-in-Bundle-Viewer/blob/master/LICENSE) for license information.

Originally based on [browser-extension-template](https://github.com/fregante/browser-extension-template).
