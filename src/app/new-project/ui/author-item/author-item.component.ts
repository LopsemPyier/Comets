import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Author, Status } from '../../../shared/types/author.type';

@Component({
	selector: 'app-author-item',
	templateUrl: './author-item.component.html',
	styleUrls: ['./author-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorItemComponent {
	@Input() author!: Author;
	@Output() delete = new EventEmitter<string>();

	get isPending(): boolean {
		return this.author.status === Status.PENDING;
	}

	get isAccepted(): boolean {
		return this.author.status === Status.ACCEPTED;
	}

	get isOwner(): boolean {
		return this.author.status === Status.OWNER;
	}
}
