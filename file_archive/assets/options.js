document.querySelector('#search-input').addEventListener('click',(event)=> {
   if (event.target.value === '' && document.querySelector('.datepicker-input').value !== '' ) {
        let temp = '';
        let temp1 = '';
        let temp2 = '';
        let temp3 = '';

        temp = document.querySelector('.datepicker-input').value;

        temp1 = temp.split('-')[2];
        temp2 = temp.split('-')[1];
        temp3 = temp.split('-')[0];

        event.target.value = `${temp1}.${temp2}.${temp3}`
   }
})