//this is an object that represents a deck of cards
//you can get an array of the whole deck. deck_of_cards.full_deck
//you can get single cards out of the deck. deck_of_cards.card('ace','spades')
//you can get an array by suit. deck_of_cards.suit.spades
function deck_of_cards(){
		
		//assigns images to each card. the images are in cards/suit/suit_face.gif
		function card(suit,face){
			return  "<img src='cards/"+suit+"/"+suit+"_"+face+".gif'/>";
		};
		
		//returns an array of a full deck of cards.array is in the order spades a-2, clubs a-2, hearts a-2, diamonds a-2  
		this.full_deck=	[ card("spades","ace"), card("spades","king"), card("spades","queen"), card("spades","jack"), card("spades","10"), card("spades","9"), card("spades","8"), card("spades","7"),card("spades","6"),card("spades","5"),card("spades","4"),card("spades","3"),card("spades","2"), 
			 card("clubs","ace"), card("clubs","king"), card("clubs","queen"), card("clubs","jack"), card("clubs","10"), card("clubs","9"), card("clubs","8"), card("clubs","7"),card("clubs","6"),card("clubs","5"),card("clubs","4"),card("clubs","3"),card("clubs","2"), 
			card("hearts","ace"), card("hearts","king"), card("hearts","queen"), card("hearts","jack"), card("hearts","10"), card("hearts","9"), card("hearts","8"), card("hearts","7"),card("hearts","6"),card("hearts","5"),card("hearts","4"),card("hearts","3"),card("hearts","2"), 
			card("diamonds","ace"), card("diamonds","king"), card("diamonds","queen"), card("diamonds","jack"), card("diamonds","10"), card("diamonds","9"), card("diamonds","8"), card("diamonds","7"),card("diamonds","6"),card("diamonds","5"),card("diamonds","4"),card("diamonds","3"),card("diamonds","2"), 
			];
			
		//returns a 13 length array of cards by suit 
		this.suit = {
				spades: this.full_deck.slice(0,13),
				clubs: this.full_deck.slice(13,26),
				hearts: this.full_deck.slice(26,39),
				diamonds: this.full_deck.slice(-13),
				
		};
		
		//lets you pull a single card out of the deck by suit and face value
		this.card = function(suit,face){
				return  card(suit,face);//this card function is coming from the first method in this object. it is used to set the images originally
		};
			
};
//end of deck_of_cards object ////I suspect that the architecture of this deck will have to change 
//once I start having to pull cards out of the deck array. I need to learn more about array methods.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


//generates a list of cards with id face (ace king queen etc..) labeles and lets you choose the suit that you want 
var make_list= function(set_suit){
	
var card_id = ["ace","king","queen","jack","ten","nine","eight","seven","six","five","four", "three","two"];
var counter= 0;
	
	//sets the suit to be made into a list. you can write make_list("spades") and it will set var suit to card_deck.suit.spades . this is an array of all the spades cards
	//var suit is used in the while loop that makes the li so that each card will be put into the li
	if(set_suit == "spades"){
		var suit = card_deck.suit.spades;
		}
	else if(set_suit == "diamonds"){
		var suit = card_deck.suit.diamonds;
		}	
	else if (set_suit == "clubs"){
		var suit =card_deck.suit.clubs;
		}
	else if (set_suit == "hearts"){
		var suit = card_deck.suit.hearts;
		}
	
	//adds 13 li elements to an unordered list with a class of 'list' . the suit variable is an array of cards by suit
	// the suit variable is set with the function parameter make_list('set_suit')
	while (counter<=12) {
		$('.list').append('<li>'+suit[counter]+'</li>')
	counter++;
	};
	
	//gives each of the li elements an id out of the card_id array so that all of the cards are labeled according to face value (ace, king, queen etc...)
	$.each(card_id, function(i,id){
        $("li").eq(i).attr('id',id);
    });
   	
};//ends the make_list function
