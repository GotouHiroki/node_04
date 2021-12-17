const express = require('express')
const homeController = require('./controllers/HomeController')
const homeController = require('./controllers/LoginController')
const item = require('./modules/item')
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD

router.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)

    if (login_name == default_login_name
        && password == default_passsword) {
        message = 'ログインしました'
    }
    res.send(message)
})

router.get('/',(req,res) => {
    let data = {}
    data.title = 'トップページ'
    res.render('index.ejd',data)
})

router.get('/profile', (req, res) => {
    let user = {
        name:'横浜太郎',
        birthplace:'横浜',
        hobby:['旅行','グルメ','スポーツ'],
    }
    let data = {}
    data.title = 'プロフィール'
    data.user = user
    res.render('profile/index.ejs',data)
})

router.get('/', (req, res) => {
    res.render('login/index.ejs')
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id
    res.render('profile/index.ejs')
})

router.get('/',homeController.index)
router.get('/profile',homeController.profile)

router.get('/item/:id',(req,res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    res.render('item/show.ejs',data)
})

module.exports = router