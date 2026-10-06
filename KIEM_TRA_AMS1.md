# ASM 1 -- JAVASCRIPT NÂNG CAO

## Thời gian

**60 phút**

## Tổng điểm

**10 điểm**

## Đề bài

Xây dựng website **Quản lý sân bóng** sử dụng HTML, CSS, JavaScript,
Axios và JSON Server.

### Cấu trúc project

```text
project/
├── index.html
├── index.js
├── add.html
├── add.js
└── db.json
```

## Dữ liệu mẫu `db.json`

```json
{
  "pitches": [
    {
      "id": "1",
      "name": "Sân bóng số 01",
      "price": 200000,
      "location": "Hà Đông",
      "type": "Sân 5"
    },
    {
      "id": "2",
      "name": "Sân bóng số 02",
      "price": 250000,
      "location": "Thanh Xuân",
      "type": "Sân 7"
    },
    {
      "id": "3",
      "name": "Sân bóng số 03",
      "price": 180000,
      "location": "Cầu Giấy",
      "type": "Sân 5"
    },
    {
      "id": "4",
      "name": "Sân bóng số 04",
      "price": 300000,
      "location": "Hà Đông",
      "type": "Sân 7"
    }
  ]
}
```

Endpoint:

```text
http://localhost:3000/pitches
```

# Yêu cầu

## Câu 1 -- Hiển thị danh sách sân bóng (2 điểm)

Tạo `index.html` và `index.js`.

- Dùng Axios GET dữ liệu từ `/pitches`.
- Hiển thị danh sách sân bóng lên bảng.
- Sử dụng `map()`, template literal, `join("")`, `innerHTML`.

Bảng gồm:

- STT
- Tên sân
- Giá/giờ
- Địa điểm
- Loại sân
- Thao tác

## Câu 2 -- Xóa sân bóng (2 điểm)

Tại cột **Thao tác**, tạo nút **Xóa**.

Khi nhấn Xóa:

1.  Hiển thị `confirm()`.
2.  Chọn OK thì gọi API DELETE bằng Axios.
3.  Xóa đúng sân theo `id`.
4.  Load lại danh sách sau khi xóa.
5.  Chọn Cancel thì không xóa.

## Câu 3 -- Thêm sân bóng (2 điểm)

Tạo `add.html` và `add.js`.

Form gồm:

- Tên sân
- Giá/giờ
- Địa điểm
- Loại sân

Khi submit:

- Dùng `addEventListener("submit", ...)`.
- Dùng `event.preventDefault()`.
- Lấy dữ liệu từ form.
- Gửi dữ liệu bằng Axios `POST`.
- Thêm thành công chuyển về danh sách bằng:

```javascript
location.replace("index.html");
```

## Câu 4 -- Validate dữ liệu (2 điểm)

Validate trước khi gọi API POST.

### Tên sân

- Không được để trống.
- Tối thiểu 5 ký tự.

### Giá/giờ

- Không được để trống.
- Phải là số.
- Giá lớn hơn 0.

### Địa điểm

- Không được để trống.

### Loại sân

Chỉ được chọn:

- `Sân 5`
- `Sân 7`

Nếu dữ liệu không hợp lệ:

- Hiển thị thông báo lỗi.
- Dùng `return` để dừng chương trình.
- Không gọi API POST.

## Câu 5 -- Thêm Cột dữ liệu trong danh sách (1 điểm)

Thêm cột **Giá thuê 2 giờ**.

Công thức:

```text
Giá thuê 2 giờ = Giá/giờ × 2
```

Ví dụ:

```text
Giá/giờ: 250000
Giá thuê 2 giờ: 500000
```

## Câu 6 -- Yêu cầu nâng cao (1 điểm)

Tạo chức năng tìm kiếm sân bóng theo **tên sân**.

- Có ô nhập từ khóa.
- Khi tìm kiếm phải gọi API JSON Server.
- Không dùng `filter()` để lọc trên JavaScript.
- Sử dụng query của JSON Server, ví dụ:

```text
GET /pitches?name_like=02
```

- Hiển thị kết quả lên bảng.

# Tổng điểm

Câu Nội dung Điểm

---

| Câu      | Nội dung Điểm             |        |
| -------- | ------------------------- | ------ |
| Câu 1    | GET và hiển thị danh sách | 2      |
| Câu 2    | Xóa + confirm             | 2      |
| Câu 3    | Form + POST               | 2      |
| Câu 4    | Validate dữ liệu          | 2      |
| Câu 5    | Cột giá thuê 2 giờ        | 1      |
| Câu 6    | Tìm kiếm bằng JSON Server | 1      |
| **Tổng** |                           | **10** |
