const auth = require('../auth/auth');
const checkUser = [auth.decodeToken(), auth.getFreshUser()];

module.exports = function(controller, router, type) {

  if (type === 'user') {
    router.param('id', controller.params);
    router.get('/me', checkUser, controller.me)

    router.route('/')
      .get(controller.get)
      .post(controller.post)

    router.route('/:id')
      .get(controller.getOne)
      .put(checkUser, controller.put)
      .delete(checkUser, controller.delete)

  } else {
    router.param('id', controller.params);

    router.route('/')
      .get(controller.get)
      .post(checkUser, controller.post)

    router.route('/:id')
      .get(controller.getOne)
      .put(checkUser, controller.put)
      .delete(checkUser, controller.delete)
  }

};