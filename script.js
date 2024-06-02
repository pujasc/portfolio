// Fetch and render the Markdown content
fetch('resume.md')
.then(response => response.text())
.then(text => {
    const markdownContent = document.getElementById('markdown-content');
    markdownContent.innerHTML = marked(text);
});