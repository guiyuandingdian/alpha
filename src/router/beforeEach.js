export default (to, from, next) => {
  if (to.matched.some(route => route.meta.ouths)) {

    next('/Login')
  } else {
    next()
  }
}
