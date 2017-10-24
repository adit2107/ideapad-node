if(process.env.NODE_ENV === 'production'){
  module.exports = {
    mongoURI: 'mongodb://adit21:iamadit2107@ds231315.mlab.com:31315/ideapad-prod'
  };
}else{
  module.exports = {
    mongoURI: 'mongodb://localhost/ideapad-dev'
  };
}
