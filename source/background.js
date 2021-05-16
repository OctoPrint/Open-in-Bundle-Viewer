const browser = window.browser
browser.contextMenus.create({
  id: 'open-in-bundle-viewer',
  title: 'Open in Bundle Viewer',
  contexts: ['link'],
  documentUrlPatterns: [
    '*://community.octoprint.org/*',
    '*://github.com/*'
  ]
})
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'open-in-bundle-viewer') {
    browser.tabs.query({ active: true, windowId: browser.windows.WINDOW_ID_CURRENT })
      .then(tabs => browser.tabs.get(tabs[0].id))
      .then(currentTab => {
        const url = 'https://bundleviewer.octoprint.org/?url=' + encodeURIComponent(info.linkUrl)
        browser.tabs.create({
          active: true,
          index: currentTab.index + 1,
          url: url
        })
      })
  }
})
