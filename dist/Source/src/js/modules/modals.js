const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]')
        
        // trigger.addEventListener("click",(e) => {
        //     if (e.target) {
        //         e.preventDefault();
        //     }
        //     modal.style.display = "block";
        //     document.body.style.overflow = "hidden";
        //     document.body.classList.add("modal-open")
        // });
        trigger.forEach(item => {

            item.addEventListener("click",(e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    windows.forEach(item => {
                        item.style.display = "none";
                    })
                    modal.style.display = "block";
                    // document.body.style.overflow = "hidden";
                    document.body.classList.add("modal-open")
                });
        });



        close.addEventListener('click', () => {
            // modal.style.display = "none";
            // document.body.style.overflow = "";
            document.body.classList.remove("modal-open")
            windows.forEach(item => {
                item.style.display = "none";
            })
        })
        modal.addEventListener("click", (e) => {
            // let el = "popup_engineer"
            if (e.target === modal && closeClickOverlay){
                windows.forEach(item => {
                    item.style.display = "none";
                })
                // modal.style.display = "none";
                // document.body.style.overflow = "";
                document.body.classList.remove("modal-open")
            }
        });
    }
    // const   callEngineerBtn = '.popup_engineer_btn',
    //         modalEngineer = '.popup_engineer',
    //         modalEngineerClose = '.popup_engineer .popup_close'
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.glazing_price_btn ', '.popup_calc', '.popup_calc_close',)
    bindModal('.popup_calc_button ', '.popup_calc_profile', '.popup_calc_close', false)
    bindModal('.popup_calc_profile_button ', '.popup_calc_end', '.popup_calc_close', false)

// открывает модал окно каждые 60 сек.
    function ShowModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "";
        }, time);
        
    };
    // ShowModalByTime('.popup', 0000 );
};


export default modals;