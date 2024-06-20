export const alerta = (mensaje, type) => {
    document.querySelector('.toast').style.display = 'block'
    document.querySelector('.toast').classList.add('active')
    document.querySelector('.progress').classList.add('active')
    document.querySelector('.text-2').textContent = mensaje
    
    if(type === 'error'){
        document.documentElement.style.setProperty('--color', "red");
        document.querySelector('.text-1').innerHTML = 'Error'
    }else{
        document.documentElement.style.setProperty('--color', "var(--primary-color)");
        document.querySelector('.text-1').innerHTML = 'Success'
    }

    setTimeout(() => {
        document.querySelector('.toast').classList.remove('active')
        setTimeout(() => {
            document.querySelector('.progress').classList.remove('active')
        }, 300)
        setTimeout(() => {
            document.querySelector('.toast').style.display = 'none'
        }, 500)
    }, 5000)
}