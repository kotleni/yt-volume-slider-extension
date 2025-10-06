import type {Manifest} from 'web-extension-manifest';

type Browser = 'chrome' | 'firefox';

const createBaseManifest = (): Manifest => {
    return {
        manifest_version: 3,
        name: 'Youtube Volume Ctl',
        // version: pkg.version,
        version: '0.0.1',
        description:
            'Better and bigger custom youtube volume silder extension.',
        icons: {
            '48': 'icon48.png',
        },
        // permissions: [],
        // host_permissions: ['<all_urls>'],
        // action: {
        //     default_icon: 'icon48.png',
        //     default_title: 'xx',
        //     default_popup: 'src/popup/popup.html',
        // },
        content_scripts: [
            {
                matches: ['*://*.youtube.com/watch*'],
                css: ['assets/styles.css'],
                js: ['content.js'],
            },
        ],
        web_accessible_resources: [
            {
                resources: ['content.js'],
                matches: ['*://*.youtube.com/watch*'],
            },
        ],
    };
};

export function getManifest(browser: Browser): Manifest {
    const baseManifest = createBaseManifest();

    // If firefox
    if (browser === 'firefox') {
        return {
            ...baseManifest,
            // background: {
            //     scripts: ['background.js'],
            //     type: 'module',
            // },
            browser_specific_settings: {
                gecko: {
                    id: 'ytvolctl@kotleni',
                },
            },
        };
    }

    // Otherwise, default to Chrome's manifest
    return {
        ...baseManifest,
        // background: {
        //     service_worker: 'background.js',
        //     type: 'module',
        // },
    };
}