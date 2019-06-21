export default (to, from, next) => {
  
  if (to.matched.some(r => r.meta.requireAuths)) {           //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
  let token = localStorage.getItem('token');
    if (token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
}

