$(document).ready(function(){
		
		
				
  function sdf_FTS(_number,_decimal,_separator)
  {
  var decimal=(typeof(_decimal)!='undefined')?_decimal:2;
  var separator=(typeof(_separator)!='undefined')?_separator:'';
  var r=parseFloat(_number)
  var exp10=Math.pow(10,decimal);
  r=Math.round(r*exp10)/exp10;
  rr=Number(r).toFixed(decimal).toString().split('.');
  b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);
  r=(rr[1]?b+'.'+rr[1]:b);

  return r;
}
  
setTimeout(function(){
  $('#counter').text('0');
  $('#counter1').text('0');
  $('#counter2').text('0');
  $('#counter3').text('0');

  setInterval(function(){
    
    var curval=parseInt($('#counter').text());
    var curval1=parseInt($('#counter1').text().replace(' ',''));
    var curval2=parseInt($('#counter2').text());
    var curval3=parseInt($('#counter3').text());

    if(curval<=99){
      $('#counter').text(curval+1 + '%');
    }
    if(curval1<=10){
      $('#counter1').text(sdf_FTS((curval1+11),0,' '));
    }
    if(curval2<=9998){
      $('#counter2').text(curval2+2);
    }
    if(curval3<=99){
      $('#counter3').text(curval3+1);
    }
  }, 2);
  
}, 500);
});