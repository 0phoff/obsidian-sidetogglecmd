import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		console.log('SideToggleCommand Plugin loaded.');

		// Left Sidebar
		this.addCommand({
			id: 'show-left-sidebar',
			name: 'Show left sidebar',
			callback: () => this.sidebarVisibility('left', true),
		});

		this.addCommand({
			id: 'hide-left-sidebar',
			name: 'Hide left sidebar',
			callback: () => this.sidebarVisibility('left', false),
		});

		// Right Sidebar
		this.addCommand({
			id: 'show-right-sidebar',
			name: 'Show right sidebar',
			callback: () => this.sidebarVisibility('right', true),
		});

		this.addCommand({
			id: 'hide-right-sidebar',
			name: 'Hide right sidebar',
			callback: () => this.sidebarVisibility('right', false),
		});

		// Both Sidebars
		this.addCommand({
			id: 'show-both-sidebars',
			name: 'Show both sidebars',
			callback: () => {
				this.sidebarVisibility('left', true);
				this.sidebarVisibility('right', true);
			},
		});

		this.addCommand({
			id: 'hide-both-sidebars',
			name: 'Hide both sidebars',
			callback: () => {
				this.sidebarVisibility('left', false);
				this.sidebarVisibility('right', false);
			},
		});

		this.addCommand({
			id: 'toggle-both-sidebars',
			name: 'Toggle both sidebars',
			callback: () => {
				if (this.app.workspace.leftSplit.collapsed && this.app.workspace.rightSplit.collapsed) {
					this.app.workspace.leftSplit.expand();
					this.app.workspace.rightSplit.expand();
				} else {
					this.app.workspace.leftSplit.collapse();
					this.app.workspace.rightSplit.collapse();
				}
			},
		});
	}

	async onunload() {
		console.log('SideToggleCommand Plugin unloaded.');
	}

	sidebarVisibility(side: 'left' | 'right', visible: boolean): void {
		const sidebar = side === 'left' ? this.app.workspace.leftSplit : this.app.workspace.rightSplit;

		if (sidebar.collapsed && visible) {
			sidebar.expand();
		} else if (!sidebar.collapsed && !visible) {
			sidebar.collapse();
		}
	}
}
