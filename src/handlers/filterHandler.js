const filterHandler = (button) => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        const id = button.id;

        if (id === 'all' || item.classList.contains(id)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
};

export default filterHandler;
