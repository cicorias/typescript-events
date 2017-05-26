import { FilterHandler } from "./FilterHandler";

console.log('starting...');

let v2 = new FilterHandler().addListener('ready', function(){
  console.log('in here')
})

v2.on('ready', (d)=> {
  console.log(d);
})


function handleit(){
  console.log('d');
}

v2.sendReady();

console.log('done')