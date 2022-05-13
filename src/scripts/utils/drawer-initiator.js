/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button,
    content,
    drawer,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
