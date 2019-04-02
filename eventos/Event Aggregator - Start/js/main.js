
var Venue = Backbone.Model.extend();

var Venues = Backbone.Collection.extend({
	model: Venue
});

var VenueView = Backbone.View.extend({
	tagName: "li",

	events: {
		"click": "onClick",
	},

	onClick: function(){
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

var VenuesView = Backbone.View.extend({
	tagName: "ul",

	initialize: function(options){
		debugger;
		this.bus = options.bus;	
	},

	id: "venues",

	render: function(){
		var self = this;

		this.model.each(function(venue){
			var view = new VenueView({ model: venue, bus: self.bus });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

var MapView = Backbone.View.extend({
	el: "#map-container",

	render: function(){
		if (this.model)
			this.$("#venue-name").html(this.model.get("name"));

		return this;
	}
})

var bus = _.extend({}, Backbone.Events)

var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
	]);

var venuesView = new VenuesView({ model: venues, bus: bus});
$("#venues-container").html(venuesView.render().$el);

var mapView = new MapView({bus: bus});
mapView.render();





