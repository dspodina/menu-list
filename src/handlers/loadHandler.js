import data from '../data.js';
import dom from '../dom.js';
import addButtons from '../components/addButtons.js';
import addItems from '../components/addItems.js';

const loadHandler = () => {
    data.buttons.forEach((btn) => {
        const button = addButtons(btn);
        dom.btnContainer.append(button);
    });

    data.menu.forEach((item) => {
        const article = addItems(item);
        dom.itemsContainer.append(article);
    });
};

export default loadHandler;
