# Comment Console Logs - VS Code Extension

[![Version](https://i.ibb.co/F7VKtRq/logos-7531804-1.png)](https://marketplace.visualstudio.com/items?itemName=sallbro.comment-console-log&ssr=false#version-history)
[![Installs](https://i.ibb.co/F7VKtRq/logos-7531804-1.png)](https://marketplace.visualstudio.com/items?itemName=sallbro.comment-console-log)
[![Rating](https://i.ibb.co/F7VKtRq/logos-7531804-1.png)](https://marketplace.visualstudio.com/items?itemName=sallbro.comment-console-log&ssr=false#review-details)

## Overview

**Comment Console Logs** is a Visual Studio Code extension that helps developers quickly comment out all `console.log` statements in their project. This can be useful for debugging purposes, cleanup before pushing code to production, or simply reducing clutter in your codebase.

## Features

- Automatically comment out all `console.log` statements in your project.
- Preserves leading whitespace and indentation.
- Skips `console.log` statements that are already commented.
- Works with both JavaScript (`.js`) and TypeScript (`.ts`) files.

### Example:

Before running the extension:

```typescript
console.log("This is a log message");
const a = 10; console.log("Another log message");
```

After running the extension:

```typescript
//console.log("This is a log message");
const a = 10; //console.log("Another log message");
```
