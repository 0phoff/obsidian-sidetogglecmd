# Obsidian SideToggleCommand Plugin
This plugin adds a few commands to have a more fine grained control over your sidebars.
You can assign hotkeys or use the commands from the command palette.

- Show Left Sidebar
- Hide Left Sidebar
- Show Right Sidebar
- Hide Right Sidebar
- Show Both Sidebars
- Hide Both Sidebars
- Toggle Both Sidebars

## Manually installing the plugin

- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/sidetogglecmd/`.

## Development

- Clone this repo.
- `pnpm i` to install dependencies.
- `pnpm run dev` to start compilation in watch mode.
- `pnpm run lint` before sending a PR.

## Acknowledgements

This plugin is heavily inspired by [Obsidian-Sidebar-Toggler](https://github.com/chrisgrieser/obsidian-sidebar-toggler).
I just wanted a plugin to control both sidebars at the same time and did not need the protocol stuff that is present in that plugin.
