    document.querySelector('webview').addEventListener('newwindow', e => {
      const webview = document.createElement('webview');
      webview.style.width = '50vw';
      webview.style.height = '50vh';
      webview.style.position = 'absolute';
      webview.style.border = 'solid 2px red';
      webview.style.left = '0';
      webview.style.top = '0';
      document.body.appendChild(webview);
      e.window.attach(webview);
    });
