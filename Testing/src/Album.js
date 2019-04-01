var Album = Backbone.Collection.extend({
    model: Song,
    url: "api/posts",

    // OJO AL USO DE ()=> CUANDO SE REFERENCIA THIS
    getPopularSongs: function() {
        debugger;
        if (this.length === 0) return undefined;
        var sortedSongs = this.sortBy( (song) => {
            debugger;
            return song.get("numberOfPlays");
        })
        return sortedSongs[sortedSongs.length -1];
    }

});

var album1 = new Album();

album1.add({
    title: "Revolución",
    numberOfPlays:32
});

album1.add({
    title: "Y ahora qué",
    numberOfPlays:30
});

var album2 = new Album();

album2.add({
    title: "Salve",
    numberOfPlays:15
});