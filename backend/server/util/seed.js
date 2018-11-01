const User = require('../api/user/userModel');
const Post = require('../api/post/postModel');
const Category = require('../api/category/categoryModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Xoko', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var categories = [
  {name: 'intros'},
  {name: 'angular'},
  {name: 'UI/UX'}
];

var posts = [
  {title: 'Learn angular 2 today', text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {title: '10 reasons you should love IE7', text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'},
  {title: 'Why we switched to Go', text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the .'}
];

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category, Post]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
}

var createUsers = function(data) {

  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createCategories = function(data) {
  var promises = categories.map(function(category) {
    return createDoc(Category, category);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({categories: categories}, data || {});
    });
};

var createPosts = function(data) {
  var addCategory = function(post, category) {
    post.categories.push(category);

    return new Promise(function(resolve, reject) {
      post.save(function(err, saved) {
        return err ? reject(err) : resolve(saved)
      });
    });
  };

  var newPosts = posts.map(function(post, i) {
    post.author = data.users[i]._id;
    return createDoc(Post, post);
  });

  return Promise.all(newPosts)
    .then(function(savedPosts) {
      return Promise.all(savedPosts.map(function(post, i){
        return addCategory(post, data.categories[i])
      }));
    })
    .then(function() {
      return 'Seeded DB with 3 Posts, 3 Users, 3 Categories';
    });
};

cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createPosts)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));