import {Component, Input, OnInit} from '@angular/core';
import {htmlRegexData} from './html-regex.data';

@Component({
  selector: 'yl-reach-text-viewer',
  templateUrl: './reach-text-viewer.component.html',
  styleUrls: ['./reach-text-viewer.component.scss']
})
export class ReachTextViewerComponent implements OnInit {
  validHtml: string = '';

  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegexData.test(html);
    this.validHtml = isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string = ''): string {
    const htmlTags: RegExp = /<[^]*?/g; // check if there is all are opening and all are closing tags
    const hasContent = html.replace(htmlTags, '').trim().length > 0; // replace all the tags with '' and check length of the content

    return hasContent ? html : '';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
