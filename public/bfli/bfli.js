let wasmainG = null;
let memoryG = null;
let decoder = new TextDecoder("utf8");

async function load_bfli() {
  const response = await fetch("bfli.wasm");
  const bytes = await response.arrayBuffer();
  const results = await WebAssembly.instantiate(bytes, {});
  const {
    instance: {
      exports: { memory, wasmain },
    },
  } = results;
  memoryG = memory;
  wasmainG = wasmain;
  const user_input = document.getElementById("user_input");
  user_input.addEventListener("input", function () {
    bfli_main(user_input.value);
  });
}

function bfli_main(input) {
  const len = input.length;
  if (len > 0) {
    input = input.replaceAll("\n", "");
    const OUT_SZ = 32768;
    let output = new Uint8Array(memoryG.buffer, 0, OUT_SZ);
    let input_cstr = new Uint8Array(memoryG.buffer, OUT_SZ, OUT_SZ);
    for (var i = 0; i < OUT_SZ; i++) {
      output[i] = 0;
      input_cstr[i] = 0;
    }
    for (var i = 0; i < len; i++) input_cstr[i] = input.charCodeAt(i);
    wasmainG(input_cstr.byteOffset, output.byteOffset, len);
    document.getElementById("bfli_out").innerHTML = decoder.decode(output);
  } else {
    document.getElementById("bfli_out").innerHTML = "";
  }
}

load_bfli();
