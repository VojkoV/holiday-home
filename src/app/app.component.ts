import { CarouselItem } from './shared/carousel/carousel.component';
import { Component, OnInit } from '@angular/core';
import 'src/assets/layerslider/js/greensock.js'
import 'src/assets/layerslider/js/layerslider.kreaturamedia.jquery.js'
import 'src/assets/layerslider/js/layerslider.transitions.js'
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $('#layerslider').layerSlider({
      autoStart: true,
      navButtons: false,
      navStartStop: false,
      showCircleTimer: false,
      responsive: true,
      responsiveUnder: 1280,
      layersContainer: 1200,
      skinsPath: 'assets/layerslider/skins/',
      // Please make sure that you didn't forget to add a comma to the line endings
      // except the last line!
    });


	  $('input[name="dates"]').daterangepicker({
		  autoUpdateInput: false,
		  minDate:new Date(),
		  locale: {
			  cancelLabel: 'Clear'
		  }
	  });
	  // $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
		//   $(this).val(picker.startDate.format('MM-DD-YY') + ' > ' + picker.endDate.format('MM-DD-YY'));
	  // });
	  // $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
		//   $(this).val('');
	  // });
  }
}
