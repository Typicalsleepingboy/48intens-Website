const express = require("express");
const app = express();
const request = require("request");

// Route untuk proxy
app.get("/proxy", (req, res) => {
    // Mendapatkan URL target dari query string
    const url = req.query.url;

    // Memastikan URL target disediakan
    if (!url) {
        return res.status(400).send("No URL provided");
    }

    // Melakukan permintaan proxy menggunakan package 'request'
    request(url, (error, response, body) => {
        if (error) {
            console.error("Error proxying request:", error);
            return res.status(500).send("Error proxying request");
        }

        // Mengirimkan respons dari target URL kembali ke klien
        res.send(body);
    });
});

// Route utama
app.get("/", (req, res) => res.send("Express on Vercel"));

// Menjalankan server pada port 3000
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;