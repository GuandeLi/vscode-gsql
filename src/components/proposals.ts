import * as vscode from 'vscode';
import { FUNCTIONS, KEYWORD, SELECTOR, METHODS } from './contants';

export const kwAndFunc = vscode.languages.registerCompletionItemProvider(SELECTOR, {
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

export const methods = vscode.languages.registerCompletionItemProvider(SELECTOR, {
  provideCompletionItems() {
    const methods: vscode.CompletionItem[] = METHODS.map(method => ({
      label: method.label,
      detail: method.detail,
      documentation: method.documentation,
      kind: vscode.CompletionItemKind.Method
    }));
    return [...methods];
  }
}, '.');