$(function() {

    // 新規登録モーダル
  
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
  
    $('#close-modal').click(function() {
      $('#signup-modal').fadeOut();
    });
  
    // 言語一覧
  
    $('.lesson').hover(
      function() {
        $(this).find('.text-contents').addClass('text-active');
      },
      function() {
        $(this).find('.text-contents').removeClass('text-active');
      }
    );
    
    $('.faq-list-item').click(function(){
      
      if($('.answer').hasClass('open')){
        $(this).find('.answer').removeClass('open');
        $(this).find('.answer').slideUp();
        $(this).find('span').text('+');
      }
      else{
        $(this).find('.answer').addClass('open');
        $(this).find('.answer').slideDown();
        $(this).find('span').text('-');
      }
    })
    
  
  
  });
  