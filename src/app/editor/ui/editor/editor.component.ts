import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/latex';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/theme-dracula';

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements AfterViewInit {

	@ViewChild('editor') private editor!: ElementRef<HTMLElement>;

	ngAfterViewInit(): void {
		ace.require('ace/ext/language_tools');

		ace.config.set('fontSize', '14px');

		ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

		const aceEditor = ace.edit(this.editor.nativeElement);
		aceEditor.session.setValue('');
		aceEditor.setOptions({
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true,
		});

		aceEditor.setTheme('ace/theme/dracula');
		aceEditor.session.setMode('ace/mode/latex');

		aceEditor.on('blur', () => {
			console.log(aceEditor.getValue());
		});
	}

}
