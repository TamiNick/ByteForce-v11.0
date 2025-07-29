(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-second-open]"),
      closeModalBtn: document.querySelector("[data-modal-second-close]"),
      modal: document.querySelector("[data-modal-second]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
})();
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-third-open]"),
      closeModalBtn: document.querySelector("[data-modal-third-close]"),
      modal: document.querySelector("[data-modal-third]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();











