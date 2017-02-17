var tl = new TimelineMax({repeat: -1, repeatDelay: 20, yoyo:true});

//Array of all polygons
var polygons = ["OOOOO", "QQQQQ", "PPPPP", "NNNNN", "MMMMM", "LLLLL", "KKKKK", "JJJJJ", "GGGGG", "HHHHH", "FFFFF", "IIIII", "YYYY", "ZZZZ", "AAAAA", "RRRR", "XXXX", "VVVV", "UUUU", "TTTT", "SSSS", "JJJ", "KKK", "LLL", "MMM", "NNN", "OOO", "JJJJ", "IIII", "HHHH", "AAAA", "GGGG", "FFFF", "EEEE", "BBBB", "YYY", "ZZZ", "CCCC", "DDDD", "TTTTT", "RRR", "TTT", "UUU", "SSS", "A", "QQQ", "RRRRR", "J", "K", "SSSSS", "M", "N", "UUUUU", "W", "O", "S", "R", "V", "U", "X", "Y", "T", "Z", "AA", "BB", "CC", "NN", "MM", "LL", "D", "I", "H", "G", "F", "E", "JJ", "KK", "OO", "PP", "QQ", "AAA", "EEE", "FFF", "GGG", "III", "HHH", "DDD", "CCC", "BBB", "ZZ", "YY", "XX", "RR", "SS", "UU", "WW", "VV", "DDDDD", "EEEEE", "CCCCC", "BBBBB", "NNNN", "MMMM", "OOOO", "PPPP", "QQQQ", "LLLL", "KKKK", "XXX", "VVV", "C", "B", "P", "Q", "DD", "EE", "II", "HH", "GG", "FF", "TT"];

// alternative approach — use the polygons in the order they appear in the DOM
// (note: you would need to use the node directly as the first argument in the
// forEach, rather than creating a selector with the '.' character)
// var polygons = [].slice.call( document.querySelectorAll( 'polygon' ) );

//For each of those polygons
polygons.forEach( ( polygon, i ) => {
	tl.from( '.' + polygon, .125, { opacity: 0, ease: Elastic.easeInOut }, "-=0.025" );
});

tl.timeScale( '15' );
//sets time for entire timeline


	


