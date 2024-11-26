const editorInstances = [];
    
        function createInputFields() {
            const numFunctions = document.getElementById('function-count').value;
            const inputContainer = document.getElementById('input-container');
    
            // Clear previous editors
            inputContainer.innerHTML = '';
            editorInstances.length = 0;
    
            // Dynamically create CodeMirror editors
            for (let i = 1; i <= numFunctions; i++) {
                // Create a label for the editor
                const label = document.createElement('label');
                label.textContent = `Function ${i} Code:`;
                label.setAttribute('for', `function-${i}`);
    
                // Create a div to host the CodeMirror editor
                const editorDiv = document.createElement('div');
                editorDiv.id = `editor-${i}`;
                editorDiv.style.marginBottom = '20px';
    
                // Create a hidden textarea for form submission
                const textarea = document.createElement('textarea');
                textarea.id = `function-${i}`;
                textarea.name = `function_${i}`;
                textarea.style.display = 'none'; // Hide the textarea
    
                // Append label, editor, and textarea to the container
                inputContainer.appendChild(label);
                inputContainer.appendChild(editorDiv);
                inputContainer.appendChild(textarea);
    
                // Initialize CodeMirror editor
                const editor = CodeMirror(editorDiv, {
                    value: '',
                    mode: 'python',
                    lineNumbers: true,
                    indentUnit: 4,
                    tabSize: 4,
                    gutters: ['CodeMirror-lint-markers'],
                });
    
                // Store the editor instance and associated textarea
                editorInstances.push({ editor, textarea });
            }
        }