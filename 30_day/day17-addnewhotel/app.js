var aipURL = 'https://622b588614ccb950d2374872.mockapi.io/user';
axios.get(aipURL)
    .then((response) => {
        if (response.statusText === 'OK') {
            var content = '';
            var result = document.querySelector('tbody');
            result.innerHTML = '';
            data = response.data;
            data.forEach((item) => {
                content += `
                <tr id="row-${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>
                   <img src="${item.avatar}" width="70px" class="img img-avatar">
                    </td>
                    <td>${item.address}</td>
                    <td>
                        <a href="edit-hotel.html?id=${item.id}" class="btn btn-sm btn-primary "> Edit</a>
                        <button class="btn btn-sm btn-danger" onclick="remove(${item.id})"> Delete</button>

                    </td>
                </tr>
                `
            })
            result.innerHTML = content;
        }
    });

function remove(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            var removeNode = document.querySelector('#row-' + id);
            removeNode.parentNode.removeChild(removeNode);
        }
    })
};