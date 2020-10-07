class Game {
  constructor () {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers(){
    const players = [new Player('Rodrigo', 1, orange, true),new Player('Juan', 2, blue, false //<== but you can just not write anything because the default is false)];
    return players;
  }

}