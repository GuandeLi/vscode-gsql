import * as vscode from 'vscode';
import { SELECTOR } from './contants';

export default vscode.languages.registerCompletionItemProvider(SELECTOR, {
  provideCompletionItems(document, position, token) {
    return [{
      label: 'CREATE',
      kind: vscode.CompletionItemKind.Keyword
    }];
  }
});