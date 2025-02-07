//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => {
    const articleA = a.replace(/^(a |an |the )/i, '').toLowerCase();
    const articleB = b.replace(/^(a |an |the )/i, '').toLowerCase();

    return articleA.localeCompare(articleB);
});

const bandList = document.getElementById('band');

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});