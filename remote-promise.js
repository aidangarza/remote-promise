// Arguments:
// * src: String | url of your remote resource
// * check: Function | getter function to verify that the remote resource initialized as you expected

export default (src, check) => new Promise((resolve, reject) => {
  // Event Handler
  function handleLoad () {
    // If the check getter function returns a truthy value, resolve the promise
    if (check()) { resolve() }
    // Otherwise, reject
    reject(new Error(`Failed to load remote resource from "src"`))
  }
  // Create a script tag to load the remote resource
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  // Set the onload event
  script.onload = handleLoad
  // Append the script to the body
  document.head.appendChild(script)
})
