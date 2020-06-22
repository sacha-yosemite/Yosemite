var ASCII_KEY_CODES = {
	ENTER: 13,
	SPACE: 32,
};
mapkit.init({
	authorizationCallback: function(done) {
		var xhr = new XMLHttpRequest();
        xhr.open("GET", "/services/jwt");
        xhr.addEventListener("load", function() {
			done(this.responseText);
        });
        xhr.send();
    }
});
var map = new mapkit.Map('map');
map.colorScheme = mapkit.Map.ColorSchemes.Dark;
//map.ColorSchemes;


var calloutDelegate = {

    calloutContentForAnnotation: function(annotation) {

		var element = document.createElement("div");
        	element.className = "mk-standard";

		var title = element.appendChild(document.createElement("div"));
        	title.className = "mk-title";
			title.textContent = annotation.title;

		var subtitle = element.appendChild(document.createElement("div"));
        	subtitle.className = "mk-subtitle";
			subtitle.textContent = annotation.subtitle;

        var link = element.appendChild(document.createElement("a"));
        	link.href = annotation.data.directionsLink;
        	link.textContent = "Get directions";

        return element;

    }
};

var calloutDelegateConferences = {

    calloutContentForAnnotation: function(annotation) {

		var element = document.createElement("div");
        	element.className = "mk-standard";

		var title = element.appendChild(document.createElement("div"));
        	title.className = "mk-title";
			title.textContent = annotation.title;

		var subtitle = element.appendChild(document.createElement("div"));
        	subtitle.className = "mk-subtitle";
			subtitle.textContent = annotation.subtitle;

		var linkElement = document.createElement("a");
		linkElement.setAttribute('target', '_blank');

        var link = element.appendChild(linkElement);
        	link.href = annotation.data.learnMore;
        	link.textContent = "Learn more";

        return element;

    }
};

var calloutDelegateWWDC = {

    calloutContentForAnnotation: function(annotation) {

		var element = document.createElement("div");
        	element.className = "mk-standard";

		var title = element.appendChild(document.createElement("div"));
        	title.className = "mk-title";
			title.textContent = annotation.title;

        return element;

    }
};

var  transitConventionCenter = new mapkit.Coordinate(37.3300, -121.8901)
	,altConf = new mapkit.Coordinate(37.330520, -121.888395) 
	,trySwift = new mapkit.Coordinate(37.329252, -121.890540) 
	,layersConf = new mapkit.Coordinate(37.33095, -121.88917) 
	,loopBash = new mapkit.Coordinate(37.32999, -121.885755) 
	,theTalkShow = new mapkit.Coordinate(37.3304, -121.8871) 
	,jamesDempsey = new mapkit.Coordinate(37.330049, -121.885400)
	,sapCodeJam = new mapkit.Coordinate(37.330021, -121.891039)
	,ibmSwift = new mapkit.Coordinate(37.330200, -121.888085)
	,wwdc = new mapkit.Coordinate(37.3289, -121.8889) 
	,airportOakland = new mapkit.Coordinate(37.710477, -122.213953)
	,airportSanFrancisco = new mapkit.Coordinate(37.616934, -122.383790)
	,airportSanJose = new mapkit.Coordinate(37.369424, -121.929359);

//Transit Convention center
var targetOptions1 = {
	callout: calloutDelegate,
	title: "Convention Center",
	subtitle: "VTA",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-transit.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-transit_2x.png"
	},
	data: {
		directionsLink: "https://maps.apple.com/?address=San%20Jose,%20CA,%20United%20States&auid=10050066853556102917&ll=37.329983,-121.890248&lsp=9902&q=Convention%20Center%20Station&t=m"
	}
	
};


//Alt Conf
var targetOptions2 = {
	callout: calloutDelegateConferences,
	title: "AltConf",
	subtitle: "San Jose Marriott",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-alt-conf.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-alt-conf_2x.png"
	},
	data: {
		learnMore: "http://altconf.com/"
	}
	
};

//trySwift
var targetOptions3 = {
	callout: calloutDelegateConferences,
	title: "try! Swift",
	subtitle: "Hilton San Jose",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-try_swift.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-try_swift_2x.png"
	},
	data: {
		learnMore: "https://www.tryswift.co/events/2019/sanjose/"
	}
	
};

//Layers
var targetOptions4 = {
	callout: calloutDelegateConferences,
	title: "Layers",
	subtitle: "Montgomery Theater",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-layers.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-layers_2x.png"
	},
	data: {
		learnMore: "https://layers.is"
	}
	
};

//Beard Bash
var targetOptions5 = {
	callout: calloutDelegateConferences,
	title: "The Loop Bash",
	subtitle: "The Ritz",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-loop.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-loop_2x.png"
	},
	data: {
		learnMore: "http://www.loopinsight.com/2019/05/22/the-loop-bash-at-wwdc-2019/"
	}
	
};

//The Talk Show with John Gruber Live
var targetOptions6 = {
	callout: calloutDelegateConferences,
	title: "The Talk Show with John Gruber Live",
	subtitle: "California Theater",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-daring-fireball.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-daring-fireball_2x.png"
	},
	data: {
		learnMore: "https://daringfireball.net/thetalkshow/live"
	}
	
};

