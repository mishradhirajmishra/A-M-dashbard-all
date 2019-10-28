var express = require('express');
var router = express.Router();
var User = require('../model/Reactive');
var Profile = require('../model/Profile');
var DynamicUser = require('../model/Dynamicreactive');
var veryfyToken = require('../config/jwt-werify');
const bcryptjs = require('bcryptjs');

router.post('/register',veryfyToken, function (req, res, next) {
  const user = new User(req.body);  
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then((user) => {
          if (user) {
            res.status(200).json({ message: 'Registred successfully' })
          }
          else {
            res.status(201).json({ message: 'unable to register' })
          }
        }).catch(err => {
          res.json(err)
        })

    })
  });
});
router.post('/dynamic-register',veryfyToken, function (req, res, next) {
  const user = new DynamicUser(req.body);  
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then((user) => {
          if (user) {
            res.status(200).json({ message: 'Registred successfully' })
          }
          else {
            res.status(201).json({ message: 'unable to register' })
          }
        }).catch(err => {
          res.json(err)
        })

    })
  });
});

router.post('/profile', function (req, res, next) {
  const profile = new Profile({username:req.body.username});
  
  if (req.files && Object.keys(req.files).length != 0) { 
     var allImage =[] ;  
    for (let index = 0; index < req.files.image.length; index++) {
      var image = req.files.image[index].name;    
      image = new Date().getTime() + '_' + image
      var dir = "./public/images/" + image;
      sampleFile = req.files.image[index];
      sampleFile.mv(dir, function (err) {
        if (err) return res.status(500).send(err);
      });
      profile.image.push(image)
    }   
    profile.save()
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Registred successfully' })
      }
      else {
        res.status(201).json({ message: 'unable to register' })
      }
    }).catch(err => {
      res.json(err)
    })
  } 
  else{
    profile.save().then((user) => {
      if (user) {
        res.status(200).json({ message: 'Registred successfully' })
      }
      else {
        res.status(201).json({ message: 'unable to register' })
      }
    }).catch(err => {
      res.json(err)
    })
  }
  
});




router.post('/profile123', function (req, res, next) {

  const profile = new Profile({username:req.body.username,image:''});
  if (req.files && Object.keys(req.files).length != 0) {
    var image = req.files.image.name;
    image = new Date().getTime()+'_'+image
    var dir = "./public/images/"+image;
    sampleFile = req.files.image;
    sampleFile.mv(dir, function(err) {
        if (err) return res.status(500).send(err);
    });
    profile.image = image;
    profile.save()
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Registred successfully' })
      }
      else {
        res.status(201).json({ message: 'unable to register' })
      }
    }).catch(err => {
      res.json(err)
    })
  } 
  else{
    profile.save().then((user) => {
      if (user) {
        res.status(200).json({ message: 'Registred successfully' })
      }
      else {
        res.status(201).json({ message: 'unable to register' })
      }
    }).catch(err => {
      res.json(err)
    })
  }

});
module.exports = router;
