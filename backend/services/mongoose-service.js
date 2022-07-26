class MongooseService {
   constructor(Model) {
      this.model = Model
   }

   save(body) {
      return this.model.insertMany(body)
   }

   load() {
      return this.model.find()
   }

   async insert(body) {
      return await this.model.create(body)
   }

   async find(id) {
      return this.model.findById(id)
   }

   async findBy(property, value) {
      return this.model.find({[property]: value})
   }

   async findOne(property, value) {
      return this.model.findOne({[property]: value})
   }

   async removeOne(property, value) {
      return this.model.deleteOne({[property]: value})
   }

   async update(id, body, options = {lean: true, new: true}) {
      return this.model.findOneAndUpdate(id, body, options).exec()
   }
}

module.exports = MongooseService
