router.index('/profile', (req, res) => {
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


const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD