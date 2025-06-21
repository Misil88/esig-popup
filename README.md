# esig-popup

Custom extension for Teamcenter 14 Active Work Space 6.

## Project structure

```
esig-popup/
├─ module.js
├─ js/
│  └─ esigPopupService.js
└─ declarativeJson/
   └─ commandsView.json
```

- **module.js**: registers the extension service.
- **js/esigPopupService.js**: service responsible for showing the e-signature notification.
- **declarativeJson/commandsView.json**: defines the command that invokes the service.
