import * as vscode from 'vscode';
import { FUNCTIONS, KEYWORD, SELECTOR } from './contants';

export default vscode.languages.registerCompletionItemProvider(SELECTOR, {
  provideCompletionItems() {
    const keywords = KEYWORD.map(kw => ({
      label: kw,
      kind: vscode.CompletionItemKind.Keyword
    }));
    const functions: vscode.CompletionItem[] = FUNCTIONS.map(func => ({
      label: func.label,
      detail: func.detail,
      documentation: func.documentation,
      kind: vscode.CompletionItemKind.Function
    }));
    return [...keywords, ...functions];
  }
});