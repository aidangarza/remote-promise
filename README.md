# remote-promise
A simple function that controls the loading of remote resources within a promise-based app.

Example:
    
    const key = '...'
    
    (function () {
      remote(
        `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`,
        () => window.google
      ).then(() => {
        console.log('Google Maps has loaded!')
      })
    })()
