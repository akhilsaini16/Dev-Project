function handleSubmit() {
    // Update hidden textareas with CodeMirror content
    editorInstances.forEach(({ editor, textarea }) => {
        textarea.value = editor.getValue();
    });

    // Gather all textarea values
    const values = editorInstances.map(({ textarea }) => ({
        [textarea.name]: textarea.value,
    }));

    console.log(values); // Log the submitted data
    alert('Form submitted! Check the console for the collected data.');
}