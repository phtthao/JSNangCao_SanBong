document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const price = document.getElementById("price").value;
  const type = document.getElementById("type").value;

  if (name === "" && name.length < 5) {
    alert("Vui long nhap ten, Ten san phai lon hon 5 ki tu");
    return;
  }
  if (location === "") {
    alert("Vui long nhap dia chi");
    return;
  }
  if (price === "" || price <= 0 || isNaN(price)) {
    alert("Vui long nhap gia, Gia phai lon hon 0 va la so");
    return;
  }
  if (type === "") {
    alert("Vui long chon san");
    return;
  }

  axios
    .post("http://localhost:3000/pitches", {
      name,
      location,
      price,
      type,
    })
    .then(() => {
      location.replace("./index.html");
      alert("Them thanh cong");
    });
});
