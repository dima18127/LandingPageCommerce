import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox')
        

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event,() => {
                if (elem.length > 1 ) {
                    state[prop] = i;

                }
                else {
                    state[prop] = item.value;
                }
                console.log(state);
                })
            })
        }
            

        console.log(state);

        bindActionToElems("click", windowForm, 'Form');
        bindActionToElems("input", windowWidth, "width");
        bindActionToElems("input", windowHeight, "height");
        checkNumInputs('#heigth')
        checkNumInputs('#width')
    }



export default changeModalState;