# Test WebAssembly in a Angular App

### Install on Windows

* Download the Zip Archiv on https://github.com/juj/emsdk
* Extract it into a Folder
* Go into this Folder by Command Line
* Run following Commands

```bash
.\emsdk.bat update
.\emsdk.bat install latest
.\emsdk.bat activate latest
.\emsdk_env.bat
```

* add the Path emsdk-master\emscripten\1.38.21 to PATH Variable

now you can run the emcc command on Command Line.

### Compile to WASM

on the Root Folder of this Project use this Command:

```bash
emcc wasm_src/fibonacci.c -Os -s WASM=1 -s MODULARIZE=1 -o wasm_src/fibonacci.js
```

it generates a fibonacci.js (the Javascript Api to interact with the Webassembly) and a fibonacci.wasm (the Webassembly Code) file.

### Angular Usage

* copy the generated files fibonacci.js and fibonacci.wasm into assets folder.
* create a Service (looking into wasm-fibonacci.service.ts for example)
