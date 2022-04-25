const descargarBtn = document.querySelector(".descargarApp")

function descargar (){
    let pasaron = 1;
    let interval

    Swal.fire({
        showCloseButton: true,
        title: 'Descargando ...',
        html: '<b></b> MB ...',
        timer: 3000,
        timerProgressBar: true,

        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            interval = setInterval(() => {
              b.textContent = pasaron += 1
            }, 10)
          },
          willClose: () => {
            clearInterval(interval)
          }
        }).then((result) => {

          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire('Descarga exitosa!', '', 'success')
        }
    })
}

descargarBtn.addEventListener ("click", ()=>descargar())
