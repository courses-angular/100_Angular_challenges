import {Pipe, PipeTransform} from '@angular/core';
import {htmlRegexData} from '../../components/reach-text-viewer/html-regex.data';

@Pipe({
  name: 'richText'
})
export class RichTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegexData.test(html);
    return isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string): string {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;
    return hasContent ? html : '';
  }

}
