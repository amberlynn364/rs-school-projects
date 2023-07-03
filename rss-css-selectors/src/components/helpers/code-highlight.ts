export default class CodeHighlight { // part of code taken from https://habr.com/ru/articles/482884/
  private result;

  constructor(str: string) {
    this.result = this.highlightCode(str);
  }

  states = {
    NONE           : 0,
    DOUBLE_QUOTE   : 2, // "string"
    KEYWORD        : 8, // function, var etc.
    SPECIAL        : 9, // null, true etc.
  };
  
  colors = {
    DOUBLE_QUOTE: '#ffa',
    ID: '#707',
    CLASS: '#00a',
  };
  
  keywords = ('class|id').split('|');

  getText() {
    return this.result;
  }

  isAlphaNumericChar(char: string) {
    return char && /[0-9a-z_]/i.test(char);
  }

  highlightCode(str: string) {
    let output = '';
    let state = this.states.NONE;
    for (let i = 0; i < str.length; i++) {
      const char = str[i], prev = str[i - 1];
      const closingCharNotEscaped = prev != '\\' || prev == '\\' && str[i - 2] == '\\';
  
      if (state == this.states.NONE && char == '"') {
        state = this.states.DOUBLE_QUOTE;
        output += '<span style="color: ' + this.colors.DOUBLE_QUOTE + '">' + char;
        continue;
      }
      if (state == this.states.DOUBLE_QUOTE && char == '"' && closingCharNotEscaped) {
        state = this.states.NONE;
        output += char + '</span>';
        continue;
      }
      if (state == this.states.NONE && char == '/') {
        let word = '', j = 0;
        while (i + j >= 0) {
          j--;
          if ('+/-*=|&<>%,({[?:;'.indexOf(str[i + j]) != -1) break;
          if (!this.isAlphaNumericChar(str[i + j]) && word.length > 0) break;
          if (this.isAlphaNumericChar(str[i + j])) word = str[i + j] + word;
          if (')]}'.indexOf(str[i + j]) != -1) {
            break;
          }
        }
      }
      if (state == this.states.NONE && !this.isAlphaNumericChar(prev)) {
        let word = '', j = 0;
        while (str[i + j] && this.isAlphaNumericChar(str[i + j])) {
          word += str[i + j];
          j++;
        }
        if (this.keywords.includes(word)) {
          state = this.states.KEYWORD;
          output += `<span style="color:${word === 'class' ? this.colors.CLASS : this.colors.ID}">`;
        }
      }
      if ((state == this.states.KEYWORD || state == this.states.SPECIAL) && !this.isAlphaNumericChar(char)) {
        state = this.states.NONE;
        output += '</span>';
      }
  
      if (state == this.states.NONE && '+-/*=&|%!<>?:'.indexOf(char) != -1) {
        output += '<span style="color: #07f">' + char + '</span>';
        continue;
      }
  
      output += char.replace('<', '&lt;');
    }
    return output.replace(/\n/gm, '<br>').replace(/\t/g, new Array(8).join('&nbsp;'))
      .replace(/^\s+|\s{2,}/g, (a) => new Array(a.length + 1).join('&nbsp;'));
  }
}