var game = function game(){
    this.score_sum = 0;
};

game.prototype.roll = function(pins){
    this.score_sum += pins;
};


game.prototype.score = function(){
	return this.score_sum;
};

if (typeof module != 'undefined') {
    module.exports.game = game;
};
