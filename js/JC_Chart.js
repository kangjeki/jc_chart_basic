var __JC = function(svgBlk, data) {
	let tips = function(ev, el, fm, ind) {
		let crX 	= ev.pageX,
			crY 	= ev.pageY;
		let txMacth = svgBlk.querySelectorAll(".jc-tx-chart-x text"),
			txnd 	= txMacth[ind].innerHTML,
			nd 		= document.createTextNode(txnd + ": " + data[txnd]);
		fm.appendChild(nd);
		if ( svgBlk.parentElement.querySelectorAll('.tx-info').length === 0 ) {
			let strk = el.style.stroke;
			svgBlk.parentElement.append(fm);
			fm.style.cssText = `position: fixed; top: ${crY - 50}px; left: ${crX - 20}px; z-index: 555; transition: 3s; 
			background: #f9f9f9; color: ${strk}; margin: 0; padding: 5px 15px; border: 1px ${strk} solid; border-radius: 3px;`;
		}
		else {
			fm.style.cssText = `top: ${crY - 20}px; left: ${crX}px; transition: 3s;`;
		}
	};
	if ( svgBlk.attributes.mode.nodeValue === "basic-chart" ) {
		svgBlk.querySelectorAll( '.jc-bar-chart line' ).forEach(function(el, ind) {
			let bs = el.style.stroke,
				sw = el.style.strokeWidth;
			el.onmousemove = function(ev) {
				let fm = document.createElement('div');
					fm.classList.add('tx-info');
				if (fm !== null) { tips(ev, el, fm, ind) };

				let rbs = bs.replace('rgb', 'rgba').replace(')', ', .7)');

				el.style.cssText = `stroke: ${rbs}; stroke-width:${sw}; box-shadow: 1px 1px 1px #AD15CE; cursor: pointer`;
				el.onmouseleave = function() {
					el.style.cssText = `stroke: ${bs}; stroke-width:${sw}`;
					if (fm !== null) { svgBlk.parentElement.querySelectorAll('.tx-info').forEach(function(efm) { efm.remove() })};
				}	
			}
		});	
	}
}
