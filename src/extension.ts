import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.commentOutConsoleLogs', async () => {
        // Get all files in the workspace (excluding node_modules and dist folders)
        const files = await vscode.workspace.findFiles('**/*.{ts,js}', '**/{node_modules,dist}/**');

        const consoleLogRegex = /console\.log\(.*?\);?/g;

        // Iterate over each file
        for (const file of files) {
            const document = await vscode.workspace.openTextDocument(file);
            const edit = new vscode.WorkspaceEdit();
            let modified = false;

            // Iterate over each line in the document
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                let lineText = line.text;
                const consoleLogIndex = lineText.indexOf('console.log');
                
                // Check if there's anything before 'console.log' that's not already commented out
                if (consoleLogIndex !== -1) {
                    
                    let idx = consoleLogIndex - 1;
                    while (idx >= 0 && lineText.charAt(idx) == " ") {
                        if (lineText.charAt(idx) == "/") {
                            if (lineText.charAt(idx - 1) && lineText.charAt(idx - 1) == "/") {
                                break;
                            }
                        }
                        idx--;
                    }
                    // check if the log is already commentout or not
                    if (lineText.charAt(idx) !== "/") {
                        const updatedLineText = lineText.substring(0, idx) + " //" + lineText.substring(consoleLogIndex);
                        const range = new vscode.Range(i, 0, i, lineText.length);
                        edit.replace(file, range, updatedLineText);  // Replace the modified line
                        modified = true;
                    }

                }
            }

            // Apply the edit if modified and save the file
            if (modified) {
                await vscode.workspace.applyEdit(edit);
                await document.save();
            }

        }

        vscode.window.showInformationMessage('Commented out all console.log statements!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
