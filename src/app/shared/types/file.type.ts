import { FileType } from './fileType.enum';

export type File = {
	id: string,
	fileType: FileType,
	name: string,
	extension: string | null,
	parent: File | null
};

export type FileNode = {
	id: string,
	fileType: FileType,
	name: string,
	extension: string | null,
	children: FileNode[] | null,
	open: boolean,
	selected: boolean,
	parent: string | null,
	edit: boolean,
	folder: boolean
};
