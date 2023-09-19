const express = require(`express`)

const app = express()

app.set("view engine","ejs")

app.use(express.static(__dirname + `/public`))

app.get(`/`, (req, res) =>{
    res.render("index")
})

app.get('/login', (req, res) =>{
    res.render("login")
})

app.get('/registr', (req, res) =>{
    res.render("registr")
})

app.get('/profile' , (req,res) =>{
    res.render("profile")
})

const PORT = 3000;
app.listen(PORT, () =>{
    console.log('start');
})