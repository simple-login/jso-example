This is an example of a website that implements SimpleLogin using [JSO](https://github.com/andreassolberg/jso). 

Upon successful login, you will see a popup (`alert`) containing the information that the website receives 
when you sign in with SimpleLogin.

This website can be served via any static server, for example with `http.server` python module:

> python3 -m http.server

It works immediately with SimpleLogin as SimpleLogin whitelists localhost to facilitate development.

