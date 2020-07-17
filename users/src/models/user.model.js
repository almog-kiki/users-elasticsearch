const Schema = mainModule.mongoose.Schema;

const UserSchema = new Schema({
  firstname: {type: String,  es_boost:2.0, es_type:'keyword', es_indexed:true},
  lastname: {type: String, es_type:'keyword', es_indexed:true},
  username: {type: String, es_type:'keyword', es_indexed:true},
  password: String,
  role: {type: String, es_type:'keyword',es_indexed:true},
  createdAt: { type: Date, default: Date.now }
});

UserSchema.plugin(mainModule.mongoosastic,{
  hosts: [
    'localhost:9200',
    'es01:9200',
    'es02:9200'
  ]
});

let UserModel = mainModule.mongoose.model('User', UserSchema);

// can create setting to map  - nGram filter and analyzer
//https://github.com/mongoosastic/mongoosastic/issues/448 
UserModel.createMapping(function(err, mapping) {
  if (err) {
    mainModule.utils.log('error creating UserModel mapping (you can safely ignore this)');
    mainModule.utils.log(err);
  } else {
    mainModule.utils.log('UserModel mapping created!');
    mainModule.utils.log(mapping);
  }
});

module.exports = UserModel;
