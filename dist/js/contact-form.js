window.addEventListener('DOMContentLoaded', function () {
  if (navigator.appVersion.indexOf('Chrome/') != -1) {
    // modify button
  }

  var form = document.getElementById('contact-form');
  var button = document.getElementById('contact-send-button');
  var status = document.getElementById('contact-status');

  function success() {
    form.reset();
    button.style = 'display: none ';
    status.innerHTML = 'Thanks! Your message has been sent';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
