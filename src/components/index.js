
const requireContext = require("require-context")
console.log([requireContext])
const files = requireContext("./", false, "/.vue$/");
// const module = {};
console.log(files, files.keys());

// export default function registComponents(context) {
//   const _vue = context;
//   _vue.component()
// }