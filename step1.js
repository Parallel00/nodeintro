const filsy = require('fs');
const proc = require('process');

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

cat(proc.argv[2]);