//let cou = 0;

const mail = ()=>{

}
document.getElementById("appointmentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    cou = cou + 1;
    // Collect form data
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      date: document.getElementById("date").value,
      department: document.getElementById("department").value,
      count: cou,
    };

    mail(data)

  });
