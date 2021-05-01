import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../../../shared/types/author.type';

@Component({
	selector: 'app-author-item',
	templateUrl: './author-item.component.html',
	styleUrls: ['./author-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorItemComponent {
	@Input() author!: Author;
	@Output() delete = new EventEmitter<string>();
}
