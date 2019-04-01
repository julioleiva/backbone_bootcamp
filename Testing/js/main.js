
// MODELS

/* var Users = Backbone.Model.extend({
    urlRoot: 'https://jsonplaceholder.typicode.com/users'
})

var user = new Users();

var petGet = user.fetch({
    success: (response) => {
        let att = response.attributes
        
        //let keys = Object.keys(att)
        //let values = Object.values(att)
        //console.log("Values de Response:", values)
        //console.log("Keys de response:", keys)
        
        for (let i in att) {
            console.log(`${i} => ${response.attributes[i].name}`)
        }

    },
    error: (e) => {throw new Error("Error en la peti users")}
}) */


// COLLECTIONS 
var Song = Backbone.Model.extend({})



var Songs = Backbone.Collection.extend({
	model: Song
})

var songs = new Songs()

songs.add(new Song({title: "Song1", genre:"Jazz", downloads:100}))



songs.add(new Song(
    {title: "Song3", genre:"Punk", downloads:33}),
    // second argument for set position
	{at:0}
)


songs.push(new Song({title: "Song2", genre:"Rock", downloads:55}))


songs.models.map(a => a.get("title"))
// (4) ["Song3", "Song1", "Song2", "Song2"]