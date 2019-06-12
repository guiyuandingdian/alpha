export default (to, from, next) => {
  if (to.matched.some(route => route.meta.outh)) {

    next('/Login')
  } else {
    next()
  }
}
