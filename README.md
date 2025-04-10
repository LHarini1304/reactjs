# 1.🚨 Build failed.

@parcel/core:
Library targets are not supported in serve mode.

C:\Users\hal\Learning\hariniLearningReact\package.json:8:11
7 | },

> 8 | "main": "app.js",
> | ^^^^^^^^ Target declared here

     9 |   "repository": {
    10 |     "type": "git",

💡 The "main" field is meant for libraries, not applications. Either remove the "main" field or choose a different target name.
📝 Learn more: https://parceljs.org/features/targets/#library-targets

solution:
The error is caused because Parcel does not support the "main" field in package.json when running in serve mode.
The "main" field is used for libraries, but you're building an application.
Fix: Remove the "main" field in package.json 1. Open your package.json file. 2. Remove this line:
"main": "app.js", 3. Save the file. 4. Restart the Parcel server.

# ==================================================================================================================

# 2.🚨 Build failed.

@parcel/transformer-js: Browser scripts cannot have imports or exports.

C:\Users\hal\Learning\hariniLearningReact\app.js:1:1

> 1 | import React from "react";
> | ^^^^^^^^^^^^^^^^^^^^^^^^^^

    2 | import ReactDOM from "react-dom";
    3 |

C:\Users\hal\Learning\hariniLearningReact\index.html:12:5
11 | </div>

> 12 | <script src="./app.js"></script>
> | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The environment was originally created here

    13 |   </body>
    14 | </html>

💡 Add the type="module" attribute to the <script> tag.

Solution:

<script src="./app.js"></script>

By default, browsers treat this as a classic script, and classic scripts cannot use import or export.
So Parcel is throwing this error:
"Browser scripts cannot have imports or exports."

To fix this, we need to tell the browser that our script is using JavaScript modules.
To do that, add type="module" to the script tag:

<script type="module" src="./app.js"></script>

This tells the browser to treat the script as a module, which allows us to use import and export statements.
After making this change, the browser will correctly interpret the script as a module, and the error should be resolved.

# ==================================================================================================================

# 3. What is parcel?

Read more about parcel: https://parceljs.org/

# ==================================================================================================================

⠋ Building index.html...
node:fs:1953
binding.unlink(getValidatedPath(path));
^

Error: ENOENT: no such file or directory, unlink 'C:\Users\hal\AppData\Local\Temp\index.html.21632.5'
at Object.unlinkSync (node:fs:1953:11)
at WriteStream.<anonymous> (C:\Users\hal\Learning\hariniLearningReact\node_modules\@parcel\fs\lib\index.js:1142:83)
at Object.onceWrapper (node:events:633:26)
at WriteStream.emit (node:events:530:35)
at emitErrorNT (node:internal/streams/destroy:170:8)
at emitErrorCloseNT (node:internal/streams/destroy:129:3)
at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
errno: -4058,
code: 'ENOENT',
syscall: 'unlink',
path: 'C:\\Users\\hal\\AppData\\Local\\Temp\\index.html.21632.5'
}

Node.js v22.14.0

Reason: This usually means Parcel tried to delete or write a temp file (.b) but the file was already missing — possibly due to:
a crash,
a permission issue,
or antivirus software locking the temp folder.

Solution:

1. Restart the Parcel Server or
2. Clear Parcel’s Cache
   === npx parcel clean
   === npx parcel index.html

# ==================================================================================================================

What is babel?
Read more about babel : https://babeljs.io/

# ==================================================================================================================
