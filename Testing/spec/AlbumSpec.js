describe("Album", () => {
    var album;

    beforeEach(function(){
        album = new Album();
    });

    it("Url should be api/posts", function() {
        expect(album.url).toEqual("api/posts");            
    });

    describe("getPopularSongs", function() {
        it("it should return undefined", function(){
            expect(album.getPopularSongs()).toBeUndefined;
        });

        it("it should return the highest number of playings if not undefined", function(){
            var album1 = new Song({title:"Primer álbum", numberOfPlays:21});
            var album2 = new Song({title:"Segundo álbum", numberOfPlays:22});
            
            album.add(album1);
            album.add(album2);
            
            expect(album.getPopularSongs()).toEqual(album2);
        });
    });


})