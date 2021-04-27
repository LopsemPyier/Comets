import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileNode, FileType } from '../../shared/types';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {

	id$ = new Observable<string>();
	files$: FileNode[] = [{
		id: '1',
		name: 'folder',
		extension: null,
		fileType: FileType.FOLDER,
		open: true,
		selected: false,
		children: [{
			id: '5',
			name: 'nested',
			extension: null,
			fileType: FileType.FOLDER,
			children: [],
			open: false,
			selected: false,
		}, {
			id: '3',
			name: 'image',
			extension: 'png',
			fileType: FileType.IMAGE,
			children: null,
			open: false,
			selected: false,
		}, {
			id: '2',
			name: 'file',
			extension: 'tex',
			fileType: FileType.TEX,
			children: null,
			open: false,
			selected: false,
		}],
	}];

	constructor(
		private route: ActivatedRoute,
	) {
	}

	ngOnInit(): void {
		this.id$ = this.route.params.pipe(map((params: Params) => {
			return params.id;
		}));
	}

}
