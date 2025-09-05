# Nurtur RESTful API

Sebuah RESTful API untuk manajemen data pengguna yang dibangun dengan Node.js, Express, dan MySQL. API ini dirancang dengan mempertimbangkan keamanan dan kemudahan penggunaan.

## Features

-   **CRUD Operations**: Menyediakan endpoint lengkap untuk Create, Read, Update, dan Delete (CRUD) data pengguna.
-   **Keamanan**: Menggunakan *prepared statements* untuk melindungi dari serangan SQL Injection.
-   **Validasi Input**: Menerapkan validasi dasar di sisi server untuk memastikan integritas data.
-   **Respons Terstandarisasi**: Menggunakan format JSON yang konsisten untuk semua respons sukses dan error.
-   **Manajemen Konfigurasi**: Konfigurasi terpusat untuk kemudahan pengelolaan environment.

## API Endpoints

Berikut adalah dokumentasi untuk setiap endpoint yang tersedia.

### Get All Users

-   **Method**: `GET`
-   **Endpoint**: `/users`
-   **Deskripsi**: Mengambil semua data pengguna.
-   **Contoh Respons Sukses (200 OK)**:
    ```json
    {
        "message": "GET all users berhasil",
        "data": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@example.com",
                "address": "123 Main St"
            },
            {
                "id": 2,
                "name": "Jane Doe",
                "email": "jane@example.com",
                "address": "456 Oak Ave"
            }
        ]
    }
    ```

### Create New User

-   **Method**: `POST`
-   **Endpoint**: `/users`
-   **Deskripsi**: Membuat pengguna baru.
-   **Request Body**:
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "securepassword123",
        "address": "123 Main St"
    }
    ```
-   **Contoh Respons Sukses (200 OK)**:
    ```json
    {
        "message": "CREATE new user berhasil",
        "data": {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "securepassword123",
            "address": "123 Main St"
        }
    }
    ```
-   **Contoh Respons Gagal (400 Bad Request)**:
    ```json
    {
        "message": "Request Body tidak valid",
        "error": "Nama, email, dan password harus diisi"
    }
    ```

### Update User

-   **Method**: `PATCH`
-   **Endpoint**: `/users/:idUser`
-   **Deskripsi**: Memperbarui data pengguna berdasarkan ID.
-   **Request Body**:
    ```json
    {
        "name": "John Doe Updated",
        "address": "456 New Ave"
    }
    ```
-   **Contoh Respons Sukses (200 OK)**:
    ```json
    {
        "message": "UPDATE user berhasil",
        "data": {
            "id": "1",
            "name": "John Doe Updated",
            "address": "456 New Ave"
        }
    }
    ```

### Delete User

-   **Method**: `DELETE`
-   **Endpoint**: `/users/:idUser`
-   **Deskripsi**: Menghapus pengguna berdasarkan ID.
-   **Contoh Respons Sukses (200 OK)**:
    ```json
    {
        "message": "Delete user berhasil",
        "data": null
    }
    ```

## Struktur Proyek
```
/
├── src/
│   ├── config/         # Konfigurasi aplikasi (database, env)
│   ├── controller/     # Logika bisnis (request & response)
│   ├── middleware/     # Middleware Express (e.g., logging)
│   ├── models/         # Interaksi dengan database (query)
│   └── routes/         # Definisi rute API
├── .env.example        # Contoh variabel environment
├── .gitignore
├── package.json
└── README.md
```

## Instalasi dan Setup

1.  **Clone repository ini:**
    ```sh
    git clone <URL_REPOSITORY_ANDA>
    cd <NAMA_DIREKTORI>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Setup Environment Variables:**
    Salin file `.env.example` menjadi `.env`.
    ```sh
    cp .env.example .env
    ```
    Kemudian, sesuaikan isinya dengan konfigurasi database Anda.
    ```
    PORT=5000
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=
    DB_NAME=nama_database_anda
    ```

4.  **Jalankan aplikasi:**
    ```sh
    npm start
    ```
    Server akan berjalan di `http://localhost:5000`.

## Tech Stack

-   **Node.js**: Runtime environment
-   **Express**: Web framework
-   **mysql2**: Driver MySQL untuk Node.js
-   **dotenv**: Untuk memuat variabel environment dari file `.env`
-   **nodemon**: Memantau perubahan file dan me-restart server secara otomatis
