document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');

    // Array of objects for projects
    let projects = [
        // Add your projects here with the structure:
        // { name: "Project 1", img: "link_to_thumbnail", url: "link_to_project" }
        { name: "01 Expanding Cards", url: "./01_expanding_cards/index.html" },
    ];

    // Function to add a project card to the grid
    function addProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.url}" class="button">View Project</a>
        `;
        projectGrid.appendChild(card);
    }

    // Initialize and add each project to the grid
    projects.forEach(addProjectCard);
});
