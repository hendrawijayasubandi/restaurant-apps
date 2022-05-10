const DrawerInitiator = {
  init({
    button,
    content,
    drawer,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
	@@ -10,14 +15,15 @@ const DrawerInitiator = {
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