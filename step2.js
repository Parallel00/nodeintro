const filsy = require('fs');
const proc = require('process');
const axios = require('axios');

function rdprt(p){
	filsy.readFile(path, 'utf8', function(err, dat){
		if (err){
			console.error(`Cannot read ${p}: ${err}`);
			proc.exit(1);
		}else{
			console.log(dat);
		}
	});
}

async function urlRd(url){
	try{
		let res = await axios.get(url);
		console.log(res.data);
	} catch (err){
		console.error(`Cannot fetch ${url}: ${err}`);
		process.exit(1);
	}
}

let pt = process.argv[2];

if (pt.slice(0, 4) === 'http'){
	urlRd(pt);
} else {
	rdprt(pt);
}