import './HamburgerMenu.css';

function HamburgerMenu() {

  function handleClick() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  }

  return (
    <button id="menu-btn" class="z-30 sm:block md:hidden focus:outline-none hamburger m-5" onClick={handleClick}>
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </button>
  )
}

export default HamburgerMenu;