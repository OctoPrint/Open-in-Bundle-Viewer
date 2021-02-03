browser.contextMenus.create({
	id: "open-in-bundle-viewer",
	title: "Open in Bundle Viewer",
	contexts: ["link"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "open-in-bundle-viewer") {
		const url = "https://bundleviewer.octoprint.org/?url=" + encodeURIComponent(info.linkUrl)
		let newTab = browser.tabs.create({
			active: true,
			url: url
		})
	}
});
