import { Injectable } from '@angular/core';
declare var $:any;

@Injectable()
export class BootstrapCom
{
     handleTwoOrMoreModal(){
          $(function($){
            
            $(document).on('show.bs.modal', '.modal', function(event) {
                 $(this).appendTo($('body'));
            }).on('shown.bs.modal', '.modal.in', function(event) {
                 setModalsAndBackdropsOrder();
            }).on('hidden.bs.modal', '.modal', function(event) {
                 setModalsAndBackdropsOrder();
            });
        
            function setModalsAndBackdropsOrder() {
                 var modalZIndex = 1040;
                 $('.modal.in').each(function(index) {
                      var $modal = $(this);
                      modalZIndex++;
                      $modal.css('zIndex', modalZIndex);
                      $modal.next('.modal-backdrop.in').addClass('hidden').css('zIndex', modalZIndex - 1);
                 });
                 $('.modal.in:visible:last').focus().next('.modal-backdrop.in').removeClass('hidden');
            }
        
            
            $.fn.modal.Constructor.prototype.hideModal = function () {
                 var that = this
                 this.$element.hide()
                 this.backdrop(function () {
                      
                      $('.modal.fade.in').length === 0 && that.$body.removeClass('modal-open')
                      that.resetAdjustments()
                      that.resetScrollbar()
                      that.$element.trigger('hidden.bs.modal')
                 })
            }
        }); 
        }
}

