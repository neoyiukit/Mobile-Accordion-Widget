$(function() {
	var Accordion = function(accord, multiple) {
		this.accord = accord || {};
		this.multiple = multiple || false;
		// Variables
		var links = this.accord.find('.link');
		// Event
		links.on('click', {accord: this.accord, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $accord = e.data.accord;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$accord.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});