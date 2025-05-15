document.addEventListener('DOMContentLoaded', () => {
  // Sample data for the boxes (replace with your actual data)
  const boxData = [
    { title: "Item 1", description: "Description for item 1", image: "https://via.placeholder.com/150" },
    { title: "Item 2", description: "Description for item 2", image: "https://via.placeholder.com/150" },
    { title: "Item 3", description: "Description for item 3", image: "https://via.placeholder.com/150" },
    { title: "Item 4", description: "Description for item 4", image: "https://via.placeholder.com/150" },
    { title: "Item 5", description: "Description for item 5", image: "https://via.placeholder.com/150" },
    { title: "Item 6", description: "Description for item 6", image: "https://via.placeholder.com/150" },
    { title: "Item 7", description: "Description for item 7", image: "https://via.placeholder.com/150" },
    { title: "Item 8", description: "Description for item 8", image: "https://via.placeholder.com/150" },
    // Add more items as needed
  ];

  // Create container for the grid
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(4, 1fr)';
  container.style.gap = '20px';
  container.style.padding = '20px';
  container.style.maxWidth = '1200px';
  container.style.margin = '0 auto';

  // Generate boxes
  boxData.forEach(item => {
    const box = document.createElement('div');
    box.style.border = '1px solid #ccc';
    box.style.padding = '15px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    box.style.backgroundColor = '#fff';
    box.style.textAlign = 'center';

    // Image
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.width = '100%';
    img.style.height = '150px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '5px';

    // Title
    const title = document.createElement('h3');
    title.textContent = item.title;
    title.style.margin = '10px 0';
    title.style.fontSize = '1.2em';

    // Description
    const description = document.createElement('p');
    description.textContent = item.description;
    description.style.color = '#555';
    description.style.fontSize = '0.9em';

    // Append elements to box
    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(description);

    // Append box to container
    container.appendChild(box);
  });

  // Append container to body
  document.body.appendChild(container);
});