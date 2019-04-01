describe("Song", () => {
    var song;

    beforeEach( ()=> {
        song = new Song();
    })

    it("url should be api/songs", ()=> {
        expect(song.urlRoot).toEqual("api/songs");
    });

    it("numberOfPlays attribute shoud be 0", () => {
        expect(song.get("numberOfPlays")).toEqual(0);
    });

    it("title is required", () => {
        expect(song.isValid()).toBeFalsy();
        /*  song.set({title: "Brácula. Con B de Barbate"})
        expect(song.isValid()).toBeTruthy(); */
    });

    it("plays should increment one by one", () => {
      song.play()
      expect(song.get("numberOfPlays")).toEqual(1);
    });
})