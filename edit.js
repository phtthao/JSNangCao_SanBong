const id = new URLSearchParams(location.search).get("id");

axios.get(`http://localhost:3000/pitches/${id}`).then((res) => {
  const pitch = res.data;
  document.getElementById("name").value = pitch.name;
  document.getElementById("price").value = pitch.price;
  document.getElementById("location").value = pitch.location;
  document.getElementById("type").value = pitch.type;
});

document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const data = {
    name,
    price,
    location,
    type,
  };

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

  axios.put(`http://localhost:3000/pitches/${id}`, data).then(() => {
    alert("Cập nhật thành công");
    location.replace("./index.html");
  });
});
