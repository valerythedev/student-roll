var editButtons = document.getElementsByClassName("btn-warning btn sm-edit");
var trash = document.getElementsByClassName("btn-warning btn sm-delete");

Array.from(editButtons).forEach(function (element) {
  element.addEventListener('click', function () {
    const tableRow = this.parentNode.parentNode
    const firstName = this.parentNode.parentNode.childNodes[1].textContent
    const lastName = this.parentNode.parentNode.childNodes[3].textContent
    const roll = this.parentNode.parentNode.childNodes[5].textContent
    const id = tableRow.dataset.id;

    fetch(`/messages/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    roll: roll
  })
})

      .then(response => {
        if (response.ok) {
          window.location.reload(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const firstName = this.parentNode.parentNode.childNodes[1].textContent
    const lastName = this.parentNode.parentNode.childNodes[3].textContent
    const roll = this.parentNode.parentNode.childNodes[5].textContent
    fetch('/messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        roll: roll
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

