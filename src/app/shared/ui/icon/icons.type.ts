export type Icon =
	| 'email'
	| 'user'
	| 'users'
	| 'password'
	| 'settings'
	| 'file'
	| 'file-text'
	| 'file-image'
	| 'folder'
	| 'folder-open'
	| 'delete'
	| 'delete-open'
	| 'edit'
	| 'error'
	| 'success'
	| 'warning'
	| 'info'
	| 'search'
	| 'sort-asc'
	| 'sort-desc'
	| 'download'
	| 'dashboard'
	| 'plus'
	| 'notification'
	| 'logout'
	| 'language'
	| 'save'
	| 'loading'
	| 'chevron-down'
	| 'chevron-right'
	| 'arrow-right'
	| 'mouse'
	| 'external'
	| 'heart'
	| 'infinity'
	| 'laptop'
	| 'file-add'
	| 'folder-add'
	| 'logo-github'
	| 'logo-twitter';

export function toIconName(icon: Icon): string {
	switch (icon) {
		case 'email':
			return 'ph-envelope-simple-fill';

		case 'user':
			return 'ph-user-fill';

		case 'users':
			return 'ph-users-fill';

		case 'delete':
			return 'ph-trash-fill';

		case 'delete-open':
			return 'ph-trash-fill';

		case 'edit':
			return 'ph-pencil-line-fill';

		case 'file':
			return 'ph-file-fill';

		case 'file-image':
			return 'ph-image-fill';

		case 'file-text':
			return 'ph-file-text-fill';

		case 'folder':
			return 'ph-folder-simple-fill';

		case 'folder-open':
			return 'ph-folder-open-fill';

		case 'password':
			return 'ph-fingerprint';

		case 'settings':
			return 'ph-gear-six-fill';

		case 'search':
			return 'ph-magnifying-glass';

		case 'sort-asc':
			return 'ph-sort-ascending';

		case 'sort-desc':
			return 'ph-sort-descending';

		case 'error':
			return 'ph-warning-circle-fill';

		case 'info':
			return 'ph-info-fill';

		case 'success':
			return 'ph-check-circle-fill';

		case 'warning':
			return 'ph-warning-fill';

		case 'dashboard':
			return 'ph-squares-four-fill';

		case 'download':
			return 'ph-download-fill';

		case 'logout':
			return 'ph-sign-out-fill';

		case 'notification':
			return 'ph-bell-simple-fill';

		case 'plus':
			return 'ph-plus-circle';

		case 'language':
			return 'ph-translate-fill';

		case 'save':
			return 'ph-floppy-disk-fill';

		case 'loading':
			return 'bx bx-loader-alt bx-spin';

		case 'chevron-down':
			return 'ph-caret-down';

		case 'chevron-right':
			return 'ph-caret-right';

		case 'arrow-right':
			return 'ph-arrow-right-bold';

		case 'mouse':
			return 'ph-mouse-simple';

		case 'external':
			return 'ph-arrow-square-out';

		case 'heart':
			return 'ph-heart-straight-fill';

		case 'infinity':
			return 'ph-infinity';

		case 'laptop':
			return 'ph-laptop-fill';

		case 'file-add':
			return 'ph-file-plus-fill';

		case 'folder-add':
			return 'ph-folder-simple-plus-fill';

		case 'logo-github':
			return 'bx bxl-github';

		case 'logo-twitter':
			return 'bx bxl-twitter';

		default:
			return '';
	}
}
