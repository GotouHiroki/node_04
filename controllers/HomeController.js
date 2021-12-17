exports.index = () => {
    let data = {}
    data.title = 'トップページ'
    res.render('index.ejd', data)
}

router.profile('/profile', (req, res) => {
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