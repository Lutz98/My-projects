function previewFiles(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('preview');
    previewContainer.innerHTML = '';

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewElement = document.createElement('div');
            previewElement.className = 'mb-2';
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                img.className = 'w-full h-auto rounded';
                previewElement.appendChild(img);
            } else {
                const link = document.createElement('a');
                link.href = e.target.result;
                link.textContent = file.name;
                link.className = 'text-blue-500 underline';
                previewElement.appendChild(link);
            }
            previewContainer.appendChild(previewElement);
        };
        reader.readAsDataURL(file);
    }
}
