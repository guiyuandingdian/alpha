export default (to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuths)) {

    next('/Login')
  } else {
    next()
  }
}
