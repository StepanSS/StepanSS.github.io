$(document).ready(function(){$('.adv-boxes .adv-box').responsiveEqualHeightGrid();$('.affiliate-row .table').responsiveEqualHeightGrid();if($.browser.msie&&$.browser.version==9){$('body').addClass('ie9');}
if($.browser.msie&&$.browser.version<=9){$('#nav ul li:last').addClass('last-child');}});(function($){$.fn.equalHeight=function(){var heights=[];$.each(this,function(i,element){$element=$(element);var element_height;var includePadding=($element.css('box-sizing')=='border-box')||($element.css('-moz-box-sizing')=='border-box');if(includePadding){element_height=$element.outerHeight();}else{element_height=$element.height();}
heights.push(element_height);});this.css('height',Math.max.apply(window,heights)+'px');return this;};$.fn.equalHeightGrid=function(columns){var $tiles=this;$tiles.css('height','auto');for(var i=0;i<$tiles.length;i++){if(i%columns===0){var row=$($tiles[i]);for(var n=1;n<columns;n++){row=row.add($tiles[i+n]);}
row.equalHeight();}}
return this;};$.fn.detectGridColumns=function(){var offset=0,cols=0;this.each(function(i,elem){var elem_offset=$(elem).offset().top;if(offset===0||elem_offset==offset){cols++;offset=elem_offset;}else{return false;}});return cols;};$.fn.responsiveEqualHeightGrid=function(){var _this=this;function syncHeights(){var cols=_this.detectGridColumns();_this.equalHeightGrid(cols);}
$(window).bind('resize load',syncHeights);syncHeights();return this;};})(jQuery);