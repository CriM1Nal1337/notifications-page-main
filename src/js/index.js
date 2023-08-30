const btnMark = document.getElementById('mark');

btnMark.addEventListener('click', () => {
    const noRead = document.querySelectorAll('.no-read');
    const redPoint = document.querySelectorAll('.red-point')
    const notificationNumber = document.querySelector('.number')

    noRead.forEach(function (read) {
        if (read.classList.contains('no-read')) {
            read.classList.remove('no-read');
        }
    });

    redPoint.forEach(function (point) {
        if (point.classList.contains('red-point')) {
            point.classList.remove('red-point')
        }
    })

    if (notificationNumber) {
        const notificationNumberContent = notificationNumber.textContent.trim()
        const numeroInteiro = parseInt(notificationNumberContent, 10)

        if (!isNaN(numeroInteiro) && numeroInteiro > 0) {
            notificationNumber.textContent = ('0')
        }
    }
});