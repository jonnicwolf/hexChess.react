const pieces = {
  black: {
    bishop: 'src/assets/pieces/black/bishop.png',
    king: 'src/assets/pieces/black/king.png',
    knight: 'src/assets/pieces/black/knight.png',
    queen: 'src/assets/pieces/black/queen.png',
    pawn: 'src/assets/pieces/black/pawn.png',
    rook: 'src/assets/pieces/black/rook.png',
  },
  white: {
    bishop: 'src/assets/pieces/white/bishop.png',
    king:   'src/assets/pieces/white/king.png',
    knight: 'src/assets/pieces/white/knight.png',
    queen:  'src/assets/pieces/white/queen.png',
    pawn:   'src/assets/pieces/white/pawn.png',
    rook:   'src/assets/pieces/white/rook.png',
  }
}

const newBoard = {}
const starting_position = {
  a: ['','','','','',''],
  b: 
  [ pieces['black']["pawn"],
    '','','','','',
    pieces['white']['pawn']
  ],
  c: 
  [ pieces['black']['rook'],
    pieces['black']['pawn'],
    '','','','',
    pieces['white']['pawn'],
    pieces['white']['rook']
  ],
  d: 
  [ pieces['black']['knight'],
    '',
    pieces['black']['pawn'],
    '','','',
    pieces['white']['pawn'],
    '',
    pieces['white']['knight']
  ],
  e: 
  [ pieces['black']['king'],
    '','',
    pieces['black']['pawn'],
    '','',
    pieces['white']['pawn'],
    '','',
    pieces['white']['king']
  ],
  f: 
  [ pieces['black']['bishop'],
    pieces['black']['bishop'],
    pieces['black']['bishop'],
    '',
    pieces['black']['pawn'],
    '',pieces['white']['pawn'],
    '',pieces['white']['bishop'],
    pieces['white']['bishop'],
    pieces['white']['bishop']
  ],
  g: 
  [ pieces['black']['queen'],
    '','',
    pieces['black']['pawn'],
    '','',
    pieces['white']['pawn'],
    '','',
    pieces['white']['queen']
  ],
  h: 
  [ pieces['black']['knight'],
  '',
  pieces['black']['pawn'],
  '','','',
  pieces['white']['pawn'],
  '',
  pieces['white']['knight']
],
  i: 
  [ pieces['black']['rook'],
    pieces['black']['pawn'],
    '','','','',
    pieces['white']['pawn'],
    pieces['white']['pawn']
  ],
  k: 
  [ pieces['black']['pawn'],
    '','','','','',
    pieces['white']['pawn']
  ],
  l: ['','','','','',''],
};
const pawn = (activeCells, board) => {
  console.log(activeCells)
  const cell_a = activeCells[0]
  const cell_b = activeCells[1]
  //make each row an array of objects holding the img and the piece and the id of the cell
  console.log(board[cell_a[0]])
  console.log(cell_a)
  console.log(cell_b)
}

pawn(
  ['b1','b2'],
  starting_position
   )

