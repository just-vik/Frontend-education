function userCard(firstName, lastName, age) {
  const container = document.createElement("div");
  container.className = "user";

  const nameNode = document.createElement("p");
  nameNode.innerText = "Name: " + firstName + " " + lastName;

  const ageNode = document.createElement("p");
  ageNode.innerText = "Age: " + age;

  container.append(nameNode);
  container.append(ageNode);
  return container;
}

function addUser() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  console.log("Имя:", firstName);
  console.log("Фамилия:", lastName);
  console.log("Возраст:", age);
  const user = userCard(firstName, lastName, age);

  document.getElementById("userCards").append(user);
  document.getElementById("userForm").reset();
}
