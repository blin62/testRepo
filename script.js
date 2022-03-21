function AddClassStiliKeq(){
    document.querySelector('.paragrafiPare').classList.remove('stiliMire')
   document.querySelector('.paragrafiDyte').classList.remove('stiliMire')
     document.querySelector('.paragrafiTrete').classList.remove('stiliMire')
    document.querySelector('.paragrafiPare').classList.add('stiliKeq')
     document.querySelector('.paragrafiDyte').classList.add('stiliKeq')
   document.querySelector('.paragrafiTrete').classList.add('stiliKeq')
}
function AddClassStiliMire(){
     document.querySelector('.paragrafiPare').classList.remove('stiliKeq')
     document.querySelector('.paragrafiDyte').classList.remove('stiliKeq')
    document.querySelector('.paragrafiTrete').classList.remove('stiliKeq')
   document.querySelector('.paragrafiPare').classList.add('stiliMire')
   document.querySelector('.paragrafiDyte').classList.add('stiliMire')
    document.querySelector('.paragrafiTrete').classList.add('stiliMire')
}