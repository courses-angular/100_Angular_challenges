import {Directive, HostListener, Inject, Input} from '@angular/core';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Directive({
  selector: '[ylCopy]'
})
export class CopyDirective {
  @Input() appCopy: string = '';

  constructor(@Inject('Navigator') private  navigator: Navigator,
              @Inject('Document') private document: Document,
              private snackbarService: SnackbarService) {
  }

  @HostListener('click')
  async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('Copied successfully');
    } catch (e) {
      this.snackbarService.callSnackbar('Copy failed');
    }
  }

}
