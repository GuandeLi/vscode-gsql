import * as vscode from 'vscode';
import _hover from './components/hover';
import _highlighting from './components/highlighting';
import { kwAndFunc, methods } from './components/proposals';
import { initTreeSitter } from './components/parser';

export async function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('Welcome to vscode-gsql');
	await initTreeSitter();

	context.subscriptions.push(_hover);
	
	context.subscriptions.push(_highlighting);

	context.subscriptions.push(kwAndFunc, methods);
}

// this method is called when your extension is deactivated
export function deactivate() {}
