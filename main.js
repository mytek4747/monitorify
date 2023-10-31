document.addEventListener('DOMContentLoaded', () => {
    const monitorList = document.getElementById('monitorList');
    const imageList = document.getElementById('imageList');
    const uploadImageForm = document.getElementById('uploadImageForm');

    // Simulate fetching monitor data from the backend and populating the list
    fetch('/monitors')
        .then(response => response.json())
        .then(monitors => {
            monitors.forEach(monitor => {
                const monitorItem = document.createElement('li');
                monitorItem.innerHTML = `
                    <h3>${monitor.name}</h3>
                    <button class="editMonitor">Edit</button>
                    <button class="deleteMonitor">Delete</button>
                `;
                monitorList.appendChild(monitorItem);
            });
        });

    // Simulate fetching image data from the backend and populating the list
    fetch('/images')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imageItem = document.createElement('li');
                imageItem.innerHTML = `
                    <img src="${image.image_url}" alt="Image">
                    <button class="deleteImage">Delete</button>
                `;
                imageList.appendChild(imageItem);
            });
        });

    // Simulate image upload functionality (for illustration purposes)
    uploadImageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const imageFile = document.getElementById('imageFile').files[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                // Handle the response (e.g., display uploaded image)
                const imageItem = document.createElement('li');
                imageItem.innerHTML = `
                    <img src="${result.image_url}" alt="Image">
                    <button class="deleteImage">Delete</button>
                `;
                imageList.appendChild(imageItem);
            });
    });
});
