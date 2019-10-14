/* -----------------------------------------------------------------------------------------------------------
# Name 		: Javascript Chart SVG Project
# Author 	: JC_Programs
----------------------------------------------------------------------------------------------------------- */
(function() {
	this.JC_Chart = function(frmID, cop, data) {
		// cv init ------------------------------------------------------------------------
		let cv 	= document.querySelector("#" + frmID),
			JCF = document.createElement('div');
			SVG = document.createElement('svg');

		let cvW = cv.clientWidth,
			cvH = cv.clientHeight;

		SVG.setAttribute('version', '1.2');
		SVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		SVG.setAttribute('width', cvW);
		SVG.setAttribute('height', cvH);
		SVG.setAttribute('mode', "basic-chart");
		SVG.style.cssText = `border: 1px #ddd solid; background: #fff; font-family:"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;font-size:12px;`;

		JCF.style.cssText = `position: relative; overflow: hidden; 
		width: ${cvW}px; height: ${cvH}px; text-align: left; 
		line-height: normal; z-index: 0; display:none; 
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);`;

		JCF.append(SVG);
		document.body.append(JCF);

		// space jarak zona draw path -----------------------------------------------------
		let spcB 	= 30,
			spcR 	= 30,
			spcT 	= 80,
			spcL 	= 50;
		
		// data dan reange tertinggi ------------------------------------------------------
		let keyData 			= Object.keys(data),
			valData 			= Object.values(data);

		let stepRangeDataRow,
			maxIndicator		= 0;
		let maxData 			= Math.max.apply( null, valData );
		
			if ( maxData <= 50 ) {
				stepRangeDataRow = 10;
			}
			else if ( maxData <= 100 ) {
				stepRangeDataRow = 20;
			}
			else if ( maxData <= 150 ) {
				stepRangeDataRow = 30;
			}
			else if ( maxData <= 200 ) {
				stepRangeDataRow = 40;
			}
			else if ( maxData <= 250 ) {
				stepRangeDataRow = 50;
			}
			else if ( maxData <= 300 ) {
				stepRangeDataRow = 60;
			}
			else if ( maxData <= 350 ) {
				stepRangeDataRow = 70;
			}
			else if ( maxData <= 400 ) {
				stepRangeDataRow = 80;
			}
			else if ( maxData <= 450 ) {
				stepRangeDataRow = 90;
			}
			else if ( maxData <= 500 ) {
				stepRangeDataRow = 100;
			}
			else if ( maxData <= 550 ) {
				stepRangeDataRow = 110;
			}
			else if ( maxData <= 600 ) {
				stepRangeDataRow = 120;
			}
			else if ( maxData <= 650 ) {
				stepRangeDataRow = 130;
			}
			else if ( maxData <= 700 ) {
				stepRangeDataRow = 140;
			}
			else if ( maxData <= 750 ) {
				stepRangeDataRow = 150;
			}
			else if ( maxData <= 800 ) {
				stepRangeDataRow = 160;
			}
			else if ( maxData <= 850 ) {
				stepRangeDataRow = 170;
			}
			else if ( maxData <= 900 ) {
				stepRangeDataRow = 180;
			}
			else if ( maxData <= 950 ) {
				stepRangeDataRow = 190;
			}
			else if ( maxData <= 1000 ) {
				stepRangeDataRow = 200;
			}
			else if ( maxData <= 2000 ) {
				stepRangeDataRow = 250;
			}
			else if ( maxData <= 3000 ) {
				stepRangeDataRow = 300;
			}
			else if ( maxData <= 4000 ) {
				stepRangeDataRow = 400;
			}
			else if ( maxData <= 5000 ) {
				stepRangeDataRow = 500;
			}
			else if ( maxData <= 6000 ) {
				stepRangeDataRow = 600;
			}
			else if ( maxData <= 7000 ) {
				stepRangeDataRow = 700;
			}
			else if ( maxData <= 8000 ) {
				stepRangeDataRow = 800;
			}
			else if ( maxData <= 9000 ) {
				stepRangeDataRow = 900;
			}
			else if ( maxData <= 10000 ) {
				stepRangeDataRow = 1000;
			}
			else if ( maxData <= 20000 ) {
				stepRangeDataRow = 2000;
			}
			else if ( maxData <= 30000 ) {
				stepRangeDataRow = 3000;
			}
			else if ( maxData <= 40000 ) {
				stepRangeDataRow = 4000;
			}
			else if ( maxData <= 50000 ) {
				stepRangeDataRow = 5000;
			}
			else if ( maxData <= 60000 ) {
				stepRangeDataRow = 6000;
			}
			else if ( maxData <= 70000 ) {
				stepRangeDataRow = 7000;
			}
			else if ( maxData <= 80000 ) {
				stepRangeDataRow = 8000;
			}
			else if ( maxData <= 90000 ) {
				stepRangeDataRow = 9000;
			}
			else if ( maxData <= 100000 ) {
				stepRangeDataRow = 10000;
			}
			else if ( maxData <= 200000 ) {
				stepRangeDataRow = 20000;
			}
			else if ( maxData <= 300000 ) {
				stepRangeDataRow = 30000;
			}
			else if ( maxData <= 400000 ) {
				stepRangeDataRow = 40000;
			}
			else if ( maxData <= 500000 ) {
				stepRangeDataRow = 50000;
			}
			else if ( maxData <= 600000 ) {
				stepRangeDataRow = 60000;
			}
			else if ( maxData <= 700000 ) {
				stepRangeDataRow = 70000;
			}
			else if ( maxData <= 800000 ) {
				stepRangeDataRow = 80000;
			}
			else if ( maxData <= 900000 ) {
				stepRangeDataRow = 90000;
			}
			else if ( maxData <= 1000000 ) {
				stepRangeDataRow = 100000;
			}
			else {
				stepRangeDataRow = 100000;
			}

		if ( maxData % stepRangeDataRow === 0 ) {
			maxIndicator = maxData + stepRangeDataRow; 
		}
		else {
			maxIndicator 	= maxData + ( stepRangeDataRow - ( maxData % stepRangeDataRow ) );
		}

		// zona block ----------------------------------------------------------------------
		let zonRow 	= ( cvH - spcB ) - spcT,
			zonCol 	= ( cvW - spcL ) - spcR;

		let countLineX 	= ( maxIndicator / stepRangeDataRow ) + 1,
			blockRow 	= zonRow / ( countLineX - 1 ),
			blockCol 	= zonCol / valData.length;
		
		// Draw path on canvas -------------------------------------------------------------
		let draw = {
			line : function(mX, mY, lX, lY, sty, wd, g) {
				let ln = document.createElement('line');
					ln.setAttribute('x1', lX);
					ln.setAttribute('y1', lY);
					ln.setAttribute('x2', mX);
					ln.setAttribute('y2', mY);

				ln.style.cssText = `stroke: ${sty}; stroke-width: ${wd}`;
				g.append(ln);
			},
			text : function(txt, tX, tY, sty, fs, g) {
				let tx = document.createElement('text');
					tx.setAttribute('x', tX);
					tx.setAttribute('y', tY);
					tx.setAttribute('fill', sty);
					tx.setAttribute('font-size', fs);
				let nd = document.createTextNode(txt);
					tx.append(nd);
				g.append(tx);
			}
		}
		
		// object set on canvas ------------------------------------------------------------
		let object = {
			// set horizontal line
			lineX : function() {
				let g 			= document.createElement('g');
					g.classList.add('jc-grid-chart-x');
				let drawPosH 	=  cvH-spcB;
				for ( let i = 0; i < countLineX; i++) {
					draw.line( cvW-spcR, drawPosH, spcL, drawPosH, "#666", 0.2, g);
					drawPosH -= blockRow;
				}
				SVG.append(g);
			},

			// set text indikator value data
			indGraphY : function() {
				let g 			= document.createElement('g');
					g.classList.add('jc-tx-chart-y');
				let drawPosH 	= cvH-spcB,
					indGraph 	= 0;
				for ( let i = 0; i < countLineX; i++) {
					draw.text( indGraph, spcL - 35, drawPosH + 2, "#393A3B", 12, g);
					indGraph += stepRangeDataRow;
					drawPosH -= blockRow;
				}
				SVG.append(g);
			},

			// set text indikator key data
			indGraphX : function() {
				let g 			= document.createElement('g');
					g.classList.add('jc-tx-chart-x');
				let startCol 	= spcR;
				for ( let i = 0; i < keyData.length; i++) {
					draw.text( keyData[i], startCol + 50, cvH-spcB + 20, "#233A23", 12, g);
					startCol += blockCol;
				}
				SVG.append(g);
			},

			// set data and value
			data : function(sec) {
				let g 			= document.createElement('g'),
					gt 			= document.createElement('g');
					g.classList.add('jc-bar-chart');
					gt.classList.add('jc-tx-val-chart');
				let startCol 	= spcR;
				let barColor 	= ["#3CA5E1", "#8C25AE", "#189326", "#D90C0C", "#EEB210"];
				let rc 			= 0;
				for ( let i = 0; i < valData.length; i++) {
					let setData 	= (cvH-spcB);

					if ( (valData[i] / sec) > 0 ) {
						setData = (cvH-spcB) - ( (valData[i] / sec) * (blockRow/stepRangeDataRow) );
					}
					else {
						setData = (cvH-spcB);
					}
					if (rc >= barColor.length) {rc = 0;}
					draw.line( startCol + 50, cvH-spcB, startCol + 50, setData, barColor[rc], 20, g);
					draw.text( Math.ceil(valData[i] / sec), startCol + 45, setData - 5, barColor[rc], 12, gt);
					startCol 	+= blockCol;
					rc 			+= 1;
				}
				SVG.append(g);
				SVG.append(gt);
			},
			title : function() {
				let g 			= document.createElement('g');
					g.classList.add('jc-tx-ttl-chart');

				let title 	= cop.title,
				subtitle 	= cop.subtitle;
				draw.text(title, spcL, 30, "#000", 20, g);
				draw.text(subtitle, spcL, 50, "#000", 15, g);
				SVG.append(g);	
			}
		}
		
		let starter = function(cb) {
			fetch("js/JC_Chart.js").then(function(r) { r.text().then(function(res) {
					if (typeof cb == "function") { cb(res) }
				}).catch(function(er) { console.log(er) })
			}).catch(function(e) {console.log(e)})
		}

		// start chart ------------------------------------------------------------------------
		let sec = 50;
		let animateChart = setInterval(function() {
			if (sec <= 1) {
				clearInterval(animateChart);
				sec = 1;
				JCF.remove();
			}
			SVG.innerHTML = "";

			object.lineX();
			object.indGraphY();
			object.indGraphX();
			object.title();
			object.data(sec);

			cv.innerHTML = JCF.innerHTML;
			if (sec === 1) {
				starter(function(res) {eval(res);__JC(cv.querySelector('svg'), data)});
			}
			sec -= 1;
		}, 20);
	}
}());