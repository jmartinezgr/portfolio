export const alerta = (mensaje,type) => {
    document.querySelector('.toast').classList.add('active')
    document.querySelector('.progress').classList.add('active')
    document.querySelector('.text-2').textContent = mensaje

    if(type === 'error'){
        document.querySelector('.toast').style.borderleft = '6px solid #cb3234;'
    }else{
        document.querySelector('.toast').style.borderleft = '#f44336'
    }

    setTimeout(() => {
        document.querySelector('.toast').classList.remove('active')
        setTimeout(() => {
            document.querySelector('.progress').classList.remove('active')
        }, 300)
    }, 5000)


}