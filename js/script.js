/* ================= Android stock browser ================= */
$(function () {
	var nua = navigator.userAgent
	var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%')
	}
})

/* ================= Script Here ================= */


/* ================= Script Here ================= */
var num = 100;

      $(window).bind('scroll', function () 
      {
        if ($(window).scrollTop() > num) 
        {
          $('.header').addClass('dis-transparent');
          //$('.page-header').addClass('hide-header');
        } 
        else 
        {
          $('.header').removeClass('dis-transparent');
          //$('.page-header').removeClass('hide-header');
        }
	  });
	  /* ================= Script Here ================= */
