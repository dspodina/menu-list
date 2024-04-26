import filterHandler from '../handlers/filterHandler.js';

/**
 * Create a button element
 *
 * @param {Object} btn Button data
 * @returns {HTMLElement}
 */

const addButtons = (btn) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = btn.id;
    button.classList.add('filter-btn');
    button.innerText = btn.text;

    button.addEventListener('click', () => {
        filterHandler(btn);
    });

    return button;
};

export default addButtons;