//James Dempsey and the Breakpoints
var targetOptions7 = {
	callout: calloutDelegateConferences,
	title: "James Dempsey and the Breakpoints",
	subtitle: "The Ritz",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-breakpoints.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-breakpoints_2x.png"
	},
	data: {
		learnMore: "http://livenearwwdc.com"
	}
	
};


//SAP
var targetOptions12 = {
	callout: calloutDelegateConferences,
	title: "SAP CodeJam",
	subtitle: "Hyatt Place San Jose",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-sap.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-sap_2x.png"
	},
	data: {
		learnMore: "https://www.sap.com/community/events/codejam/wwdc.html"
	}
	
};

//IBM
var targetOptions14 = {
	callout: calloutDelegateConferences,
	title: "IBM Call for Code Workshop Day",
	subtitle: "San Jose Marriott",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-ibm.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-ibm_2x.png"
	},
	data: {
		learnMore: "http://ibm.biz/IBM_Workshop_Day"
	}
	
};



//wwdc
var targetOptions8 = {
	callout: calloutDelegateWWDC,
	title: "WWDC19",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-apple.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-apple_2x.png"
	},
	data: {}
};


//Airports
var targetOptions9 = {
	callout: calloutDelegate,
	title: "San Francisco International Airport",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-airport.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-airport_2x.png"
	},
	data: {
		directionsLink: "http://maps.apple.com/maps?address=San%20Francisco,%20CA%20%2094128,%20United%20States&auid=12900936114067923620&ll=37.616934,-122.383790&lsp=9902&q=San%20Francisco%20International%20Airport&t=m"
	}
	
};

var targetOptions10 = {
	callout: calloutDelegate,
	title: "Oakland International Airport",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-airport.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-airport_2x.png"
	},
	data: {
		directionsLink: "http://maps.apple.com/maps?address=1%20Airport%20Dr,%20Oakland,%20CA%2094621,%20United%20States&auid=8603298753475529163&ll=37.710477,-122.213953&lsp=9902&q=Oakland%20International%20Airport&t=m"
	}
	
};

var targetOptions11 = {
	callout: calloutDelegate,
	title: "Mineta San José International Airport",
	url: {
		1: "/wwdc19/images/more/wwdc19-map-icon-airport.png",
		2: "/wwdc19/images/more/wwdc19-map-icon-airport_2x.png"
	},
	data: {
		directionsLink: "http://maps.apple.com/maps?address=1701%20Airport%20Blvd,%20San%20Jose,%20CA%20%2095110-1202,%20United%20States&auid=16375256398390226749&ll=37.369424,-121.929359&lsp=9902&q=Mineta%20San%20José%20International%20Airport&t=m"
	}
	
};

map.addAnnotation(new mapkit.ImageAnnotation(altConf, targetOptions2));
map.addAnnotation(new mapkit.ImageAnnotation(trySwift, targetOptions3));
map.addAnnotation(new mapkit.ImageAnnotation(layersConf, targetOptions4));
map.addAnnotation(new mapkit.ImageAnnotation(loopBash, targetOptions5));
map.addAnnotation(new mapkit.ImageAnnotation(theTalkShow, targetOptions6));
map.addAnnotation(new mapkit.ImageAnnotation(jamesDempsey, targetOptions7));
map.addAnnotation(new mapkit.ImageAnnotation(sapCodeJam, targetOptions12));
map.addAnnotation(new mapkit.ImageAnnotation(ibmSwift, targetOptions14));
map.addAnnotation(new mapkit.ImageAnnotation(wwdc, targetOptions8));
map.addAnnotation(new mapkit.ImageAnnotation(airportSanFrancisco, targetOptions9));
map.addAnnotation(new mapkit.ImageAnnotation(airportOakland, targetOptions10));
map.addAnnotation(new mapkit.ImageAnnotation(airportSanJose, targetOptions11));


var sanJose = new mapkit.CoordinateRegion(
		new mapkit.Coordinate(37.33000, -121.88850),
		new mapkit.CoordinateSpan(.005, .005)
	),
    wwdc = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(37.3289, -121.8889),
        new mapkit.CoordinateSpan(0.005, 0.005)
	),
    airportsReagion = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(37.632749, -122.244815),
        new mapkit.CoordinateSpan(0.4, 0.4)
	),
    transitConventionCenter = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(37.3300, -121.8901),
        new mapkit.CoordinateSpan(0.005, 0.005)
	);

map.showsPointsOfInterest = false;
map.setRegionAnimated(sanJose);

var idRegionMap = {
	'wwdc': wwdc,
	'airportsReagion': airportsReagion,
	'transitConventionCenter': transitConventionCenter
};

for (var prop in idRegionMap) {
	if (idRegionMap.hasOwnProperty(prop)) {
		let triggerId = prop,
			region = idRegionMap[prop],
			triggerEl = document.getElementById(triggerId);

			if (triggerEl) {
			triggerEl.addEventListener('keydown mousedown', function(e) {
				switch(e.type) {
				
					case 'keydown':
						
						var keyCode = e.keyCode;
					
						if(keyCode !== ASCII_KEY_CODES.ENTER && keyCode !== ASCII_KEY_CODES.SPACE) {
							return;
						}
		
						/* falls through */
		
					case 'mousedown':
					console.log('kk');
					/* falls through */
		
					default:
						
						e.preventDefault();
						
						map.setRegionAnimated(region);
						
						break;
		
				}

			});
		}
	}
}
