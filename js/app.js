console.log('APPJS');
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
}


// if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('sw.js')
//         .then(function (registration) {
//             console.log('Service Worker registrado con éxito:', registration);
//         })
//         .catch(function (error) {
//             console.log('ERROR', error);
//         });
// }
