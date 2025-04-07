// Changing text content dynamically
document.getElementById('title').textContent = 'Autistinc';

// Modifying CSS styles via JavaScript
let isOriginalStyle = true;

// Add an event listener to the button
document.getElementById('styleButton').addEventListener('click', () => {
    const description = document.getElementById('description');
    const container = document.getElementById('container');

    if (isOriginalStyle) {
        // Change to the new style
        document.body.style.backgroundColor = '#000000';
        if (container.innerHTML !== '') {
            description.style.color = 'White'; // Apply style if the hidden text is visible
        }
    } else {
        // Revert to the original style
        document.body.style.backgroundColor = '';
        if (container.innerHTML !== '') {
            description.style.color = ''; // Revert style if the text is visible
        }
    }
    // Toggle the flag
    isOriginalStyle = !isOriginalStyle;
});

// Adding or removing an element when a button is clicked
document.getElementById('addRemoveButton').addEventListener('click', () => {
    const container = document.getElementById('container');
    if (container.innerHTML === '') {
        const newElement = document.createElement('p');
        newElement.textContent = 'Our Secret Weapon: At the heart of our success lies our most powerful asset: diversity and inclusivity. By bringing together people from different backgrounds, perspectives, and experiences, we unlock a wellspring of creativity that fuels innovation. This rich tapestry of ideas fosters problem-solving approaches that are both unconventional and effective, allowing us to address complex challenges with fresh solutions. Inclusivity ensures that every voice is heard, creating an environment where collaboration thrives and where individuals feel empowered to contribute their unique insights. Together, diversity and inclusivity form a dynamic engine of growth, driving us to redefine boundaries and turn visionary concepts into transformative realities.';
        container.appendChild(newElement);
    } else {
        container.innerHTML = '';
    }
});