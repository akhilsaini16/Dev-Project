const textarea = document.getElementById("code");
const editor = CodeMirror(document.getElementById("editor"), {
    value: "",
    mode: "python", // Syntax highlighting for Python
    lineNumbers: true, // Adds line numbers
    indentUnit: 4, // Auto-indentation width
    tabSize: 4, // Tab size
    lint: true, // Enables error reporting
    gutters: ["CodeMirror-lint-markers"], // Space for error icons
});

// Update hidden textarea before form submission
document.querySelector("form").addEventListener("submit", function () {
    textarea.value = editor.getValue();
});