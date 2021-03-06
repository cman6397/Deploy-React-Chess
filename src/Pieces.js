
class Piece {
  constructor(player, img_url, name){
    this.player = player;
    this.style = {backgroundImage: "url('"+img_url+"')"};
    this.name = name;
    this.url = img_url;
    this.has_moved = false;
  }
}

class Pawn extends Piece {
  constructor(player){
    var url='https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
    if (player === 'black') {
        url = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
    }
    super(player, url, 'Pawn');
    this.just_moved_two = false;
  }
}

class Rook extends Piece {
    constructor(player) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
        if (player === 'black') {
            url = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'
        }
        super(player, url, 'Rook');
    }
}

class Knight extends Piece {
    constructor(player) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'
        if (player === 'black') {
            url = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'
        }
        super(player, url, 'Knight')
    }
}

class Bishop extends Piece {
    constructor(player) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'
        if (player === 'black') {
            url = 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'
        }
        super(player, url, 'Bishop')
    }
}

class Queen extends Piece {
    constructor(player) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
        if (player === 'black') {
            url = 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg'
        }
        super(player, url, 'Queen')
    }
}

class King extends Piece {
    constructor(player) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'
        if (player === 'black') {
            url = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg'
        }
        super(player, url, 'King')
    }
}



export {Pawn,Rook,Knight,Bishop,King,Queen}