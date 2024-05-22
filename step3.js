const filsy = require('fs');
const proc = require('process');
const axios = require('axios');

function hndlOut(txt, out){
	if (out){
		filsy.writeFile(out, txt, 'utf8', function(err){
			if (err){
				console.error(`Cannot write file ${out}: ${err}`);
				proc.exit(1);
			}
		});
	} else {
		console.log(txt);
	}
}

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
		hndlOut(res.data, out);
	} catch (err){
		console.error(`Cannot fetch ${url}: ${err}`);
		proc.exit(1);
	}
}

let pt;
let output;

if (proc.argv[2] === '--out'){
	output = process.argv[3];
	pt = process.argv[4];
} else {
	pt = process.argv[2];
}

if (pt.slice(0, 4) === 'http'){
	urlRd(pt, output);
} else {
	rdprt(pt, output);
}