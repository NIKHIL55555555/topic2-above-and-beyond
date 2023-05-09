// const devices = JSON.parse(localStorage.getItem('devices')) || [];



//   devices.forEach(function(device) {
//     $('#devices tbody').append(`
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//       </tr>`
//     );
//   });

//   $('#add-device').on('click', function() {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user, name });
//     localStorage.setItem('devices', JSON.stringify(devices));
//     console.log(devices);
//     location.href = 'device-list.html';
//   });

// Retrieve devices from localStorage or initialize an empty array



// const devices = JSON.parse(localStorage.getItem('devices')) || [];


// function displayDevices() {
//   const table = $('#devices tbody');
//   table.empty();

//   devices.forEach(function(device) {
//     const row = `
//       <tr>
//         <td>${device.user}</td>
//         <td>${device.name}</td>
//         <td style="background-color: ${device.color};"></td>
//       </tr>
//     `;
//     table.append(row);
//   });
// }


// $('#add-device').on('click', function() {
//   const user = $('#user').val();
//   const name = $('#name').val();
//   const color = $('#color').val();

//   devices.push({
//     user: user,
//     name: name,
//     color: color
//   });

//   localStorage.setItem('devices', JSON.stringify(devices));

 
//   $('#user').val('');
//   $('#name').val('');
//   $('#color').val('');

 
//   displayDevices();
// });


// $(document).ready(function() {
//   displayDevices();
// });





// Retrieve devices from localStorage or initialize an empty array
const devices = JSON.parse(localStorage.getItem('devices')) || [];

// Display devices in the table
function displayDevices() {
  const table = $('#devices tbody');
  table.empty();

  devices.forEach(function(device) {
    const row = `
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
        <td style="background-color: ${device.color};"></td>
      </tr>
    `;
    table.append(row);
  });
}

// Register a new device
$('#add-device').on('click', function() {
  const user = $('#user').val();
  const name = $('#name').val();
  const color = $('#color').val();

  devices.push({
    user: user,
    name: name,
    color: color
  });

  localStorage.setItem('devices', JSON.stringify(devices));


  // Clear input fields
  $('#user').val('');
  $('#name').val('');
  $('#color').val('');

  // Refresh device list
  displayDevices();
});

// Call displayDevices() when the page is loaded
$(document).ready(function() {
  // displayDevices();
});


