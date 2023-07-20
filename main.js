// JavaScript code for index.html

// Function to handle the form submission
function userForm(event) {
    event.preventDefault(); // Prevent form submission and page reload
  
    // Get form elements
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
  
    // Get selected membership value
    const memberships = document.getElementsByName("membership");
    let membershipType;
    for (const membership of memberships) {
      if (membership.checked) {
        membershipType = membership.value;
        break;
      }
    }
  
    // Display user information
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p>Full Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Address: ${address}, ${city}, ${province}</p>
      <p>Membership: ${membershipType}</p>
    `;
  }
  
  // Add event listener to the form on submit
  const mainForm = document.getElementById("main-form");
  mainForm.addEventListener("submit", userForm);




 