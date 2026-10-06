axios.get("http://localhost:3000/pitches").then((res) => {
  console.log(res.data);
  document.getElementById("list").innerHTML = res.data
    .map(
      (item) => `
                  <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${item.id}</td>
              <td class="px-4 py-2 border border-gray-300">${item.name}</td>
              <td class="px-4 py-2 border border-gray-300">${item.price}</td>
              <td class="px-4 py-2 border border-gray-300">${item.location}</td>
              <td class="px-4 py-2 border border-gray-300">${item.type}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <button
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    <a
                    href="./edit.html?id=${item.id}"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>
                  </button>

                  <button 
                    onclick="deletePitche('${item.id}')"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            `,
    )
    .join("");
});

function deletePitche(id) {
  const result = confirm("Ban co chac chan muon xoa khong?");
  console.log(result);
  if (result) {
    axios
      .delete(`http://localhost:3000/pitches/${id}`)
      .then(() => {
        alert("Xoa thanh cong");
      })
      .catch(() => {
        alert("Xoa that bai");
      });
  }
}
